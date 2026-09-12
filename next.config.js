 /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
