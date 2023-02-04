import styled, { css } from 'styled-components'
import { parseSize, rem } from 'utils'
import { BaseButtonProps } from './Button'
import getAppearance from './Button.appearance'

type WrapperProps = Pick<
  BaseButtonProps,
  'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
> &
  Required<Pick<BaseButtonProps, 'appearance' | 'fieldSize'>>

export const Icon = styled.i`
  display: inline-block;
  align-self: center;
`

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'appearance',
      'fieldSize',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'partiallyActive'
    ].includes(prop)
})<WrapperProps>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1.5;
  text-decoration: none;
  vertical-align: middle;
  background-color: transparent;
  border: 1px solid transparent;
  font-weight: 500;
  white-space: nowrap;
  font-size: ${({ theme: { button }, fieldSize }) =>
    rem(button[fieldSize].fontSize)};

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ appearance }) => getAppearance({ appearance })}

  ${({ theme: { button }, appearance, fieldSize }) =>
    appearance !== 'link' &&
    css`
      border-radius: ${rem(button[fieldSize].borderRadius)};
      padding: ${rem(button[fieldSize].paddingY)}
        ${rem(button[fieldSize].paddingX)};
    `}

  ${({ marginTop }) => !!marginTop && `margin-top: ${parseSize(marginTop)};`}

  ${({ marginBottom }) =>
    !!marginBottom && `margin-bottom: ${parseSize(marginBottom)};`}

  ${({ marginLeft }) =>
    !!marginLeft && `margin-left: ${parseSize(marginLeft)};`}

  ${({ marginRight }) =>
    !!marginRight && `margin-right: ${parseSize(marginRight)};`}

  &.has--left-icon,
  &.has--right-icon {
    gap: 12px;
  }
`
