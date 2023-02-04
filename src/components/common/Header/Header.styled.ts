import styled, { css } from 'styled-components'
import { media, rem } from 'utils'
import { rgba } from 'polished'

const menuMobile = 'sm'
const menuDesktop = 'md'

export const Toggle = styled.div`
  margin-left: auto;
`

export const Item = styled.li`
  position: relative;
`

export const DropdownLink = styled.a`
  display: flex;
  gap: 12px;
  font-weight: 500;
  font-size: ${rem(16)};
  border-radius: 8px;
  padding: 12px;

  ${({ theme: { colors } }) => css`
    color: ${colors.neutral1000};

    &:hover {
      color: ${colors.neutral1000};
      background-color: ${rgba(colors.neutral400, 0.4)};
    }
  `}
`

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;

  ${({ theme: { colors } }) => css`
    ${media.greaterThan(menuDesktop)} {
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      padding: ${rem(20)};
      background-color: ${colors.neutral0};
      border-radius: ${rem(22)};
      width: ${rem(300)};
      gap: 10px;
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
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 32px;
    overflow-y: auto;
    -ms-overflow-style: none;
    gap: 20px;
  }
`

export const Group = styled.div``

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: auto;
`

export const Brand = styled.div``

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
        transform: translateX(-100%);
        transition: all 200ms ease-in-out;
        width: 100%;
        height: calc(100vh - 90px);
        height: calc(100dvh - 90px);
      }

      &.is-opened {
        ${Menu} {
          transform: translateX(0%);
        }
      }
    }
  `}
`
