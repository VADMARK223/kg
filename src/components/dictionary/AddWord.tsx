/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import React, { useState } from 'react'
import { Button, Input, Space } from 'antd'
import { useDispatch } from 'react-redux'
import { addWord } from '../../api/dictionary'
import { WordDto } from '../../models/dto/WordDto'

const AddWord = (): JSX.Element => {
  const dispatch = useDispatch()
  const [ruValue, setRuValue] = useState('')
  const [kgValue, setKgValue] = useState('')
  const addWordHandler = () => {
    if (ruValue === '' && kgValue === '') {
      console.log('Empty!')
      const newWord: WordDto = {
        ru: 'Вадим',
        kg: 'Vadim'
      }
      addWord(dispatch, newWord)
    } else {
      console.log('ruVa:', ruValue)
      console.log('лпVa:', kgValue)
      const newWord: WordDto = {
        ru: ruValue,
        kg: kgValue
      }
      addWord(dispatch, newWord)
    }
  }
  return (
    <Space direction={'horizontal'}>
      <Input placeholder={'Русский'} onChange={(e) => setRuValue(e.target.value)}/>
      <Input placeholder={'Кыргыский'} onChange={(e) => setKgValue(e.target.value)}/>
      <Button type={'primary'} onClick={addWordHandler}>Добавить слово</Button>
    </Space>
  )
}

export default AddWord
