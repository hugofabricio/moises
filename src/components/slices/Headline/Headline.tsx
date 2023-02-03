import { Text } from 'components/common'
import { Container } from 'components/helpers'
import { HeadlineSlice } from 'resources'

import * as S from './Headline.styled'

interface HeadlineProps {
  data: HeadlineSlice
}

const Headline = ({ data }: HeadlineProps) => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <Text
          tag="h2"
          weight={600}
          fontSize={'text'}
          color={'aqua500'}
          letterSpacing={0.5}
          lineHeight={1}
          uppercase
        >
          {data.title}
        </Text>
        <Text fontSize="h1" weight={600}>
          {data.subtitle}
        </Text>
        <Text fontSize="h5" weight={500} opacity={0.6} maxWidth={600}>
          {data.description}
        </Text>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Headline
