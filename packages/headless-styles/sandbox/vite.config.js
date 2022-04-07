import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import transformCSStoJS from './plugins/transformCSStoJS'

const cssRegex = /\/components\/.*\.css$/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), transformCSStoJS(cssRegex)],
})
