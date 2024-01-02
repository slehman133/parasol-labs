/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
        ],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
