import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    enforce: 'pre' as const,
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) return `\0${id}`
    },
    load(id: string) {
      if (!id.startsWith('\0figma:asset/')) return
      // placeholder 1x1 png as data URL; replace with real images later
      const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAnsB2m3Zr0wAAAAASUVORK5CYII='
      return `export default "${dataUrl}"`
    }
  }
}

function unversionedImportAlias() {
  return {
    name: 'unversioned-import-alias',
    resolveId(id: string) {
      // convert imports like 'lucide-react@0.487.0' -> 'lucide-react'
      const match = id.match(/^(.*)@\d+\.\d+\.\d+(.*)?$/)
      if (match) {
        const base = match[1]
        const rest = match[2] || ''
        return this.resolve(base + rest, undefined, { skipSelf: true })
      }
    }
  }
}

/** Servește dist/<ruta>/index.html și pentru /ruta (fără slash) — altfel SPA fallback
 *  livra homepage-ul și provoca hydration mismatch în `vite preview`. */
function servePrerenderedPages() {
  return {
    name: 'serve-prerendered-pages',
    configurePreviewServer(server: { middlewares: { use: (fn: unknown) => void } }) {
      const distDir = path.resolve(rootDir, 'dist')
      server.middlewares.use((
        req: { method?: string; url?: string },
        res: { setHeader: (k: string, v: string) => void; end: (b: Buffer) => void },
        next: () => void,
      ) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next()
        const raw = (req.url ?? '').split('?')[0] ?? ''
        if (!raw || raw === '/' || path.extname(raw)) return next()
        const clean = raw.replace(/\/+$/, '')
        const indexFile = path.join(distDir, clean.slice(1), 'index.html')
        if (fs.existsSync(indexFile)) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(fs.readFileSync(indexFile))
          return
        }
        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), figmaAssetPlugin(), unversionedImportAlias(), servePrerenderedPages()],
  // Fără SPA fallback pe rute necunoscute (altfel /ruta fără HTML propriu primea homepage-ul).
  appType: 'mpa',
  ssr: {
    // pachete CJS care trebuie incluse în bundle-ul de prerendering
    // (importul lor direct din Node ESM eșuează la named exports)
    noExternal: ['react-helmet-async'],
  },
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
