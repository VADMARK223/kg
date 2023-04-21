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
import { saveWord } from '../../api/dictionary'
import type { TagDto } from '../../models/dto/TagDto'
import Selector from '../common/Selector'
import type { DicDto } from '../../models/dto/DicDto'
import KgInput from '../common/KgInput'

interface WordEditorProps {
  data?: WordDto
  closeCallback?: () => void
}

const WordEditor = (props: WordEditorProps): JSX.Element => {
  const dicData = useSelector((state: any): DicDto => state.dic)
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

    if (props.closeCallback !== undefined) {
      props.closeCallback()
    }
  }

  return (
    <Space direction={'horizontal'} style={{ width: '100%' }}>
      <Input placeholder={'Русский'}
             value={ruValue}
             allowClear
             onChange={(e) => {
               setRuValue(e.target.value)
             }}/>
      <KgInput value={kgValue} onChange={(value) => {
        setKgValue(value)
      }}/>
      <Select placeholder={'Часть речи'} style={{ width: '170px' }}
              defaultValue={type}
              options={dicData.types}
              onChange={(e) => {
                setType(e)
              }}/>
      <Selector placeholder={'Категории'}
                mode={'multiple'}
                defaultOption={data?.tags.map(value => {
                  return { value: value.value, label: value.label }
                })}
                options={dicData.tags}
                selectedCallback={(options) => {
                  setTags(options.map(value => {
                    const result: TagDto = { value: value.value, label: value.label, color: null }
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
