import Image from 'next/image'
import { HeroSlice } from 'resources'
import { Button, Text } from 'components/common'
import { Container } from 'components/helpers'

import * as S from './Hero.styled'

interface HeroProps {
  data: HeroSlice
}

//   "data": {
//     "ctaButton": "Comece já",
//     "belowLinks": "EXPERIMENTE GRÁTIS",
//     "links": [
//       {
//         "image": "https://storage.googleapis.com/moises-cms/app_store_3279bb50bd/app_store_3279bb50bd.svg",
//         "url": "https://apps.apple.com/app/apple-store/id1515796612?pt=121597498&ct=home_hero&mt=8"
//       },
//       {
//         "image": "https://storage.googleapis.com/moises-cms/app_google_play_1_3cdc01c8aa/app_google_play_1_3cdc01c8aa.svg",
//         "url": "https://play.google.com/store/apps/details?id=ai.moises&referrer=utm_source%3Dhome_hero%26utm_medium%3Dwww%26utm_campaign%3Dhome_hero"
//       }
//     ]

const Hero = ({ data }: HeroProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Caption>
          <Text fontSize="h1" weight={600}>
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
          <Button href="#" title={data.ctaButton} fieldSize="lg" marginTop={30}>
            {data.ctaButton}
          </Button>
        </S.Caption>
      </Container>
      <S.Background>
        <Image
          src={data.backgroundImage}
          alt={data.title}
          sizes="100vw"
          style={{
            objectPosition: 'center',
            objectFit: 'cover'
          }}
          fill
        />
      </S.Background>
    </S.Wrapper>
  )
}

export default Hero
