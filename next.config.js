const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  swcMinify: true,
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en'
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['moises.ai']
  }
})

module.exports = nextConfig
