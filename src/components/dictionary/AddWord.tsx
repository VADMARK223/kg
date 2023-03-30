/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import React from 'react'
import { addWord } from '../../api/dictionary'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'

const AddWord = (): JSX.Element => {
  const dispatch = useDispatch()
  const addWordHandler = () => {
    addWord(dispatch)
  }
  return (
    <div>
      <Button type={'primary'} onClick={addWordHandler}>Добавить слово</Button>
    </div>
  )
}

export default AddWord
