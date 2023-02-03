import styled from 'styled-components'

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
`

export const Caption = styled.div`
  max-width: 500px;
`

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
`
