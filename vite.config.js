import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ejs from "ejs";
import { site } from "./src/data/site.js";

const root = fileURLToPath(new URL(".", import.meta.url));

// Every page is a plain HTML file in the project root.
export const pages = {
  home: "index.html",
  courses: "courses.html",
  course: "course-details.html",
  enrollment: "enrollment.html"
};

/**
 * Renders EJS tags inside the HTML pages before Vite processes them,
 * so repeating blocks (header, footer, course card) live in src/partials.
 */
function ejsPages() {
  return {
    name: "learnova-ejs-pages",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        return ejs.render(html, { site }, { filename: ctx.filename });
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".ejs") || file.includes("/src/data/")) {
        server.ws.send({ type: "full-reload" });
      }
    }
  };
}

export default defineConfig({
  base: "./",
  root: ".",
  plugins: [ejsPages()],
  css: {
    preprocessorOptions: {
      scss: { api: "modern" }
    }
  },
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, file]) => [name, resolve(root, file)])
      )
    }
  }
});
