/**
 * Компонент выбора из словаря
 *
 * @author Markitanov Vadim
 * @since 10.04.2023
 */
import React from 'react'
import { Select } from 'antd'
import type { SelectorDto } from '../../models/dto/SelectorDto'

interface SelectorProps {
  placeholder: string
  mode: 'multiple' | 'tags'
  defaultOption?: SelectorDto[]
  options?: SelectorDto[]
  selectedCallback?: (options: SelectorDto[]) => void
  minWidth?: string
}

const Selector = (props: SelectorProps): JSX.Element => {
  const minWidth: string = props.minWidth ?? '100%'

  function onChangeHandler (value: SelectorDto[], option: any): void {
    if (props.selectedCallback !== undefined) {
      props.selectedCallback(option)
    }
  }

  return (
    <Select<SelectorDto[], SelectorDto>
      placeholder={props.placeholder}
      style={{ minWidth }}
      mode={props.mode}
      options={props.options}
      defaultValue={props.defaultOption}
      filterOption={(inputValue, option) => {
        return option?.label.toLowerCase().includes(inputValue.toLowerCase()) ?? true
      }}
      onChange={onChangeHandler}
    />
  )
}

export default Selector
