/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false, // Optional: set to true if you want trailing slashes
  eslint: {
    // Don't fail build on linting errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
