// Prerendering la build: generează HTML static complet pentru fiecare rută.
// Rulează după `vite build` (client) + `vite build --ssr` (server):
//   node scripts/prerender.mjs
// Rezultat: dist/<ruta>/index.html cu tot conținutul, meta tags per pagină
// și JSON-LD incluse — vizibile pentru Google și boții AI fără JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const templatePath = path.join(distDir, 'index.html')

const routes = [
  '/',
  '/preturi/epilare-definitiva',
  '/preturi/extensii-gene',
  '/preturi/tratamente-faciale',
  '/preturi/laminare-gene',
  '/preturi/scanare-ten',
  '/contact',
  '/termeni-conditii',
  '/politica-confidentialitate',
  '/anpc',
  '/solutionare-litigii',
  // pagina 404 servită de Vercel pentru orice URL inexistent
  '/404',
]

const template = fs.readFileSync(templatePath, 'utf-8')
const serverEntry = pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
const mod = await import(serverEntry)
const render = mod.render ?? mod.default?.render

let failures = 0
for (const route of routes) {
  try {
    const { html, helmet } = render(route === '/404' ? '/pagina-inexistenta-404' : route)

    const headTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ]
      .filter(Boolean)
      .join('\n    ')

    let page = template
      // titlul din template e înlocuit de cel per-pagină din Helmet
      .replace(/<title>[\s\S]*?<\/title>/, '')
      .replace('</head>', `    ${headTags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    const outFile =
      route === '/'
        ? templatePath
        : route === '/404'
          ? path.join(distDir, '404.html')
          : path.join(distDir, route.slice(1), 'index.html')

    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    fs.writeFileSync(outFile, page)

    const textLength = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length
    console.log(`✓ ${route} → ${path.relative(root, outFile)} (${textLength} caractere de text)`)
    if (textLength < 200 && route !== '/404') {
      console.warn(`  ⚠ conținut suspect de puțin pe ${route}`)
      failures++
    }
  } catch (err) {
    console.error(`✗ ${route}: ${err?.stack || err}`)
    failures++
  }
}

if (failures > 0) {
  console.error(`Prerendering incomplet: ${failures} rute cu probleme.`)
  process.exit(1)
}
console.log(`Prerendering complet: ${routes.length} pagini HTML statice.`)
