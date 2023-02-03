import { Page } from 'resources'
import { Container } from 'components/helpers'
import Text from '../Text'
import Social from '../Social'
import LanguageSwitcher from '../LanguageSwitcher'
import Brand from '../Brand'

import * as S from './Footer.styled'

interface FooterProps {
  data?: Page['footer']
}

const Footer = ({ data }: FooterProps) => {
  const groups = data?.sections || []

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Column>
            <Brand width={128} height={20} />
            <Text weight={500} color="neutral600" marginTop={10}>
              Empowering Creative Potential
            </Text>
            <LanguageSwitcher />
            <Social />
          </S.Column>
          {groups.map(({ name, list }) => (
            <S.Column key={name}>
              <Text
                tag="h3"
                fontSize="label"
                color="neutral600"
                weight={600}
                letterSpacing={0.5}
                marginBottom={15}
                uppercase
              >
                {name}
              </Text>
              <S.List>
                {list.map(({ label, url }) => (
                  <S.Item key={label}>
                    <S.Link title={label} href={url}>
                      {label}
                    </S.Link>
                  </S.Item>
                ))}
              </S.List>
            </S.Column>
          ))}
        </S.Content>
        <S.Copyright>
          <Text color="neutral600" weight={500}>
            © 2021 Moises Systems, Inc. All rights reserved.
          </Text>
        </S.Copyright>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
