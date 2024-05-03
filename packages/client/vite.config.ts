import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, ""),
    //   },
    // },
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js", // assuming the test folder is in the root of our project
  },
});
