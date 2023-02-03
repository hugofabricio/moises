import { Slice } from 'resources'
import * as slices from 'components/slices'
import * as S from './SliceRoot.styled'

interface SliceRoot {
  data: Slice[]
}

const SLICES: Record<Slice['name'], any> = {
  hero: slices.Hero,
  simple_horizontal: slices.Headline,
  simple_headline: slices.Headline,
  stacked_list: slices.Feature
}

const SliceRoot = ({ data = [] }: SliceRoot) => {
  return (
    <S.Wrapper>
      {data.map(({ name, ...rest }, i) => {
        const Component = SLICES[name]

        if (!Component) return null

        return <Component key={`slice-${name}-${i}`} {...rest} />
      })}
    </S.Wrapper>
  )
}

export default SliceRoot
