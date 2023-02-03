import { createGlobalStyle, css } from 'styled-components'
import localFont from '@next/font/local'
import { media, rem } from 'utils'

const geomanist = localFont({
  src: [
    {
      path: '../fonts/geomanist-regular-webfont.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/geomanist-book-webfont.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/geomanist-medium-webfont.woff2',
      weight: '600',
      style: 'normal'
    }
  ]
})

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  html {
    font-size: 15px;
    line-height: 1.5;
    touch-action: manipulation;
    font-family: ${geomanist.style.fontFamily};

    ${media.lessThan('sm')} {
      font-size: 14px;
    }

    ${media.lessThan('xxs')} {
      font-size: 13px;
    }
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    text-rendering: optimizeLegibility;
    overscroll-behavior-x: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;

    ${({ theme: { colors } }) => css`
      color: ${colors.neutral0};
      background-color: ${colors.neutral1000};

      a {
        color: ${colors.neutral0};

        &:hover {
          color: ${colors.aqua500};
        }
      }
    `}
  }

  :focus {
    outline-offset: ${rem(4)};

    ${({ theme: { colors } }) => css`
      border-radius: ${rem(1)};
      outline: 2px solid ${colors.aqua500};
    `}
  }

  ol,
  ul {
    list-style: none;
  }

  b,
  strong {
    font-weight: 700;
  }

  a,
  button,
  a:hover,
  button:hover {
    transition: color ease-in-out 300ms;
    text-decoration: none;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
  }

  label {
    display: inline-block;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  select {
    word-wrap: normal;
  }

  [data-hidden=true] {
    display: none !important;
  }

  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
