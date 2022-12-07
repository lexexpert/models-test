const path = require('path');
const { i18n } = require('./next-i18next.config.js');

module.exports = {
  i18n,
  images: {
    domains: ['centerfilesstorage.s3.eu-central-1.amazonaws.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: { appDir: false },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};
