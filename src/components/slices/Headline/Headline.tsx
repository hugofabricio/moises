import { Container } from 'components/helpers'
import { HeadlineSlice } from 'resources'

import * as S from './Headline.styled'

interface HeadlineProps {
  data: HeadlineSlice[]
}

const Headline = ({ data }: HeadlineProps) => {
  return (
    <S.Wrapper>
      <Container>Headline</Container>
    </S.Wrapper>
  )
}

export default Headline
