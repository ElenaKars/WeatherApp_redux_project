import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"
import rollupNodePolyFill from "rollup-plugin-node-polyfills"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      styles: path.resolve(__dirname, "src/styles"),
      store: path.resolve(__dirname, "src/store"),

      crypto: "crypto-browserify",
      stream: "stream-browserify",
    },
  },
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
})
