import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For code obfuscation on build, install javascript-obfuscator:
// npm install --save-dev javascript-obfuscator vite-plugin-javascript-obfuscator
// Then uncomment the obfuscator plugin below.

export default defineConfig({
  plugins: [
    react(),
    // obfuscatorPlugin({
    //   options: {
    //     compact: true,
    //     controlFlowFlattening: true,
    //     deadCodeInjection: true,
    //     stringEncryption: true,
    //   }
    // })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: 'dist',
    // Minify and mangle variable names — basic obfuscation out of the box
    minify: 'terser',
    terserOptions: {
      compress: { passes: 3 },
      mangle: { toplevel: true, eval: true },
      format: { comments: false }
    },
    rollupOptions: {
      output: {
        // Randomised chunk names — harder to trace
        entryFileNames: `assets/[hash].js`,
        chunkFileNames: `assets/[hash].js`,
        assetFileNames: `assets/[hash].[ext]`
      }
    }
  }
})
