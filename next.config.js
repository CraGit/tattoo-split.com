/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ["images.prismic.io"],
    },
    redirects: async () => {
      return [
        {
          source: "/admin",
          destination: "https://greenink.prismic.io/",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = nextConfig;
