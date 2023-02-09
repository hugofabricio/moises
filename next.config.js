const withSvgr = require('next-plugin-svgr')

const CMS_API = process.env.NEXT_PUBLIC_CMS_API
const CMS_ACCESS_KEY = process.env.CMS_ACCESS_KEY

const nextConfig = async () => {
  const response = await fetch(`${CMS_API}`, {
    headers: {
      'X-Access-Key': CMS_ACCESS_KEY
    }
  })

  const data = await response.json()

  const locales = data.record.pages.reduce((acc, page) => {
    const hasLocaleArr = acc.findIndex((locale) => locale === page.locale) >= 0

    if (!hasLocaleArr) {
      acc.push(page.locale)
    }

    return acc
  }, [])

  /** @type {import('next').NextConfig} */
  return withSvgr({
    swcMinify: true,
    i18n: {
      locales,
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
}

module.exports = nextConfig
