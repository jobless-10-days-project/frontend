/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !
      ignoreBuildErrors: true,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nestjs-uploaded.s3.us-east-1.amazonaws.com',
          },
        ],
      },
}

module.exports = nextConfig
