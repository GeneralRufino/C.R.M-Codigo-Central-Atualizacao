import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ou @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Permite que o Vite leia arquivos uma pasta acima da 'src'
      allow: ['..']
    }
  }
})