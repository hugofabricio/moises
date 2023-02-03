import { forwardRef, SelectHTMLAttributes } from 'react'
import { FieldSize } from 'styled-components'
import Label from '../Label'

import * as S from './Select.styled'

export type OptionProps =
  | string
  | number
  | { value: string | number; label: string | number }

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options?: OptionProps[]
  hideLabel?: boolean
  hidePlaceholder?: boolean
  fieldSize?: FieldSize
  marginBottom?: MarginProps['marginBottom']
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      name,
      placeholder = 'Selecione',
      options = [],
      hideLabel = false,
      hidePlaceholder = false,
      onChange,
      fieldSize = 'md',
      marginBottom = 0,
      ...rest
    }: SelectProps,
    ref
  ) => {
    const fieldId = id ?? name

    const renderOptions = options.map((option) => {
      if (typeof option === 'object') {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      }

      return (
        <option key={option} value={option}>
          {option}
        </option>
      )
    })

    return (
      <S.Wrapper marginBottom={marginBottom}>
        {!hideLabel && (
          <Label htmlFor={fieldId} hidden={hideLabel}>
            {label}
          </Label>
        )}
        <S.Field
          ref={ref}
          id={fieldId}
          name={name}
          onChange={onChange}
          fieldSize={fieldSize}
          {...rest}
        >
          {!hidePlaceholder && <option value="">{placeholder || label}</option>}
          {renderOptions}
        </S.Field>
      </S.Wrapper>
    )
  }
)

Select.displayName = 'Select'

export default Select
