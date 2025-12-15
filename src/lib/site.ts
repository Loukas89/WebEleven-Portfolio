export const SITE = {
  // ⚠️ Το τελικό public URL σου (για canonical + sitemap)
  url: "https://loukas89.github.io/WebEleven-Portfolio/",
  name: "Loukas Theos",
  initials: "LT",
  github: "https://github.com/Loukas89",
  locales: {
    el: { lang: "el", ogLocale: "el_GR", label: "Ελληνικά" },
    en: { lang: "en", ogLocale: "en_US", label: "English" }
  } as const,
  meta: {
    el: {
      title: "Λουκάς Θέος | Portfolio",
      description:
        "Δίγλωσσο portfolio (EL/EN) με Astro, TailwindCSS και Svelte. Responsive, SEO-friendly και UI/UX focused."
    },
    en: {
      title: "Loukas Theos | Portfolio",
      description:
        "Bilingual portfolio (EL/EN) built with Astro, TailwindCSS and Svelte. Responsive, SEO-friendly and UI/UX focused."
    }
  } as const
} as const;

export type Lang = keyof typeof SITE.locales;

/** Absolute URL (canonical) */
export function absUrl(pathname: string) {
  return new URL(pathname, SITE.url).toString();
}

/** Base URL (e.g. /WebEleven-Portfolio/) */
export const BASE_URL = import.meta.env.BASE_URL; // ends with "/"
export const BASE_PATH = BASE_URL.replace(/\/$/, ""); // no trailing "/"

/** Prefix any internal path with base (works in dev + GH Pages) */
export function withBase(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

/** Remove base from an incoming pathname (for comparisons) */
export function stripBase(pathname: string) {
  return pathname.startsWith(BASE_PATH)
    ? pathname.slice(BASE_PATH.length) || "/"
    : pathname;
}

/** Swap /en <-> /el while preserving base */
export function swapLang(pathname: string) {
  const p = stripBase(pathname);
  if (p.startsWith("/en")) return withBase(p.replace(/^\/en/, "/el"));
  if (p.startsWith("/el")) return withBase(p.replace(/^\/el/, "/en"));
  return withBase("/el/");
}
