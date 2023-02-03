import { css } from 'styled-components'
import { BaseButtonProps } from './Button'

type ButtonAppearanceProps = Required<Pick<BaseButtonProps, 'appearance'>>

const getAppearance = ({ appearance }: ButtonAppearanceProps) => {
  const appearances = {
    solid: css`
      text-align: center;

      ${({ theme: { colors } }) => css`
        color: ${colors.neutral1000};
        border-color: ${colors.neutral0};
        background-color: ${colors.neutral0};

        &:not(:disabled):hover {
          color: ${colors.neutral1000};
          background-color: ${colors.aqua500};
          border-color: ${colors.aqua500};
        }
      `}
    `,
    link: css`
      vertical-align: baseline;

      ${({ theme: { colors } }) => css`
        color: ${colors.neutral0};

        &.active,
        &:not(:disabled):hover {
          color: ${colors.aqua500};
        }
      `}
    `
  }

  return appearances[appearance]
}

export default getAppearance
