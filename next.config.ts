import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep WordPress-style URLs: /portfolio/, /about/, /contact/ ...
  trailingSlash: true,
};

export default nextConfig;
