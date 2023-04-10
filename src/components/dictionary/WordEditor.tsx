/**
 * Компонент для добавления или редактирования слов
 *
 * @author Markitanov Vadim
 * @since 06.04.2023
 */
import React, { useState, useEffect } from 'react'
import type { WordDto } from '../../models/dto/WordDto'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Select, Button, Space } from 'antd'
import type { TypeDto } from '../../models/dto/TypeDto'
import { saveWord } from '../../api/dictionary'
import type { TagDto } from '../../models/dto/TagDto'
import Selector from '../common/Selector'

interface WordEditorProps {
  data?: WordDto
  types: TypeDto[] // TODO: вынести в общее состояние
}

const WordEditor = (props: WordEditorProps): JSX.Element => {
  const dicTags = useSelector((state: any): TagDto[] => state.dic.tags)
  const data = props.data
  const isEditMode = data !== undefined
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState(data?.ru)
  const [kgValue, setKgValue] = useState(data?.kg)
  const [type, setType] = useState<number>(data?.type ?? 0)
  const [tags, setTags] = useState<TagDto[]>(data?.tags ?? [])
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    setButtonDisable(ruValue === undefined || ruValue === '' || kgValue === undefined || kgValue === '')
  }, [ruValue, kgValue])

  const buttonHandler = (): void => {
    const newWord: WordDto = {
      id: data?.id ?? null,
      ru: ruValue as string,
      kg: kgValue as string,
      type,
      tags
    }

    saveWord(dispatch, newWord)

    if (!isEditMode) {
      setRuValue('')
      setKgValue('')
    }
  }

  return (
    <Space direction={'horizontal'} style={{ width: '100%' }}>
      <Input placeholder={'Русский'}
             value={ruValue}
             onChange={(e) => {
               setRuValue(e.target.value)
             }}/>
      <Input placeholder={'Кыргыский'}
             value={kgValue}
             onChange={(e) => {
               setKgValue(e.target.value)
             }}/>
      <Select placeholder={'Часть речи'} style={{ width: '170px' }}
              defaultValue={type}
              options={props.types}
              onChange={(e) => {
                setType(e)
              }}/>
      <Selector placeholder={'Категории'}
                mode={'multiple'}
                defaultOption={data?.tags.map(value => {
                  return { value: value.id, label: value.label }
                })}
                options={dicTags.map(value => {
                  return { value: value.id, label: value.label }
                })}
                selectedCallback={(options) => {
                  setTags(options.map(value => {
                    const result: TagDto = { id: value.value, value: value.value, label: value.label, color: null }
                    return result
                  }))
                }}
                minWidth={'170px'}
      />
      <Button type={'primary'} onClick={buttonHandler}
              disabled={buttonDisable}>{isEditMode ? 'Изменить' : 'Добавить'}</Button>
    </Space>
  )
}

export default WordEditor
