/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
  eslint: {
    // Don't fail build on linting errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on TypeScript errors (if any)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
