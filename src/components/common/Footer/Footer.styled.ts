import styled, { css } from 'styled-components'
import { media, rem } from 'utils'

export const Link = styled.a`
  display: inline-block;
  font-weight: 500;

  ${({ theme: { colors } }) => css`
    color: ${colors.neutral500};
  `}
`

export const Item = styled.li``

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Copyright = styled.div`
  padding-top: 30px;

  ${media.greaterThan('sm')} {
    text-align: center;
  }

  ${({ theme: { colors } }) => css`
    border-top: 1px solid ${colors.neutral700};
  `}
`

export const Column = styled.div`
  &:first-of-type {
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
    gap: 30px;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;

  ${media.greaterThan('sm')} {
    grid-template-columns: 2fr repeat(4, minmax(0, 1fr));
  }
`

export const Wrapper = styled.footer`
  padding: 40px 0;
  margin-top: 80px;

  ${media.greaterThan('sm')} {
    padding: 60px 0;
  }
`
