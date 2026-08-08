import type { MetadataRoute } from "next";

const BASE = "https://ananthulakedari.example.com"; // set real domain at launch

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/legacy",
    "/collections/pattu",
    "/collections/wedding",
    "/collections/women",
    "/collections/men",
    "/collections/kids",
    "/new-arrivals",
    "/stores",
  ];
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
