/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Button, Input, Space, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { addWord } from '../../api/dictionary'
import { WordDto } from '../../models/dto/WordDto'
import { TagDto } from '../../models/dto/TagDto'

interface AddWordProps {
  tags: TagDto[]
}

const AddWord = (props: AddWordProps): JSX.Element => {
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState('')
  const [kgValue, setKgValue] = useState('')
  const [tag, setTag] = useState(0)
  const [addButtonDisable, setAddButtonDisable] = useState(true)
  const addWordHandler = () => {
    const newWord: WordDto = {
      ru: ruValue,
      kg: kgValue,
      tags: tag
    }
    addWord(dispatch, newWord)

    setRuValue('')
    setKgValue('')
  }

  useEffect(() => {
    setAddButtonDisable(ruValue === '' || kgValue === '')
  }, [ruValue, kgValue])

  return (
    <Space direction={'horizontal'}>
      <Input placeholder={'Русский'} value={ruValue} onChange={(e) => setRuValue(e.target.value)}/>
      <Input placeholder={'Кыргыский'} value={kgValue} onChange={(e) => setKgValue(e.target.value)}/>
      <Select style={{ width: 200 }} options={props.tags} defaultValue={0} onChange={(e) => setTag(e)}/>
      <Button type={'primary'} onClick={addWordHandler} disabled={addButtonDisable}>Добавить слово</Button>
    </Space>
  )
}

export default AddWord
