const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra({
  devIndicators: {
    autoPrerender: false,
  },
  i18n: {
    locales: ['en', 'zh', 'de'],
    defaultLocale: 'en',
  },
})
