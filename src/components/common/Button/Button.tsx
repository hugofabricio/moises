import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  PropsWithChildren,
  ReactNode
} from 'react'
import { ButtonSize } from 'styled-components'
import { Link, LinkProps } from 'components/helpers'

import * as S from './Button.styled'

export type BaseButtonProps = {
  appearance?: 'solid' | 'link'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fieldSize?: ButtonSize
  fluidOnMobile?: boolean
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
  children,
  appearance = 'solid',
  leftIcon,
  rightIcon,
  fieldSize = 'md',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  let buttonConfig = []

  if (!!leftIcon) {
    buttonConfig.push(`has--left-icon`)
  }

  if (!!rightIcon) {
    buttonConfig.push(`has--right-icon`)
  }

  const className = buttonConfig.join(' ')

  const renderChildren = () => {
    return (
      <>
        {leftIcon && <S.Icon>{leftIcon}</S.Icon>}
        {children}
        {rightIcon && <S.Icon>{rightIcon}</S.Icon>}
      </>
    )
  }

  if (tag === 'button') {
    return (
      <S.Button
        as="button"
        className={className}
        appearance={appearance}
        fieldSize={fieldSize}
        {...(props as ButtonAsButton)}
      >
        {renderChildren()}
      </S.Button>
    )
  }

  if (tag === 'external') {
    return (
      <S.Button
        as="a"
        className={className}
        appearance={appearance}
        fieldSize={fieldSize}
        {...(props as ButtonAsExternal)}
      >
        {renderChildren()}
      </S.Button>
    )
  }

  return (
    <S.Button
      // @ts-ignore
      as={Link}
      className={className}
      appearance={appearance}
      fieldSize={fieldSize}
      {...(props as ButtonAsLink)}
    >
      {renderChildren()}
    </S.Button>
  )
}

export default Button
