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
  options?: SelectorDto[]
  selectedCallback?: (options: SelectorDto[]) => void
}

const Selector = (props: SelectorProps): JSX.Element => {
  function onChangeHandler (value: string, options: SelectorDto[] | SelectorDto): void {
    console.log('Selected options', options)
    if (props.selectedCallback !== undefined) {
      if (Array.isArray(options)) {
        props.selectedCallback(options)
      } else {
        props.selectedCallback([options])
      }
    }
  }

  return (
    <Select
      placeholder={props.placeholder}
      style={{ minWidth: '170px', width: '100%' }}
      mode={props.mode}
      options={props.options}
      filterOption={(inputValue, option) => {
        console.log('inputValue', inputValue)
        console.log('option', option)
        return option?.label.toLowerCase().includes(inputValue.toLowerCase()) ?? true
      }}
      onChange={onChangeHandler}
    />
  )
}

export default Selector
