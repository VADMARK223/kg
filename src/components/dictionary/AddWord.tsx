/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Button, Input, Space, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { TagDto } from '../../models/dto/TagDto'
import { WordDto } from '../../models/dto/WordDto'
import { addWord } from '../../api/dictionary'

interface AddWordProps {
  tags: TagDto[]
}

const AddWord = (props: AddWordProps): JSX.Element => {
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState('')
  const [kgValue, setKgValue] = useState('')
  const [tags, setTags] = useState<number | number[]>([0])
  const [addButtonDisable, setAddButtonDisable] = useState(true)
  const addWordHandler = (): void => {
    console.log('tag:', tags)
    const newWord: WordDto = {
      ru: ruValue,
      kg: kgValue,
      tags: tags
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
      <Input placeholder={'Русский'} value={ruValue} onChange={(e) => setRuValue(e.target.value)}/>
      <Input placeholder={'Кыргыский'} value={kgValue} onChange={(e) => setKgValue(e.target.value)}/>
      <Select placeholder={'Категории'} style={{ width: '100%', minWidth: '300px' }} options={props.tags}
              mode={'multiple'} defaultValue={0} onChange={(e) => setTags(e)}/>
      <Button type={'primary'} onClick={addWordHandler} disabled={addButtonDisable}>Добавить слово</Button>
    </Space>
  )
}

export default AddWord
