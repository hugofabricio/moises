import { Container } from 'components/helpers'
import { HeroSlice } from 'resources'

import * as S from './Hero.styled'

interface HeroProps {
  data: HeroSlice
}

const Hero = ({ data }: HeroProps) => {
  return <S.Wrapper>Hero</S.Wrapper>
}

export default Hero
