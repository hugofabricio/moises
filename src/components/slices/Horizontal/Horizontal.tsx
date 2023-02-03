import Image from 'next/image'
import { Text } from 'components/common'
import { Container } from 'components/helpers'
import { HorizontalSlice } from 'resources'

import * as S from './Horizontal.styled'

interface HeadlineProps {
  data: HorizontalSlice
}

// {
//   "name": "simple_horizontal",
//   "data": {
//     "title": "Mais do que um app. Um parceiro musical.",
//     "subtitle": "Sua biblioteca privada pode ser acessada de qualquer dispositivo, armazenada com segurança na nuvem.",
//     "image": "https://moises.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmoises-cms%2FDevices_wiht_ipad_bce87d9f5f%2FDevices_wiht_ipad_bce87d9f5f.png&w=3840&q=100"
//   }
// },

const Headline = ({ data }: HeadlineProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <Text fontSize="h1" weight={600}>
            {data.title}
          </Text>
          <Text fontSize="h5" weight={500} opacity={0.6} maxWidth={700}>
            {data.subtitle}
          </Text>
        </S.Content>
        <Image
          src={data.image}
          alt={data.title}
          width={1200}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            objectPosition: 'center',
            objectFit: 'contain'
          }}
        />
      </Container>
    </S.Wrapper>
  )
}

export default Headline
