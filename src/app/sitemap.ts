import type { MetadataRoute } from "next";

const routes = [
  "",
  "about",
  "services",
  "portfolio",
  "pricing",
  "contact",
  "quote",
  "careers",
  "blog",
  "privacy-policy",
  "terms",
  "cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexorasolutions.com";
  return routes.map((route) => ({
    url: route ? `${base}/${route}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
