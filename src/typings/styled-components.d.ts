import { theme } from 'styles'

declare module 'styled-components' {
  type Theme = typeof theme
  type Breakpoint = keyof Theme['grid']['breakpoints']
  type Color = keyof Theme['colors']
  type FontSize = keyof Theme['typography']['sizes']
  type FieldSize = keyof Theme['form']['input']
  type ButtonSize = keyof Theme['button']

  export interface DefaultTheme extends Theme {}
}
