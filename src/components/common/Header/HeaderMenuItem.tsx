import { useHeader } from 'hooks'
import { Button, Vector } from '..'

import * as S from './Header.styled'

interface HeaderMenuItemProps {
  id: string
  label: string
  subMenu?: {
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
      <Button {...buttonProps} appearance="link" fieldSize="lg">
        {label}
      </Button>
      {hasSubmenu && (
        <S.Dropdown className={expanded === id ? `is-expanded` : ``}>
          {subMenu.map(({ item }) => (
            <S.Item key={item}>
              <S.DropdownLink href={item} title={item}>
                <Vector name="ai-songwriter" width={24} height={24} />
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