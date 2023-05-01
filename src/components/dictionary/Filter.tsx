/**
 * Компонент фильтра словаря
 *
 * @author Markitanov Vadim
 * @since 01.05.2023
 */
import React from 'react'
import { Col, Row } from 'antd'
import Search from 'antd/es/input/Search'
import Selector from '../common/Selector'
import type { SelectorDto } from '../../models/dto/SelectorDto'
import type { TypeDto } from '../../models/dto/TypeDto'
import type { TagDto } from '../../models/dto/TagDto'

interface FilterProps {
  types: TypeDto[]
  tags: TagDto[]
  onSearch: (value: string) => void
  typesSelectCallback: (options: SelectorDto[]) => void
  tagsSelectCallback: (options: SelectorDto[]) => void
}

const Filter = (props: FilterProps): JSX.Element => {
  const { types, tags, onSearch, typesSelectCallback, tagsSelectCallback } = props
  return (
    <Row>
      <Col flex="auto">
        <Search
          placeholder={'Введите слово для поиска'}
          style={{ minWidth: '100%' }}
          allowClear
          enterButton={'Поиск'}
          size={'middle'}
          onSearch={onSearch}
        />
      </Col>
      <Col flex="200px">
        <Selector placeholder={'Части речи'}
                  minWidth={'200px'}
                  mode={'multiple'}
                  options={types}
                  selectedCallback={typesSelectCallback}/>
      </Col>
      <Col flex="200px">
        <Selector placeholder={'Категории'}
                  minWidth={'200px'}
                  mode={'multiple'}
                  options={tags}
                  selectedCallback={tagsSelectCallback}/>
      </Col>
    </Row>
  )
}

export default Filter
