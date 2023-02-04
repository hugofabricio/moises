import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react'

export type HeaderState = {
  affixed: boolean
  opened: boolean
  expanded: boolean | string
  solidButton: number
}

const initialHeaderState: HeaderState = {
  affixed: false,
  opened: false,
  expanded: false,
  solidButton: 1
}

export const HeaderContext = createContext<{
  state: HeaderState
  setState: Dispatch<SetStateAction<HeaderState>>
}>({
  state: initialHeaderState,
  setState: () => {}
})

export const HeaderProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<HeaderState>(initialHeaderState)

  return (
    <HeaderContext.Provider value={{ state, setState }}>
      {children}
    </HeaderContext.Provider>
  )
}
