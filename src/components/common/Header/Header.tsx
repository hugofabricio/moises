import { Page } from 'resources'
import { useHeader } from 'hooks'
import { Container, Hamburguer, Link } from 'components/helpers'

import Brand from '../Brand'
import HeaderMenuItem from './HeaderMenuItem'
import { Button } from '..'

import * as S from './Header.styled'

interface HeaderProps {
  data?: Page['menu']
}

const Header = ({ data = [] }: HeaderProps) => {
  const { affixed, opened, solidButton, onHandleMenu } = useHeader()

  const isAffixed = affixed ? `is-affixed` : ``
  const isOpened = opened ? `is-opened` : ``

  const menu = data.slice(0, data.length - 2)
  const useMenu = data.slice(data.length - 2, data.length)

  return (
    <S.Wrapper className={`${isAffixed} ${isOpened}`}>
      <Container>
        <S.Bar>
          <Link href="/" title="Moises">
            <Brand appearance="icon" width={40} height={22} />
          </Link>
          <S.Menu>
            <S.Group>
              <S.List>
                {menu.map(({ item, subitems }) => (
                  <HeaderMenuItem
                    key={item}
                    id={item}
                    label={item}
                    subMenu={subitems}
                  />
                ))}
              </S.List>
            </S.Group>
            <S.Group>
              <S.List>
                {useMenu.map(({ item }, i) => (
                  <S.Item key={item}>
                    <Button
                      tag="link"
                      href={item}
                      title={item}
                      appearance={i === solidButton ? 'solid' : 'link'}
                      fluidOnMobile
                    >
                      {item}
                    </Button>
                  </S.Item>
                ))}
              </S.List>
            </S.Group>
          </S.Menu>
          <S.Toggle>
            <Hamburguer active={opened} toggle={() => onHandleMenu(!opened)} />
          </S.Toggle>
        </S.Bar>
      </Container>
    </S.Wrapper>
  )
}

export default Header
