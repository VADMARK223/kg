/**
 * Компонент слова в словаре
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React from 'react'
import { Button, Space, Tooltip } from 'antd'
import { removeWord } from '../../api/dictionary'
import WordTag from './WordTag'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ADMIN_MODE } from '../../api/common'
import type { WordDto } from '../../models/dto/WordDto'
import Favorite from '../common/Favorite'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

interface WordProps {
  data: WordDto
  direction: boolean
  editWordCallback: (value: WordDto) => void
}

const Word = (props: WordProps): JSX.Element => {
  const { editWordCallback } = props
  const types = useAppSelector(state => state.dic.types)

  const data = props.data
  const tags = data.tags
  const currentType = types.find(value => {
    return value.value === data.type
  })

  const dispatch = useAppDispatch()
  const wordRemoveHandler = (): void => {
    removeWord(dispatch, data.id as number)
  }

  const typeElement = (): JSX.Element => (<b>{currentType?.label}</b>)

  const editWordHandler = (): void => {
    editWordCallback(data)
  }

  return (
    <>
      <Space direction={'horizontal'}>
        <Favorite wordId={data.id as number}/>
        <div>
          {props.direction ? (<>{data.ru} - {data.kg}</>) : (<>{data.kg} - {data.ru}</>)} {typeElement()}
        </div>
        {ADMIN_MODE && <>
            <Button icon={<EditOutlined/>} onClick={editWordHandler}/>
            <Tooltip title={'Удалить слово'}>
                <Button danger onClick={wordRemoveHandler} icon={<DeleteOutlined/>}/>
            </Tooltip>
            <div>
              {tags.map(value => <WordTag key={value.value} label={value.label} color={value.color}/>)}
            </div>
        </>}
      </Space>
      <br/>
    </>
  )
}

export default Word
