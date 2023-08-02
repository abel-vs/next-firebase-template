import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://domain.com/",
      lastModified: new Date(),
    },
  ];
}
