/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com','tailwindui.com','lh3.googleusercontent.com','plugins.jetbrains.com'],
  },
}

module.exports = nextConfig
