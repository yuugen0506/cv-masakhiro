/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'build',
  experimental: {
    externalDir: true
  },
  // Potential new config flag:
  disableExperimentalFeaturesWarning: true
};

module.exports = nextConfig;
