import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import commonjs from "vite-plugin-commonjs";

import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    legalComments: "none",
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: "esnext",
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore TypeScript warnings
        if (warning.code === "TS2307") return;
        warn(warning);
      },
    },
  },
});
