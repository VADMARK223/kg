/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 20.07.2023
 */
import React, { useState } from 'react'
import { Space, Button } from 'antd'
import KgInput from '../common/KgInput'
import { useHotkeys } from 'react-hotkeys-hook'

interface SearchInputProps {
  onSearch: (value: string) => void
}

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { onSearch } = props
  const valueState = useState<string>('')

  useHotkeys('Enter', () => {
    handlerSearch()
  }, {
    enableOnFormTags: true
  })

  const handlerSearch = (): void => {
    onSearch(valueState[0])
  }

  return (
    <Space.Compact direction={'horizontal'}>
      <KgInput
        valueState={valueState}
        placeholder={'Введите слово для поиска'}
        width={'210px'}
      />
      <Button type={'primary'} onClick={handlerSearch}>Поиск</Button>
    </Space.Compact>
  )
}

export default SearchInput
