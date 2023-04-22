/**
 * Компонент слова в словаре
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React, { useState } from 'react'
import type { DictionaryData } from '../../models/DictionaryData'
import { Button, Space, Popover, Tooltip } from 'antd'
import { removeWord } from '../../api/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import type { TypeDto } from '../../models/dto/TypeDto'
import WordEditor from './WordEditor'
import WordTag from './WordTag'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ADMIN_MODE } from '../../api/common'

interface WordProps {
  data: DictionaryData
  direction: boolean
}

const Word = (props: WordProps): JSX.Element => {
  const types = useSelector((state: any): TypeDto[] => state.dic.types)
  const data = props.data
  const tags = data.tags
  const currentType = types.find(value => {
    return value.value === data.type
  })

  const dispatch = useDispatch()
  const wordRemoveHandler = (): void => {
    removeWord(dispatch, data.id as number)
  }

  const typeElement = (): JSX.Element => (<b>{currentType?.label}</b>)

  const [open, setOpen] = useState(false)

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen)
  }

  return (
    <>
      <Space direction={'horizontal'}>
        {props.direction
          ? <div>
            {data.ru} - {data.kg} {typeElement()}
          </div>
          : <div>
            {data.kg} - {data.ru} {typeElement()}
          </div>}
        {ADMIN_MODE && <>
            <Popover content={<WordEditor data={data} closeCallback={() => {
              setOpen(false)
            }}/>}
                     title={'Редактирование слова'}
                     trigger={'click'}
                     open={open}
                     onOpenChange={handleOpenChange}>
                <Button icon={<EditOutlined/>}/>
            </Popover>
            <Tooltip title={'Удалить слово'}>
                <Button danger onClick={wordRemoveHandler} icon={<DeleteOutlined/>}/>
            </Tooltip>
        </>}

        <div>
          {tags.map(value => <WordTag key={value.value} label={value.label} color={value.color}/>)}
        </div>
      </Space>
      <br/>
    </>
  )
}

export default Word
