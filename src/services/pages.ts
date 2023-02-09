import { Page } from 'resources'

const CMS_API = process.env.NEXT_PUBLIC_CMS_API

interface PagesResponse {
  pages: Page[]
}

const pages = {
  getAllPages: async (path: string) => {
    const response = await fetch(`${CMS_API}/${path}`)

    if (!response.ok) {
      throw new Error(`An error occured on get data.`)
    }

    const data: PagesResponse = await response.json()

    return {
      pages: data.pages
    }
  },
  getPageForLocale: async (path: string, params: any, locale: string = '') => {
    const response = await fetch(`${CMS_API}/${path}`)

    if (!response.ok) {
      throw new Error(`An error occured on get data.`)
    }

    const data: PagesResponse = await response.json()

    const page = data.pages.find((page) => page.locale === locale)

    if (!page) {
      throw new Error(`Page for locale [${locale}] not found!`)
    }

    return page
  }
}

export default pages
