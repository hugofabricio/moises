import { createGlobalStyle, css } from 'styled-components'
import localFont from '@next/font/local'
import { media } from 'utils'

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
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  @media not all and (min-resolution: .001dpcm) {
    img[loading="lazy"] {
      clip-path: inset(0.5px);
    }
  }

  html {
    font-size: 15px;
    line-height: 1.4;
    touch-action: manipulation;
    font-family: ${geomanist.style.fontFamily};

    ${media.lessThan('xs')} {
      line-height: 1.3;
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

  ${({ theme: { colors } }) => css`
    ::selection {
      color: ${colors.neutral1000};
      background-color: ${colors.aqua500};
    }
  `}

  ol,
  ul {
    list-style: none;
  }

  b,
  strong {
    font-weight: 700;
  }

  :focus-visible {
    ${({ theme: { colors } }) => css`
      outline-offset: 4px;
      outline: 2px solid ${colors.aqua500};
    `}
  }

  a,
  button,
  a:hover,
  button:hover {
    transition: color ease-in-out 300ms, background-color ease-in-out 300ms, border ease-in-out 300ms;
    text-decoration: none;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
  }

  label {
    display: inline-block;
  }

  img {
    border: 0;
    vertical-align: middle;
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
