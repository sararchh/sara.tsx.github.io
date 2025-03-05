const nextTranslate = require('next-translate-plugin')       
const i18n = require('./i18n.js');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    ...i18n,
    localeDetection: false,
  },
};

module.exports = nextTranslate(nextConfig);