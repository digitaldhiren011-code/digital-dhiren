import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact", "/book-free-consultation"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://digitaldhiren.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
