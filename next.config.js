/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  trailingSlash: false,
  // For static export (optional - remove if using server features):
  // output: 'export',
  // distDir: 'dist',
}

module.exports = nextConfig
