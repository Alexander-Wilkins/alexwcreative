import type { NextConfig } from "next";
import svgr from "@svgr/webpack";

const nextConfig: NextConfig = {
  basePath: "/alexwcreative",
  distDir: "dist",
  output: "export", // This will generate static HTML files
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
