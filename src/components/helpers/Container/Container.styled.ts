import styled, { Breakpoint, css } from 'styled-components'
import { media, parseSize } from 'utils'
import { ContainerProps } from './Container'

type WrapperProps = Pick<ContainerProps, 'fluid'>

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['fluid'].includes(prop)
})<WrapperProps>`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  box-sizing: border-box;

  ${({ theme: { grid } }) => css`
    ${Object.keys(grid.breakpoints).map((b) => {
      return css`
        ${media.greaterThan(b as Breakpoint)} {
          padding-left: ${parseSize(grid.padding[b as Breakpoint], 'rem')};
          padding-right: ${parseSize(grid.padding[b as Breakpoint], 'rem')};
        }
      `
    })}
  `}

  ${({ theme: { grid }, fluid }) =>
    !fluid &&
    css`
      ${Object.keys(grid.breakpoints).map((b) => {
        return css`
          ${media.greaterThan(b as Breakpoint)} {
            ${typeof grid.container[b as Breakpoint] === 'number'
              ? `max-width: ${parseSize(
                  grid.container[b as Breakpoint],
                  'rem'
                )};`
              : `width: 100%;`}
          }
        `
      })}
    `}
`
