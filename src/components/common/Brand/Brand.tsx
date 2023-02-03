import { Color } from 'styled-components'
import Vector from '../Vector'
import * as S from './Brand.styled'

interface BrandProps {
  appearance?: 'full' | 'icon'
  width?: Size
  height?: Size
  color?: Color
}

const Brand = ({
  appearance = 'full',
  color = 'neutral0',
  ...rest
}: BrandProps) => (
  <S.Wrapper>
    <Vector name={`brand-${appearance}`} color={color} {...rest} />
  </S.Wrapper>
)

export default Brand
