import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { pagesService } from 'services'
import { DefaultLayout } from 'layouts'
import { Seo } from 'components/helpers'

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const page = await pagesService.getPageForLocale('', locale)

  if (!page) {
    return {
      notFound: true
    }
  }

  return {
    props: { page }
  }
}

const Home = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { seo } = page

  return (
    <DefaultLayout>
      <Seo title={seo.title} description={seo.description} />
    </DefaultLayout>
  )
}

export default Home
