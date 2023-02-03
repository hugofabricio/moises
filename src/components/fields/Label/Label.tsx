import { LabelHTMLAttributes } from 'react'

import * as S from './Label.styled'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  hidden?: boolean
  marginBottom?: Size
}

const Label: React.FC<LabelProps> = ({
  children,
  hidden = false,
  marginBottom = 8,
  ...rest
}) => (
  <S.Wrapper marginBottom={marginBottom} data-hidden={hidden} {...rest}>
    {children}
  </S.Wrapper>
)

export default Label
