import styled from 'styled-components'
import { parseSize } from 'utils'
import { VectorProps } from './Vector'

export type VectorWrapperProps = Omit<VectorProps, 'name'>

export const Wrapper = styled.svg.withConfig({
  shouldForwardProp: (prop) =>
    !['name', 'color', 'width', 'height'].includes(prop)
})<VectorWrapperProps>`
  ${({ theme: { colors }, color }) => !!color && `color: ${colors[color]};`}

  ${({ width }) => !!width && `width: ${parseSize(width)};`}

  ${({ height }) => !!height && `height: ${parseSize(height)};`}
`
