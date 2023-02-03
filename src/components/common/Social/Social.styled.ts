import styled, { css } from 'styled-components'

export const Link = styled.a`
  display: flex;
  place-items: center;
  width: 20px;
  height: 20px;

  ${({ theme: { colors } }) => css`
    color: ${colors.neutral600};

    &:hover {
      color: ${colors.neutral0};
    }
  `}
`

export const Item = styled.li``

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Wrapper = styled.div``
