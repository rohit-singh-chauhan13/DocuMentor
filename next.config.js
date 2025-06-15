/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/sign-in',
                destination: '/api/auth/login',
                permanent: true,
            },
            {
                source: '/sign-up',
                destination: '/api/auth/register',
                permanent: true,
            },
        ]
    },

    reactStrictMode: false,
    images: {
        domains: ['lh3.googleusercontent.com'], // Added allowed image domain
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias.canvas = false;
        config.resolve.alias.encoding = false;

        return config;
    }
}

module.exports = nextConfig;