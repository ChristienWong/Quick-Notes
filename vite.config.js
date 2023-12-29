import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "Quick-Notes", // TODO update to your repo name
  plugins: [react()],
})
