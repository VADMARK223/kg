/**
 * Компонент выбора категорий
 *
 * @author Markitanov Vadim
 * @since 10.04.2023
 */
import React from 'react'
import { Select } from 'antd'
import { useSelector } from 'react-redux'
import type { TagDto } from '../../models/dto/TagDto'

interface TagSelectorProps {
  data: undefined | TagDto[]
  changeCallback: (ids: TagDto[]) => void
}

const TagSelector = (props: TagSelectorProps): JSX.Element => {
  const tags = useSelector((state: any): TagDto[] => state.dic.tags)
  let defValue: null | number[] = null
  if (props.data !== undefined) {
    defValue = props.data.map(value => value.id)
  }

  const tagsChangeHandler = (values: number[]): void => {
    const selectedTags = tags.filter(tag => {
      return values.includes(tag.id)
    })
    props.changeCallback(selectedTags)
  }

  return (
    <Select
      placeholder={'Категории'}
      style={{ minWidth: '170px' }}
      mode={'multiple'}
      onChange={tagsChangeHandler}
      options={tags}
      defaultValue={defValue ?? undefined}
    />
  )
}

export default TagSelector
