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
}
