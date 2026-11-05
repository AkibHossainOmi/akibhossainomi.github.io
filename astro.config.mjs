// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://akibhossainomi.github.io",
  // Emit about.html instead of about/index.html so GitHub Pages serves
  // clean URLs like /about with no trailing-slash redirect.
  trailingSlash: "never",
  build: { format: "file" },
  redirects: {
    "/project": "/projects", // old route name from the previous site
  },
  vite: { plugins: [tailwindcss()] },
});
