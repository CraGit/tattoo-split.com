/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ["images.prismic.io"],
      dangerouslyAllowSVG: true,
      contentDispositionType: "attachment",
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    redirects: async () => {
      return [
        {
          source: "/admin",
          destination: "https://greenink.prismic.io/",
          permanent: true,
        },
        {
          source: "/contact",
          destination: "/hr/kontakt",
          permanent: true,
        },
        {
          source: "/about",
          destination: "/hr/o-nama",
          permanent: true,
        },
        {
          source: "/work",
          destination: "/hr/galerija",
          permanent: true,
        },
      ];
    },
  };
};

module.exports = nextConfig;
