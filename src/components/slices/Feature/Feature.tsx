import { Container } from 'components/helpers'
import { FeatureSlice } from 'resources'

import FeatureCard from './Feature.card'
import * as S from './Feature.styled'

interface FeatureProps {
  items: FeatureSlice[]
}

const Feature = ({ items }: FeatureProps) => (
  <S.Wrapper>
    <Container>
      <S.InnerWrapper>
        {items.map((card, i) => (
          <FeatureCard key={`card-${i}`} data={card} />
        ))}
      </S.InnerWrapper>
    </Container>
  </S.Wrapper>
)

export default Feature
