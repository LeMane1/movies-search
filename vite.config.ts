import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/movies-search/",
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
    },
  })],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000
  }
})
