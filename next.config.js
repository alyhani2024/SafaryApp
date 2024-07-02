/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['safaryapi.runasp.net'], // Add your API hostname here
  },
};

