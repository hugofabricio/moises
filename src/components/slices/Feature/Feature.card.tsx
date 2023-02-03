import Image from 'next/image'
import { Button, Text } from 'components/common'
import { FeatureSlice } from 'resources'

import * as S from './Feature.styled'

interface FeatureCardProps {
  data: FeatureSlice
}

const FeatureCard = ({ data }: FeatureCardProps) => (
  <S.Card>
    <S.InnerCard reverse={data.imagePosition === 'left'}>
      <S.Caption>
        <Text tag="h2" fontSize="h3" lineHeight={38} weight={700}>
          {!!data.ctaHighlightText && <span>{data.ctaHighlightText}</span>}{' '}
          {data.ctaRegularText}
        </Text>
        {!!data.description && (
          <Text fontSize="h6" weight={500} marginTop={15}>
            {data.description}
          </Text>
        )}
        {!!data.button && (
          <Button href="#" title={data.button} fieldSize="lg" marginTop={30}>
            {data.button}
          </Button>
        )}
      </S.Caption>
      <S.Figure>
        <Image
          src={data.image}
          alt={data.ctaHighlightText}
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
        src={data.backgroundImage}
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
)

export default FeatureCard
