const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  swcMinify: true,
  trailingSlash: true,
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en'
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['moises.ai']
  }
})

module.exports = nextConfig
