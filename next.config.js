/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Para Vercel grátis
  },
  output: 'standalone', // Otimiza o build
};

module.exports = nextConfig;