const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['sanity'],
  },
  webpack: (config) => {
    config.resolve.alias['react/compiler-runtime'] = path.resolve(
      __dirname,
      'lib/react-compiler-runtime.js'
    )
    return config
  },
}

module.exports = nextConfig
