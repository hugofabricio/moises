import { Color } from 'styled-components'
import svg, { SvgProps } from 'svg'

import * as S from './Vector.styled'

export interface VectorProps {
  className?: string
  name: SvgProps
  color?: Color
  width?: Size
  height?: Size
  opacity?: number
}

const Vector = ({ name, ...rest }: VectorProps) => (
  <S.Wrapper as={svg[name]} {...rest} />
)

export default Vector
