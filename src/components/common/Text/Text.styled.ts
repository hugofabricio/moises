import styled, { css } from 'styled-components'
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

  ${({ weight }) => !!weight && `font-weight: ${weight};`}

  ${({ opacity }) => !!opacity && `opacity: ${opacity};`}

  ${({ uppercase }) => !!uppercase && `text-transform: uppercase;`}

  ${({ textAlign }) => !!textAlign && `text-align: ${textAlign};`}

  ${({ theme: { typography }, fontSize }) =>
    !!fontSize && `font-size: ${rem(typography.sizes[fontSize])};`}

  ${({ lineHeight }) => !!lineHeight && `line-height: ${rem(lineHeight)};`}

  ${({ letterSpacing }) =>
    !!letterSpacing && `letter-spacing: ${rem(letterSpacing)};`}

  ${({ marginTop }) => !!marginTop && `margin-top: ${parseSize(marginTop)};`}

  ${({ marginBottom }) =>
    !!marginBottom && `margin-bottom: ${parseSize(marginBottom)};`}

  ${({ marginLeft }) =>
    !!marginLeft && `margin-left: ${parseSize(marginLeft)};`}

  ${({ marginRight }) =>
    !!marginRight && `margin-right: ${parseSize(marginRight)};`}
`
