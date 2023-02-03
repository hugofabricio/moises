import { SvgProps } from 'svg'
import Text from '../Text'

import Vector from '../Vector'
import links from './Social.links'
import * as S from './Social.styled'

const Social = () => (
  <S.Wrapper>
    <Text data-hidden="true">Follow us</Text>
    <S.List>
      {links.map(({ label, url }) => (
        <S.Item key={label}>
          <S.Link
            href={url}
            title={label}
            target="_blank"
            rel="noopener noreferer"
          >
            <Vector name={`social-${label.toLocaleLowerCase()}` as SvgProps} />
          </S.Link>
        </S.Item>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Social
