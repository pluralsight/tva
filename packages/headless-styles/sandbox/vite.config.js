import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import transformCSStoTS from './plugins/transformCSStoTS'

const cssRegex = /\/components\/.*\.css$/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), transformCSStoTS(cssRegex)],
})
