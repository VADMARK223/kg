/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Button, Input, Space, Select } from 'antd'
import { useDispatch } from 'react-redux'
import type { TagDto } from '../../models/dto/TagDto'
import type { WordDto } from '../../models/dto/WordDto'
import { addWord } from '../../api/dictionary'
import type { TypeDto } from '../../models/dto/TypeDto'

interface AddWordProps {
  tags: null | TagDto[]
  types: TypeDto[]
}

const AddWord = (props: AddWordProps): JSX.Element => {
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState('')
  const [kgValue, setKgValue] = useState('')
  const [tags, setTags] = useState<number | number[]>([0])
  const [type, setType] = useState<number>(0)
  const [addButtonDisable, setAddButtonDisable] = useState(true)
  const addWordHandler = (): void => {
    const newWord: WordDto = {
      ru: ruValue,
      kg: kgValue,
      tags,
      type
    }
    addWord(dispatch, newWord)

    setRuValue('')
    setKgValue('')
  }

  useEffect(() => {
    const currentTags: number[] = tags as number[]
    setAddButtonDisable(ruValue === '' || kgValue === '' || currentTags.length === 0)
  }, [ruValue, kgValue, tags])

  return (
    <Space direction={'horizontal'} style={{ width: '100%' }}>
      <Input placeholder={'Русский'} value={ruValue} onChange={(e) => { setRuValue(e.target.value) }}/>
      <Input placeholder={'Кыргыский'} value={kgValue} onChange={(e) => { setKgValue(e.target.value) }}/>
      {/* <Select placeholder={'Категории'} style={{ width: '100%', minWidth: '300px' }} options={props.tags}
              mode={'multiple'} defaultValue={0} onChange={(e) => setTags(e)}/> */}
      <Select placeholder={'Часть речи'} style={{ width: '170px' }} defaultValue={type} options={props.types}
              onChange={(e) => { setType(e) }}/>
      <Button type={'primary'} onClick={addWordHandler} disabled={addButtonDisable}>Добавить слово</Button>
    </Space>
  )
}

export default AddWord
