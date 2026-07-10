import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), figmaAssetPlugin(), unversionedImportAlias()],
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

