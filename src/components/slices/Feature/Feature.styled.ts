import styled, { css } from 'styled-components'
import { media, rem } from 'utils'

type InnerWrapperProps = {
  reverse: boolean
}

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 300px;

  ${media.greaterThan('xs')} {
    height: 400px;
  }

  ${media.greaterThan('md')} {
    max-width: 50%;
    height: 500px;
  }
`

export const Caption = styled.div`
  max-width: 560px;
  padding: 120px 80px;

  ${media.lessThan('xs')} {
    padding: 40px 20px;
  }
`

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;

  ${media.lessThan('xs')} {
    height: 70%;
    transform: scale(-1);
  }
`

export const InnerCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !['reverse'].includes(prop)
})<InnerWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ reverse }) =>
    !!reverse &&
    css`
      flex-direction: row-reverse;
    `}

  ${media.lessThan('xs')} {
    flex-direction: column-reverse;
  }
`

export const Card = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: ${rem(24)};
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;

  ${media.lessThan('sm')} {
    gap: 100px;
  }
`

export const Wrapper = styled.section``
