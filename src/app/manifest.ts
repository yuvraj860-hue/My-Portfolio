import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yuvraj Singh — AI/ML Engineer Portfolio",
    short_name: "Yuvraj",
    description:
      "AI/ML Engineer and AI Integration Specialist. B.Tech CSE, Jagannath University, Jaipur.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}