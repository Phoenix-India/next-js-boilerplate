/** @type {import("next").NextConfig} */

const { NEXT_PUBLIC_API_BASE_URL } = process.env;

const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/panel",
        destination: "/panel/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
