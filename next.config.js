/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
