/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog-site",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
