/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "cdn.sanity.io"],
  },
};

module.exports = {
  images: {
    domains: [
      "s2.coinmarketcap.com",
      "s3.coinmarketcap.com",
      "cdn.sanity.io",
      "encrypted-tbn0.gstatic.com",
    ],
  },

  nextConfig,
};
// module.exports = nextConfig;
