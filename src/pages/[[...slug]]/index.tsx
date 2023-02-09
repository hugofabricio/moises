import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { pagesService } from 'services'
import { DefaultLayout } from 'layouts'
import { Seo, SliceRoot } from 'components/helpers'

export const getStaticPaths = async () => {
  const data = await pagesService.getAllPages()

  const paths = data.pages.map(({ slug, locale }) => {
    const isHome = slug.match(/\//g)?.length === undefined

    return {
      params: { slug: isHome ? [] : [slug] },
      locale
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const page = await pagesService.getPageForLocale(locale)

  return {
    props: {
      page
    }
  }
}

const Home = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { seo, contentSections } = page

  return (
    <DefaultLayout menu={page.menu} footer={page.footer}>
      <Seo title={seo.title} description={seo.description} />
      <SliceRoot data={contentSections} />
    </DefaultLayout>
  )
}

export default Home
