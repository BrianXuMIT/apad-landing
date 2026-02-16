import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description:
      "A live, AI-led coding interview platform for evaluating how candidates think, communicate, and reason.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8C45FF",
    icons: [
      {
        src: "/favicon.png",
        sizes: "672x672",
        type: "image/png",
      },
    ],
  };
}
