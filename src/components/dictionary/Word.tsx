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
  const wordTags: number | number[] = props.data.tags
  let currentTag: undefined | TagDto | TagDto[]

  if (Array.isArray(wordTags)) {
    currentTag = tags.filter(value => {
      return wordTags.includes(value.value)
    })
  } else if (Number.isInteger(wordTags)) {
    currentTag = tags.find(value => {
      return value.value === data.tags
    })
  }

  const dispatch = useDispatch()
  const wordRemoveHandler = () => {
    removeWord(dispatch, data.id)
  }

  const getTags = (): string => {
    if (currentTag !== undefined) {
      if (Array.isArray(currentTag)) {
        const joinString = currentTag.map(value => value.label).join(', ')
        return `(${joinString})`
      } else {
        return `(${currentTag.label})`
      }
    } else {
      return ''
    }
  }

  const tagsElement = () => (<i>{getTags()}</i>)

  return (
    <>
      <Space direction={'horizontal'}>
        {props.direction
          ? <div>
            {data.ru} - {data.kg} {tagsElement()}
          </div>
          : <div>
            {data.kg} - {data.ru} {tagsElement()}
          </div>}
        <Button danger onClick={wordRemoveHandler}>Удалить</Button>
      </Space>
      <br/>
    </>
  )
}

export default Word
