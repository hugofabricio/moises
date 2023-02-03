import styled, { css } from 'styled-components'
import { between } from 'polished'
import { parseSize, rem } from 'utils'
import { TextProps } from './Text'

type WrapperProps = Omit<
  TextProps,
  'className' | 'tag' | 'dangerouslySetInnerHTML'
>

export const Wrapper = styled.p.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'color',
      'secondColor',
      'weight',
      'opacity',
      'uppercase',
      'textAlign',
      'fontSize',
      'lineHeight',
      'letterSpacing',
      'maxWidth',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft'
    ].includes(prop)
})<WrapperProps>`
  ${({ theme: { colors }, color }) => !!color && `color: ${colors[color]};`}

  ${({ theme: { colors }, secondColor }) =>
    !!secondColor &&
    `
    span {
      display: block;
      color: ${colors[secondColor]};
    }
  `}

${({ theme: { typography, grid }, fontSize }) =>
    !!fontSize &&
    css`
      font-size: ${between(
        `${typography.sizes[fontSize].min}px`,
        `${typography.sizes[fontSize].max}px`,
        `${grid.breakpoints.xxxs * 15}px`,
        `${grid.breakpoints.xl * 15}px`
      )};
    `}

  ${({ weight }) => !!weight && `font-weight: ${weight};`}

  ${({ opacity }) => !!opacity && `opacity: ${opacity};`}

  ${({ uppercase }) => !!uppercase && `text-transform: uppercase;`}

  ${({ textAlign }) => !!textAlign && `text-align: ${textAlign};`}

  ${({ lineHeight }) => !!lineHeight && `line-height: ${rem(lineHeight)};`}

  ${({ letterSpacing }) =>
    !!letterSpacing && `letter-spacing: ${rem(letterSpacing)};`}

  ${({ maxWidth }) => !!maxWidth && `max-width: ${parseSize(maxWidth)};`}

  ${({ marginTop }) => !!marginTop && `margin-top: ${parseSize(marginTop)};`}

  ${({ marginBottom }) =>
    !!marginBottom && `margin-bottom: ${parseSize(marginBottom)};`}

  ${({ marginLeft }) =>
    !!marginLeft && `margin-left: ${parseSize(marginLeft)};`}

  ${({ marginRight }) =>
    !!marginRight && `margin-right: ${parseSize(marginRight)};`}
`
