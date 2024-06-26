/** @type {import('next').NextConfig} */
// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
//`
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/admin',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-store',
                    },
                ],
            },
            // {
            //     source : '/(.*)',
            //     headers: [
            //         {
            //             key: 'Content-Security-Policy',
            //             value: cspHeader.replace(/\n/g, ' '),
            //         },
            //     ],
            // }
        ]
    }
}

module.exports = nextConfig
