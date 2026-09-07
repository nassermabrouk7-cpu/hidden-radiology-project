/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig
