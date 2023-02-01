export type Page = {
  slug: string
  locale: string
  seo: {
    title: string
    description: string
  }
  menu?: {
    item: string
    subitems?: {
      item: string
    }[]
  }[]
  contentSections: {
    name: string
    data?: Record<string, unknown>
    items?: Record<string, unknown>
  }[]
  footer: {
    sections: {
      name: string
      list: {
        label: string
        url: string
      }[]
    }
  }
}
