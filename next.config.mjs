import nextMdx from '@next/mdx'

const withMdx = nextMdx({
    // By default only the `.mdx` extension is supported.
    extension: /\.mdx?$/,
  })

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**'
    }]
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
});


export default nextConfig;
