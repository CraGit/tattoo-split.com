/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ["images.prismic.io"],
    },
  };
};

module.exports = nextConfig;
