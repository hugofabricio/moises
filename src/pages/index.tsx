import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { pagesService } from 'services'
import { DefaultLayout } from 'layouts'
import { Seo, SliceRoot } from 'components/helpers'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const page = await pagesService.getPageForLocale('cms-payload.json', locale)

  if (!page) {
    return {
      notFound: true
    }
  }

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
