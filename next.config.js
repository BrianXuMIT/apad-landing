/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/price",
        permanent: true,
      },
      {
        source: "/pricing/:path*",
        destination: "/price",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "apadcode.com",
          },
        ],
        destination: "https://www.apadcode.com/:path*",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
