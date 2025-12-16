import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: isProd
    ? "https://loukas89.github.io/WebEleven-Portfolio/"
    : "http://localhost:4321/",
  base: isProd ? "/WebEleven-Portfolio" : "",

  devToolbar: {
    enabled: false
  },

  integrations: [svelte(), tailwind(), sitemap()]
});
