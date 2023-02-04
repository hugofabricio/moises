import { PropsWithChildren } from 'react'
import { Header, Footer } from 'components/common'

import { Page } from 'resources'
import { HeaderProvider } from 'contexts'
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
    {!!menu && (
      <HeaderProvider>
        <Header data={menu} />
      </HeaderProvider>
    )}
    <S.Wrapper role="main">{children}</S.Wrapper>
    {!!footer && <Footer data={footer} />}
  </>
)

export default DefaultLayout
