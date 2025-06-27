/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/MySite",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
