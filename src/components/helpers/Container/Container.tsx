import { PropsWithChildren } from 'react'

import * as S from './Container.styled'

export interface ContainerProps {
  fluid?: boolean
}

const Container = ({
  fluid = false,
  children
}: PropsWithChildren<ContainerProps>) => (
  <S.Wrapper fluid={fluid}>{children}</S.Wrapper>
)

export default Container
