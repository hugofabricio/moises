import { Breakpoint } from 'styled-components'
import { theme } from 'styles'
import { parseSize } from './css'

const media = () => {
  const sizes = theme.grid.breakpoints

  const hasBreakpoint = (breakpoint: Breakpoint) => {
    if (sizes[breakpoint] === undefined) {
      throw new Error(`Breakpoint ${breakpoint} not found`)
    }

    return true
  }

  const getNextBreakpoint = (breakpoint: Breakpoint): Breakpoint => {
    const keys = Object.keys(sizes)
    const index = keys.indexOf(breakpoint)
    return keys[index + 1] as Breakpoint
  }

  const greaterThan = (breakpoint: Breakpoint) => {
    hasBreakpoint(breakpoint)

    const size = parseSize(sizes[breakpoint], 'rem')
    return `@media (min-width: ${size})`
  }

  const lessThan = (breakpoint: Breakpoint) => {
    hasBreakpoint(breakpoint)

    const nextBreakpoint = getNextBreakpoint(breakpoint)
    const size = parseSize(sizes[nextBreakpoint] - 0.02, 'rem')
    return `@media (max-width: ${size})`
  }

  const between = (min: Breakpoint, max: Breakpoint) => {
    hasBreakpoint(min)
    hasBreakpoint(max)

    const size = parseSize(sizes[max] - 0.02, 'rem')
    return `@media (min-width: ${sizes[min]}px) and (max-width: ${size})`
  }

  const only = (breakpoint: Breakpoint) => {
    hasBreakpoint(breakpoint)

    const nextBreakpoint = getNextBreakpoint(breakpoint)
    return hasBreakpoint(nextBreakpoint)
      ? between(breakpoint, nextBreakpoint)
      : greaterThan(breakpoint)
  }

  return {
    greaterThan,
    lessThan,
    between,
    only
  }
}

export default media()
