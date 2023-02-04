import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState
} from 'react'

const initialHeaderState = {
  affixed: false,
  opened: false,
  expanded: false
}

export type HeaderState = {
  affixed: boolean
  opened: boolean
  expanded: boolean | string
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
