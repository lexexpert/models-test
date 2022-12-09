const path = require('path');
const { i18n } = require('./next-i18next.config.js');

module.exports = {
  i18n,
  images: {
    domains: [process.env.BUCKET_NAME],
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
