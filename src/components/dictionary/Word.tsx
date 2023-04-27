/**
 * Компонент слова в словаре
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React, { useState } from 'react'
import { Button, Space, Popover, Tooltip, Rate } from 'antd'
import { removeWord } from '../../api/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import type { TypeDto } from '../../models/dto/TypeDto'
import WordEditor from './WordEditor'
import WordTag from './WordTag'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { ADMIN_MODE } from '../../api/common'
import type { WordDto } from '../../models/dto/WordDto'

interface WordProps {
  data: WordDto
  direction: boolean
  isFavor: boolean
  changeFavorCallback: (id: number, add: boolean) => void
}

const Word = (props: WordProps): JSX.Element => {
  const types = useSelector((state: any): TypeDto[] => state.dic.types)

  const { isFavor, changeFavorCallback } = props
  const [checked, setChecked] = useState(isFavor)
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

  const onChange = (value: number): void => {
    const checked = value === 1
    setChecked(checked)
    changeFavorCallback(data.id as number, checked)
  }

  return (
    <>
      <Space direction={'horizontal'}>
        <Rate count={1} defaultValue={checked ? 1 : undefined} onChange={onChange}/>
        <div>
          {props.direction ? (<>{data.ru} - {data.kg}</>) : (<>{data.kg} - {data.ru}</>)} {typeElement()}
        </div>
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
