/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/news",
        destination: "https://tutorials.recruitcrm.io", // Matched parameters can be used in the destination
      },
    ];
  },
};

export default nextConfig;
