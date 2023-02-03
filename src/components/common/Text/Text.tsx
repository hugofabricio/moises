import { PropsWithChildren } from 'react'
import { Properties } from 'csstype'
import { Color, FontSize } from 'styled-components'

import * as S from './Text.styled'

type TextTag =
  | 'p'
  | 'b'
  | 'i'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'date'
  | 'cite'

export interface TextProps extends MarginProps {
  className?: string
  tag?: TextTag
  fontSize?: FontSize
  weight?: number | string
  textAlign?: Properties['textAlign']
  letterSpacing?: number
  lineHeight?: number
  color?: Color
  secondColor?: Color
  uppercase?: boolean
  opacity?: string | number
  dangerouslySetInnerHTML?: { __html: string }
}

const Text = ({
  tag = 'p',
  secondColor = 'aqua500',
  children,
  ...rest
}: PropsWithChildren<TextProps>) => (
  <S.Wrapper as={tag} secondColor={secondColor} {...rest}>
    {children}
  </S.Wrapper>
)

export default Text
