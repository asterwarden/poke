import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  root: "packages",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: "/",
  },
});
