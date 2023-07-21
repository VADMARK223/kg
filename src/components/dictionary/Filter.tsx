/**
 * Компонент фильтра словаря
 *
 * @author Markitanov Vadim
 * @since 01.05.2023
 */
import React from 'react'
import Selector from '../common/Selector'
import type { SelectorDto } from '../../models/dto/SelectorDto'
import { Space } from 'antd'
import { useAppSelector } from '../../store/hooks'
import SearchInput from './SearchInput'

interface FilterProps {
  onSearch: (value: string) => void
  typesSelectCallback: (options: SelectorDto[]) => void
  tagsSelectCallback: (options: SelectorDto[]) => void
}

const Filter = React.memo((props: FilterProps): JSX.Element => {
  const types = useAppSelector(state => state.dic.types)
  const tags = useAppSelector(state => state.dic.tags)
  const { onSearch, typesSelectCallback, tagsSelectCallback } = props
  return (
    <Space wrap>
      <SearchInput onSearch={onSearch}/>
      <Selector placeholder={'Части речи'}
                minWidth={'200px'}
                mode={'multiple'}
                options={types}
                selectedCallback={typesSelectCallback}
      />
      <Selector placeholder={'Категории'}
                minWidth={'200px'}
                mode={'multiple'}
                options={tags}
                selectedCallback={tagsSelectCallback}
      />
    </Space>
  )
})

Filter.displayName = 'Filter'

export default Filter
