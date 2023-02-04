import styled, { css } from 'styled-components'

export const Bars = styled.span`
  position: relative;
  height: 1.4px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 100%;
  }

  &:before {
    top: -6px;
  }

  &:after {
    bottom: -6px;
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
  display: flex;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background: transparent;
  box-shadow: none;
  cursor: pointer;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.neutral700};

    ${Bars} {
      &,
      &:after,
      &:before {
        background-color: ${colors.neutral500};
      }
    }

    &:hover {
      background-color: ${colors.neutral400};

      ${Bars} {
        &,
        &:after,
        &:before {
          background-color: ${colors.neutral700};
        }
      }
    }

    &.is-active {
      ${Bars} {
        transform: rotate(45deg);

        &:before {
          transform: rotate(90deg);
          top: 0;
        }

        &:after {
          transform: rotate(90deg);
          bottom: 0;
        }
      }
    }
  `}
`
