import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  PropsWithChildren
} from 'react'
import { ButtonSize } from 'styled-components'
import { Link, LinkProps } from 'components/helpers'

import * as S from './Button.styled'

export type BaseButtonProps = {
  appearance?: 'solid' | 'link'
  fieldSize?: ButtonSize
} & MarginProps

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps & {
    tag?: 'button'
  }

type ButtonAsExternal = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonProps & {
    tag?: 'external'
    href: string
  }

type ButtonAsLink = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps &
  BaseButtonProps & {
    tag?: 'link'
  }

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink

const Button = ({
  tag = 'link',
  className,
  children,
  appearance = 'solid',
  fieldSize = 'md',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  if (tag === 'button') {
    return (
      <S.Button
        as="button"
        appearance={appearance}
        fieldSize={fieldSize}
        {...(props as ButtonAsButton)}
      >
        {children}
      </S.Button>
    )
  }

  if (tag === 'external') {
    return (
      <S.Button
        as="a"
        appearance={appearance}
        fieldSize={fieldSize}
        {...(props as ButtonAsExternal)}
      >
        {children}
      </S.Button>
    )
  }

  return (
    <S.Button
      // @ts-ignore
      as={Link}
      appearance={appearance}
      fieldSize={fieldSize}
      {...(props as ButtonAsLink)}
    >
      {children}
    </S.Button>
  )
}

export default Button
