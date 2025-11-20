import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig & { allowedDevOrigins?: string[] } = {
  turbopack: {
    resolveAlias: {},
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  allowedDevOrigins: ["192.168.1.176", "localhost", "127.0.0.1"],
};

const pwaConfig = withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default pwaConfig(nextConfig);
