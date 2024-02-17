/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  env: {
    GCAL_API_KEY: process.env.GCAL_API_KEY,
    GCAL_ID: process.env.GCAL_ID,
  },
};

module.exports = nextConfig;
