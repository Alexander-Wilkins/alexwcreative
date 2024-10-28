import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/alexwcreative",
  distDir: "dist",
  output: "export", // This will generate static HTML files
  reactStrictMode: true,
};

export default nextConfig;
