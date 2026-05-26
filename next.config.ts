import type { NextConfig } from "next";

const privateNetworkOrigins = [
  "10.*.*.*",
  "192.168.*.*",
  ...Array.from({ length: 16 }, (_, index) => `172.${16 + index}.*.*`),
];

const tunnelOrigins = [
  "**.github.dev",
  "**.app.github.dev",
  "**.preview.app.github.dev",
  "**.gitpod.io",
  "**.replit.dev",
];

// In cloud dev environments, browser origin can be a public IPv4 host.
// This keeps HMR working without per-IP config churn.
const publicIpv4Wildcard = "*.*.*.*";

const envAllowedOrigins = (process.env.NEXT_ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: Array.from(
    new Set([
      "localhost",
      "*.localhost",
      "127.0.0.1",
      "0.0.0.0",
      ...privateNetworkOrigins,
      publicIpv4Wildcard,
      ...tunnelOrigins,
      ...envAllowedOrigins,
    ])
  ),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.logo.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-26dea5ec509f4933a0317883567d339b.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
