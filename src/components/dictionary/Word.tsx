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

interface WordProps {
  data: DictionaryData
  direction: boolean
}

const Word = (props: WordProps): JSX.Element => {
  const data = props.data
  const dispatch = useDispatch()
  const wordRemoveHandler = () => {
    console.log('Remove:', data.id)
    removeWord(dispatch, data.id)
  }
  return (
    <>
      <Space direction={'horizontal'}>
        {props.direction
          ? <div>
            {data.ru} - {data.kg} {data.tags !== undefined ? <>Категории: {data.tags}</> : null}
          </div>
          : <div>
            {data.kg} - {data.ru} {data.tags !== undefined ? <>Категории: {data.tags}</> : null}
          </div>}
        <Button danger onClick={wordRemoveHandler}>Удалить</Button>
      </Space>
    </>
  )
}

export default Word
