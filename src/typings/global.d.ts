import { theme } from 'styles'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CMS_API: string
      NODE_ENV: 'development' | 'production'
      PORT?: string
      PWD: string
    }
  }

  type Responsive<T> = {
    xxxs?: T
    xxs?: T
    xs?: T
    sm?: T
    md?: T
    lg?: T
    xl?: T
    xxl?: T
  }

  type Size = string | number

  type MarginProps = {
    marginTop?: Size
    marginRight?: Size
    marginBottom?: Size
    marginLeft?: Size
  }

  type PaddingProps = {
    paddingTop?: Size
    paddingRight?: Size
    paddingBottom?: Size
    paddingLeft?: Size
  }

  type SpacingProps = MarginProps & PaddingProps
}
