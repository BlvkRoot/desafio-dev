/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }

})
