import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/register/success", "/invest", "/webinar", "/admin"],
    },
    sitemap: "https://jeffreyitepu.com/sitemap.xml",
  };
}
