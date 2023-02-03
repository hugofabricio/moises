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
  description?: string
  image: string
}

export type FeatureSlice = {
  ctaHighlightText: string
  ctaRegularText: string
  description: string
  button: string
  image: string
  imagePosition: 'left' | 'right'
  backgroundImage: string
}

export type Slice =
  | { name: 'hero'; data: HeroSlice }
  | { name: 'simple_horizontal' | 'simple_headline'; data: HeadlineSlice }
  | { name: 'stacked_list'; items: FeatureSlice[] }

const SLICES: Record<SliceName, Slice> = {
  hero: slices.Hero,
  simple_horizontal: slices.Headline,
  simple_headline: slices.Headline,
  stacked_list: slices.Feature
}

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
