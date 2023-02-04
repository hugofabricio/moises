/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react'
import { useLockBodyScroll, useWindowScroll, useWindowSize } from 'react-use'
import { HeaderContext, HeaderState } from 'contexts'

const useHeader = (minWidthForDestkopMenu: number | undefined = 993) => {
  const { state, setState } = useContext(HeaderContext)
  const { width } = useWindowSize()
  const { y } = useWindowScroll()

  const { affixed, expanded, opened } = state

  useLockBodyScroll(opened)

  const handleState = useCallback((newState: Partial<HeaderState>) => {
    setState((prevState) => ({ ...prevState, ...newState }))
  }, [])

  const affixHeader = useCallback(() => {
    if (y > 1) {
      !affixed && handleState({ affixed: true })
    } else if (y <= 1) {
      affixed && handleState({ affixed: false })
    }
  }, [y, affixed])

  useEffect(() => {
    const isDesktopAndOpenedMenu = width >= minWidthForDestkopMenu && opened

    if (isDesktopAndOpenedMenu) {
      handleState({ opened: false })
    }
  }, [width, opened, minWidthForDestkopMenu])

  useEffect(() => {
    !opened && affixHeader()
  }, [affixHeader, opened, y])

  const onHandleMenu = (active: boolean) => {
    handleState({ opened: active })
  }

  const onClickDropdown = (id: string) => {
    handleState({ expanded: expanded === id ? false : id })
  }

  return {
    ...state,
    width,
    onHandleMenu,
    onClickDropdown,
    minWidthForDestkopMenu
  }
}

export default useHeader
