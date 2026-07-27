import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // Импортируем плагин React

export default defineConfig({
  plugins: [react()], 
  test: {
    environment: 'jsdom', 
    globals: true,        
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    deps: {
      inline: [/react-router-dom/]
    }
  }
});
