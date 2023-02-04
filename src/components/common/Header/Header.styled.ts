import styled, { css } from 'styled-components'
import { media, rem } from 'utils'
import { rgba } from 'polished'

const menuMobile = 'sm'
const menuDesktop = 'md'

export const Toggle = styled.div`
  margin-left: auto;

  ${media.greaterThan(menuDesktop)} {
    display: none;
  }
`

export const Item = styled.li`
  position: relative;

  ${media.lessThan(menuMobile)} {
    width: 100%;
  }
`

export const DropdownLink = styled.a`
  display: flex;
  gap: 12px;
  font-weight: 500;
  font-size: ${rem(16)};

  ${({ theme: { colors } }) => css`
    ${media.greaterThan(menuDesktop)} {
      padding: 12px;
      border-radius: 8px;
      color: ${colors.neutral1000};

      svg {
        color: ${colors.neutral500};
      }

      &:hover {
        color: ${colors.neutral1000};
        background-color: ${rgba(colors.neutral400, 0.4)};
      }
    }

    ${media.lessThan(menuMobile)} {
      font-size: ${rem(15)};

      svg {
        color: ${colors.aqua500};
      }

      &:hover {
        color: ${colors.neutral0};
      }
    }
  `}
`

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${rem(20)} 0 0 0;

  ${({ theme: { colors } }) => css`
    ${media.greaterThan(menuDesktop)} {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      gap: 10px;
      transform: translateX(-50%);
      padding: ${rem(20)};
      background-color: ${colors.neutral0};
      border-radius: ${rem(22)};
      width: ${rem(300)};
      box-shadow: 0 0 20px 10px ${rgba(colors.neutral1000, 0.1)};
      transition: all 200ms ease-in-out;
      opacity: 0;
      visibility: hidden;

      &.is-expanded {
        opacity: 1;
        visibility: visible;
      }
    }
  `}
`

export const List = styled.ul`
  display: flex;
  gap: 40px;

  ${media.greaterThan(menuDesktop)} {
    align-items: center;
  }

  ${media.lessThan(menuMobile)} {
    ${({ theme: { colors } }) => css`
      button {
        pointer-events: none;
        font-size: ${rem(14)};
        color: ${colors.neutral500};

        i {
          display: none;
        }
      }
    `}
  }
`

export const Group = styled.div`
  width: 100%;

  ${media.lessThan(menuMobile)} {
    ${({ theme: { colors } }) => css`
      &:first-of-type {
        overflow-y: scroll;

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: ${colors.neutral0};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${colors.neutral500};
          border-radius: 4px;
        }
      }
    `}

    &:last-of-type {
      padding: 40px 0;
    }

    > ${List} {
      flex-direction: column;
      width: 100%;
    }
  }
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  ${media.greaterThan(menuDesktop)} {
    margin-left: auto;
  }

  ${media.lessThan(menuMobile)} {
    gap: 0;
  }
`

export const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
`

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
  width: 100%;
  transition: background-color 200ms ease-in-out;

  ${({ theme: { colors } }) => css`
    &.is-opened,
    &.is-affixed {
      background-color: ${colors.neutral1000};
    }

    ${media.lessThan(menuMobile)} {
      ${Menu} {
        position: absolute;
        z-index: 2000;
        top: 100%;
        left: 0;
        background-color: ${colors.neutral1000};
        transform: translateY(100%);
        transition: all 200ms ease-in-out;
        width: 100%;
        height: calc(100vh - 90px);
        height: calc(100dvh - 90px);
        flex-direction: column;
        align-items: flex-start;
        padding: 0 24px;
      }

      &.is-opened {
        ${Menu} {
          transform: translateY(0%);
        }
      }
    }
  `}
`
