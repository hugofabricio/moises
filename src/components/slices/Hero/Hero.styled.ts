import styled from 'styled-components'
import { media } from 'utils'

export const ImageLink = styled.a``

export const List = styled.div`
  display: flex;
  gap: 12px;

  ${media.lessThan('xs')} {
    justify-content: center;
  }
`

export const Links = styled.div`
  margin-top: 40px;

  ${media.lessThan('sm')} {
    margin-top: 20px;
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

  ${media.lessThan('sm')} {
    height: 500px;
  }

  ${media.lessThan('xs')} {
    position: relative;
    height: 350px;
  }
`

export const Caption = styled.div`
  padding-top: 60px;
  max-width: 500px;

  ${media.lessThan('md')} {
    padding-top: 120px;
    max-width: 360px;
  }

  ${media.lessThan('xs')} {
    margin: 0 auto;
    text-align: center;

    .cta {
      display: none;
    }
  }
`

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;

  ${media.lessThan('md')} {
    padding-bottom: 40px;
    flex-direction: column;
    height: auto;
    min-height: auto;
  }
`
