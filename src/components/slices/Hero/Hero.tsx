import Image from 'next/image'
import { HeroSlice } from 'resources'
import { Button, Text } from 'components/common'
import { Container } from 'components/helpers'

import * as S from './Hero.styled'

interface HeroProps {
  data: HeroSlice
}

const Hero = ({ data }: HeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Caption>
          <Text tag="h1" fontSize="h1" weight={600}>
            {data.title}
          </Text>
          <Text
            fontSize="h5"
            weight={500}
            opacity={0.6}
            maxWidth={700}
            marginTop={20}
          >
            {data.description}
          </Text>
          <Button
            href="#"
            className="cta"
            title={data.ctaButton}
            fieldSize="lg"
            marginTop={30}
          >
            {data.ctaButton}
          </Button>
          <S.Links>
            <Text weight={500} letterSpacing={0.5} marginBottom={15}>
              {data.belowLinks}
            </Text>
            <S.List>
              {data.links.map(({ image, url }, i) => (
                <S.ImageLink key={`link-${i}`} title="Download" href={url}>
                  <Image src={image} alt={``} width={148} height={44} />
                </S.ImageLink>
              ))}
            </S.List>
          </S.Links>
        </S.Caption>
      </Container>
      <S.Background>
        <Image
          src={data.backgroundImage}
          alt={data.title}
          sizes="100vw"
          style={{
            objectPosition: 'right',
            objectFit: 'cover'
          }}
          fill
        />
      </S.Background>
    </S.Wrapper>
  )
}

export default Hero
