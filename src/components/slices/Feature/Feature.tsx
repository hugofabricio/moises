import Image from 'next/image'
import { Text } from 'components/common'
import { Container } from 'components/helpers'
import { FeatureSlice } from 'resources'

import * as S from './Feature.styled'

interface FeatureProps {
  items: FeatureSlice[]
}

const Feature = ({ items }: FeatureProps) => (
  <S.Wrapper>
    <Container>
      <S.InnerWrapper>
        {items.map((card, i) => (
          <S.Card key={`card-${i}`}>
            <S.InnerCard reverse={card.imagePosition === 'left'}>
              <S.Caption>
                <Text tag="h2" fontSize="h3" lineHeight={38} weight={700}>
                  {!!card.ctaHighlightText && (
                    <span>{card.ctaHighlightText}</span>
                  )}{' '}
                  {card.ctaRegularText}
                </Text>
                <Text fontSize="h6" weight={500} marginTop={15}>
                  {card.description}
                </Text>
              </S.Caption>
              <S.Figure>
                <Image
                  src={card.image}
                  alt={card.ctaHighlightText}
                  style={{
                    objectPosition: 'center',
                    objectFit: 'contain'
                  }}
                  fill
                />
              </S.Figure>
            </S.InnerCard>
            <S.Background>
              <Image
                src={card.backgroundImage}
                alt={``}
                sizes="100vw"
                style={{
                  objectPosition: 'center',
                  objectFit: 'cover'
                }}
                fill
              />
            </S.Background>
          </S.Card>
        ))}
      </S.InnerWrapper>
    </Container>
  </S.Wrapper>
)

export default Feature
