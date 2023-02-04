import { SvgProps } from 'svg'

export type HeroSlice = {
  title: string
  description: string
  ctaButton: string
  backgroundImage: string
  belowLinks: string
  links: {
    image: string
    url: string
  }[]
}

export type HeadlineSlice = {
  title: string
  subtitle: string
  description: string
}

export type HorizontalSlice = {
  title: string
  subtitle: string
  image: string
}

export type FeatureSlice = {
  ctaHighlightText: string
  ctaRegularText: string
  description?: string
  button?: string
  image: string
  imagePosition: 'left' | 'right'
  backgroundImage: string
}

export type Slice =
  | { name: 'hero'; data: HeroSlice }
  | { name: 'simple_headline'; data: HeadlineSlice }
  | { name: 'simple_horizontal'; data: HorizontalSlice }
  | { name: 'stacked_list'; items: FeatureSlice[] }

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
      icon: SvgProps
      item: string
    }[]
  }[]
  contentSections: Slice[]
  footer: {
    sections: {
      name: string
      list: {
        label: string
        url: string
      }[]
    }[]
  }
}
