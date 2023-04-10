/**
 * Компонент слова в словаре
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React, { useState } from 'react'
import type { DictionaryData } from '../../models/DictionaryData'
import { Button, Space, Popover } from 'antd'
import { removeWord } from '../../api/dictionary'
import { useDispatch } from 'react-redux'
import type { TypeDto } from '../../models/dto/TypeDto'
import WordEditor from './WordEditor'

interface WordProps {
  data: DictionaryData
  direction: boolean
  types: TypeDto[]
}

const Word = (props: WordProps): JSX.Element => {
  const data = props.data
  const tags = data.tags
  const currentType = props.types.find(value => {
    return value.value === data.type
  })

  const dispatch = useDispatch()
  const wordRemoveHandler = (): void => {
    removeWord(dispatch, data.id as number)
  }

  const getTags = (): string => {
    if (tags.length === 0) {
      return ''
    }
    const joinString: string = tags.map(value => value.label).join(', ')
    return `(${joinString})`
  }

  const tagsElement = (): JSX.Element => (<i>{getTags()}</i>)

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
            {data.ru} - {data.kg} {typeElement()} {tagsElement()}
          </div>
          : <div>
            {data.kg} - {data.ru} {typeElement()} {tagsElement()}
          </div>}
        <Popover content={<WordEditor data={data} types={props.types}/>}
                 title={'Редактирование слова'}
                 trigger={'click'}
                 open={open}
                 onOpenChange={handleOpenChange}>
          <Button>Изменить</Button>
        </Popover>
        <Button danger onClick={wordRemoveHandler}>Удалить</Button>
      </Space>
      <br/>
    </>
  )
}

export default Word
