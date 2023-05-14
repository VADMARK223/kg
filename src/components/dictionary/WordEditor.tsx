/**
 * Компонент для добавления или редактирования слов
 *
 * @author Markitanov Vadim
 * @since 06.04.2023
 */
import React, { useState, useEffect, useRef } from 'react'
import type { WordDto } from '../../models/dto/WordDto'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Select, Button, Space } from 'antd'
import { saveWord } from '../../api/dictionary'
import type { TagDto } from '../../models/dto/TagDto'
import Selector from '../common/Selector'
import type { DicDto } from '../../models/dto/DicDto'
import KgInput from '../common/KgInput'
import { useHotkeys } from 'react-hotkeys-hook'

const CTRL_ENTER_HOT_KEY: string = 'Ctrl + Enter'

interface WordEditorProps {
  data: WordDto | null
  cancelCallback: () => void
}

const WordEditor = (props: WordEditorProps): JSX.Element => {
  const dicData = useSelector((state: any): DicDto => state.dic)
  const data = props.data
  const isEditMode = data !== null
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState(data?.ru)
  const kgState = useState<string>(data?.kg ?? '')
  const kgValue = kgState[0]
  const setKgValue = kgState[1]
  const [type, setType] = useState<number>(data?.type ?? 0)
  const [tags, setTags] = useState<TagDto[]>(data?.tags ?? [])
  const [buttonDisable, setButtonDisable] = useState(true)
  useEffect(() => {
    setRuValue(data?.ru)
    kgState[1](data?.kg ?? '')
    setType(data?.type ?? 0)
    setTags(data?.tags ?? [])
  }, [data])
  const ruInputRef = useRef<any>()

  useHotkeys(CTRL_ENTER_HOT_KEY, (event) => {
    if (isEditMode) {
      return
    }
    if (!buttonDisable) {
      buttonHandler()
    }
    event.preventDefault()
  }, {
    enableOnFormTags: ['input', 'INPUT', 'SELECT', 'select']
  })

  useEffect(() => {
    setButtonDisable(ruValue === undefined || ruValue === '' || kgValue === '')
  }, [ruValue, kgValue])

  const buttonHandler = (): void => {
    const newWord: WordDto = {
      id: data?.id ?? null,
      ru: ruValue as string,
      kg: kgValue,
      type,
      tags
    }

    saveWord(dispatch, newWord)

    if (!isEditMode) {
      setRuValue('')
      setKgValue('')
    }
    if (isEditMode) {
      props.cancelCallback()
    }

    ruInputRef.current.focus()
  }

  const cancelHandler = (): void => {
    props.cancelCallback()
  }

  return (
    <Space direction={'horizontal'} style={{ width: '100%' }}>
      <Input placeholder={'Русский'}
             ref={ruInputRef}
             value={ruValue}
             allowClear
             onChange={(e) => {
               setRuValue(e.target.value)
             }}/>
      <KgInput valueState={kgState}/>
      <Select placeholder={'Часть речи'} style={{ width: '170px' }}
              value={type}
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
      {isEditMode && <Button onClick={cancelHandler}>Отмена</Button>}
    </Space>
  )
}

export default WordEditor
