/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React from 'react'
import type { DictionaryData } from '../../models/DictionaryData'
import { Button, Space } from 'antd'
import { removeWord } from '../../api/dictionary'
import { useDispatch } from 'react-redux'
import { TagDto } from '../../models/dto/TagDto'

interface WordProps {
  data: DictionaryData
  direction: boolean
  tags: TagDto[]
}

const Word = (props: WordProps): JSX.Element => {
  const data = props.data
  const tags = props.tags
  const currentTag = tags.find(value => {
    return value.value === data.tags
  })
  const dispatch = useDispatch()
  const wordRemoveHandler = () => {
    removeWord(dispatch, data.id)
  }
  return (
    <>
      <Space direction={'horizontal'}>
        {props.direction
          ? <div>
            {data.ru} - {data.kg} {data.tags !== undefined ? <i>({currentTag?.label})</i> : null}
          </div>
          : <div>
            {data.kg} - {data.ru} {data.tags !== undefined ? <i>({currentTag?.label})</i> : null}
          </div>}
        <Button danger onClick={wordRemoveHandler}>Удалить</Button>
      </Space>
      <br/>
    </>
  )
}

export default Word
