import { useRouter } from 'next/router'
import { ChangeEventHandler, useMemo, useState } from 'react'
import { Select } from 'components/fields'
import * as S from './LanguageSwitcher.styled'

const LocaleSwitch = () => {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState(router.locale)

  const locales = router.locales ?? []

  const handleLocale: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const locale = event.target.value
    setCurrentLocale(locale)

    const { asPath: path } = router
    return router.push(path, path, { locale })
  }

  const languages = useMemo(() => {
    return new Intl.DisplayNames([router.locale as string], {
      type: 'language'
    })
  }, [router.locale])

  return (
    <S.Wrapper>
      <Select
        hideLabel
        hidePlaceholder
        label="Idioma"
        name="locale"
        value={currentLocale}
        onChange={handleLocale}
        options={locales.map((locale) => ({
          value: locale,
          label: languages.of(locale) ?? locale
        }))}
      />
    </S.Wrapper>
  )
}

export default LocaleSwitch
