import { createGlobalStyle, css } from 'styled-components'
import localFont from '@next/font/local'

const geomanist = localFont({
  src: [
    {
      path: '../fonts/geomanist-regular-webfont.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/geomanist-medium-webfont.woff2',
      weight: '500',
      style: 'normal'
    }
  ]
})

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${geomanist.style.fontFamily};
  }

  body {
    ${({ theme: { colors } }) => css``}
  }

  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
