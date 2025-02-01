/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ["images.prismic.io"],
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
