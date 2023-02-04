import * as S from './Hamburguer.styled'

interface HamburguerProps {
  active: boolean
  toggle: () => void
}

const Hamburguer = ({ active, toggle }: HamburguerProps) => (
  <S.Wrapper
    className={active ? `is-active` : ``}
    type="button"
    onClick={toggle}
    aria-label="Menu"
  >
    <S.Bars />
  </S.Wrapper>
)

export default Hamburguer
