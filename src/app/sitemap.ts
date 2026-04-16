import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pathllm.ai";

  const routes = [
    "",
    "/platform",
    "/governance",
    "/the-stack",
    "/neural-debt",
    "/solutions/brands",
    "/solutions/agencies",
    "/pricing",
    "/company",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/solutions") ? 0.9 : 0.8,
  }));
}
