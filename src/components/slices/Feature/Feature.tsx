import { Text } from 'components/common'
import { Container } from 'components/helpers'
import { FeatureSlice } from 'resources'

import * as S from './Feature.styled'

interface FeatureProps {
  items: FeatureSlice[]
}

const Feature = ({ items }: FeatureProps) => (
  <S.Wrapper>
    {items.map((card, i) => (
      <S.Card key={`card-${i}`}>
        <Container>
          <S.InnerWrapper>
            <S.Caption>
              <Text tag="h2" fontSize="h3" lineHeight={38} weight={700}>
                {!!card.ctaHighlightText && (
                  <span>{card.ctaHighlightText}</span>
                )}{' '}
                {card.ctaRegularText}
              </Text>
            </S.Caption>
            <S.Figure></S.Figure>
          </S.InnerWrapper>
        </Container>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default Feature
