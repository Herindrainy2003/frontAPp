import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ,
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Sera Malaky',
        short_name: 'Sera M',
        theme_color: '#ffffff',
        icons: [
            {
                src: 'assets/pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: 'assets/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: 'assets/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: 'assets/maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      }, 
    }),
   
  ],
  server: {
    host: '0.0.0.0', // Écouter sur toutes les interfaces réseau
    port: 5173,      // Port personnalisé
    open: true       // Ouvre automatiquement dans le navigateur
  }
  
})
