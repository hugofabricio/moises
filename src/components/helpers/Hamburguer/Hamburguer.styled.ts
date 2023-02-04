import styled, { css } from 'styled-components'

export const Bars = styled.span`
  position: relative;
  height: 2px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 100%;
  }

  &:before {
    top: -8px;
  }

  &:after {
    bottom: -8px;
  }

  &,
  &:after,
  &:before {
    display: block;
    width: 100%;
    transition: 300ms ease-in-out;
  }
`

export const Wrapper = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  box-shadow: none;
  border: 0;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.neutral700};

    ${Bars} {
      &,
      &:after,
      &:before {
        background-color: ${colors.neutral500};
      }

      &:hover {
        &,
        &:after,
        &:before {
          background-color: ${colors.neutral500};
        }
      }
    }
  `}
`
