import { PropsWithChildren } from 'react'
import { Header, Footer } from 'components/common'

import { Page } from 'resources'
import * as S from './DefaultLayout.styled'

interface DefaultLayoutProps {
  menu?: Page['menu']
  footer?: Page['footer']
}

const DefaultLayout = ({
  menu,
  footer,
  children
}: PropsWithChildren<DefaultLayoutProps>) => (
  <>
    {!!menu && <Header />}
    <S.Wrapper role="main">{children}</S.Wrapper>
    {!!footer && <Footer data={footer} />}
  </>
)

export default DefaultLayout
