import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://getramz.com", lastModified: new Date(), priority: 1 }];
}
