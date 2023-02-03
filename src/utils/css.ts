import { Breakpoint, css } from 'styled-components'
import media from './media'

const sizeProps = [
  'width',
  'height',
  'max-width',
  'max-height',
  'min-width',
  'min-height',
  'marign',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'top',
  'right',
  'bottom',
  'left',
  'border-radius',
  'border-width',
  'gap',
  'column-gap',
  'row-gap'
]

export const parseSize = (
  value: string | number,
  unit: 'px' | 'rem' | 'em' | 'vh' | 'vw' = 'px'
) => {
  if (typeof value === 'number') {
    return `${value}${unit}`
  }

  if (!isNaN(+value)) {
    return `${+value}${unit}`
  }

  return value
}

export const rem = (px: number, base = 15) =>
  parseSize((px / base).toFixed(4), 'rem')

const CSSValue = (prop: string, value: string | number) => {
  return sizeProps.includes(prop) ? parseSize(value) : value
}

export const parseResponsive = (breakpoint: Breakpoint) => {
  return (...args: any) => {
    return css`
      ${media.greaterThan(breakpoint)} {
        ${
          /* @ts-ignore */
          css(...args)
        }
      }
    `
  }
}

export const mapCSSPropsToStyled = (values: any) => {
  return Object.entries(values).map(([space, value]: any) => {
    if (!value) return

    const prop = space.replace(/[A-Z]/g, (m: string) => '-' + m.toLowerCase())

    if (typeof value !== 'object') {
      const style = `${prop}: ${CSSValue(prop, value)};`

      return css`
        ${style}
      `
    }

    return Object.entries(value).map(
      ([breakpoint, value]: any) =>
        parseResponsive(breakpoint)`${prop}: ${CSSValue(prop, value)};`
    )
  })
}
