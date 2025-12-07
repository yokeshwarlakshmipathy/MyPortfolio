import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path configuration
// For GitHub Pages: Change to '/REPO-NAME/'
// For Netlify/Vercel/Custom Domain: Keep as '/'
export default defineConfig({
  plugins: [react()],
  base: '/' // Change to '/MyPortfolio/' for GitHub Pages if repo name is MyPortfolio
})
