import { Page } from 'resources'

const CMS_API = process.env.NEXT_PUBLIC_CMS_API
const CMS_ACCESS_KEY = process.env.CMS_ACCESS_KEY

interface PagesResponse {
  record: {
    pages: Page[]
  }
}

const pages = {
  getAllPages: async () => {
    const response = await fetch(CMS_API, {
      headers: {
        'X-Access-Key': CMS_ACCESS_KEY
      }
    })

    if (!response.ok) {
      throw new Error(`An error occured on get data.`)
    }

    const data: PagesResponse = await response.json()

    return {
      pages: data.record.pages
    }
  },
  getPageForLocale: async (locale = 'en') => {
    const response = await fetch(CMS_API, {
      headers: {
        'X-Access-Key': CMS_ACCESS_KEY
      }
    })

    if (!response.ok) {
      throw new Error(`An error occured on get data.`)
    }

    const data: PagesResponse = await response.json()

    const page = data.record.pages.find((page) => page.locale === locale)

    if (!page) {
      throw new Error(`Page for locale [${locale}] not found!`)
    }

    return page
  }
}

export default pages
