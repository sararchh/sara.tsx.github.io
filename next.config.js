const nextTranslate = require('next-translate-plugin')       
const i18n = require('./i18n.js');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    ...i18n,
    localeDetection: false,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextTranslate(nextConfig);