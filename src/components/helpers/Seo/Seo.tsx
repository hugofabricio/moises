import Head from 'next/head'

interface SeoProps {
  title?: string
  description?: string
}

const Seo = ({ title, description }: SeoProps) => (
  <Head>
    {!!title && (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
      </>
    )}
    {!!description && (
      <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </>
    )}
  </Head>
)

export default Seo
