import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
  // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    plugins: [react()],
    base: "/Site_CAMC"
  }); 
};