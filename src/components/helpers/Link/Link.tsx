import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect, useState } from 'react'

export interface LinkProps extends NextLinkProps {
  className?: string
  activeClassName?: string
  partiallyActive?: boolean
}

const Link = ({
  className,
  activeClassName = 'active',
  partiallyActive = true,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const { asPath, isReady } = useRouter()
  const [computedClassName, setComputedClassName] = useState(className)

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName
  ])

  return (
    <NextLink className={computedClassName} {...props}>
      {children}
    </NextLink>
  )
}

export default Link
