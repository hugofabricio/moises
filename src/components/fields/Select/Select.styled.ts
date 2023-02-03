import styled, { css } from 'styled-components'
import { parseSize, rem } from 'utils'
import { SelectProps } from './Select'

type FieldProps = Required<Pick<SelectProps, 'fieldSize'>>

type WrapperProps = Required<Pick<SelectProps, 'marginBottom'>>

export const Field = styled.select<FieldProps>`
  display: block;
  width: 100%;
  appearance: none;
  font-weight: 500;

  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23b5b5b5' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-clip: padding-box;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: right ${rem(12)} center;
  background-size: 16px 12px;

  ${({
    theme: {
      colors,
      form: { input }
    },
    fieldSize
  }) => css`
    font-size: ${rem(input[fieldSize].fontSize)};
    color: ${colors.neutral400};
    border-radius: ${rem(input[fieldSize].borderRadius)};
    border: 2px solid ${colors.neutral600};
    padding: ${rem(input[fieldSize].paddingY)}
      ${rem(input[fieldSize].paddingX * 2)} ${rem(input[fieldSize].paddingY)}
      ${rem(input[fieldSize].paddingX)};

    &:focus {
      box-shadow: 0 0 0 2px ${colors.aqua500};
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled,
    &[readonly] {
      background-color: ${colors.neutral400};
      opacity: 1;
    }

    &[multiple],
    &[size]:not([size='1']) {
      padding-right: ${rem(input[fieldSize].paddingX)};
      background-image: none;
    }
  `}
`

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['marginBottom'].includes(prop)
})<WrapperProps>`
  position: relative;
  width: 100%;

  ${({ marginBottom }) =>
    !!marginBottom && `margin-bottom: ${parseSize(marginBottom)};`}
`
