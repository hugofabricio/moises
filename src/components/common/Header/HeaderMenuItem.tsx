import { useHeader } from 'hooks'
import { SvgProps } from 'svg'
import { Button, Vector } from '..'

import * as S from './Header.styled'

interface HeaderMenuItemProps {
  id: string
  label: string
  subMenu?: {
    icon: SvgProps
    item: string
  }[]
}

const HeaderMenuItem = ({ id, label, subMenu = [] }: HeaderMenuItemProps) => {
  const hasSubmenu = subMenu.length > 0
  const { expanded, onClickDropdown } = useHeader()

  let buttonProps = {}

  if (hasSubmenu) {
    buttonProps = {
      tag: 'button',
      onClick: () => onClickDropdown(id),
      rightIcon: (
        <Vector
          name="arrow-down"
          width={12}
          height={7.5}
          color="neutral0"
          opacity={0.6}
        />
      )
    }
  } else {
    buttonProps = {
      tag: 'link',
      href: label,
      title: label
    }
  }

  return (
    <S.Item>
      <Button {...buttonProps} appearance="link">
        {label}
      </Button>
      {hasSubmenu && (
        <S.Dropdown className={expanded === id ? `is-expanded` : ``}>
          {subMenu.map(({ item, icon }) => (
            <S.Item key={item}>
              <S.DropdownLink href={item} title={item}>
                <Vector name={icon} width={24} height={24} />
                {item}
              </S.DropdownLink>
            </S.Item>
          ))}
        </S.Dropdown>
      )}
    </S.Item>
  )
}

export default HeaderMenuItem
