import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep WordPress-style URLs: /portfolio/, /about/, /contact/ ...
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
