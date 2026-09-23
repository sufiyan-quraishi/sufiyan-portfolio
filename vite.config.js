import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to a GitHub Pages *project* page (username.github.io/repo-name),
  // set base to '/repo-name/'. For Vercel, Netlify, Cloudflare Pages, or a
  // GitHub Pages *user* page (username.github.io), keep base as '/'.
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
