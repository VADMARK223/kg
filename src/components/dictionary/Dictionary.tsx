/**
 * Компонент словаря
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState } from 'react'
import data from '../../assets/dictionary.json'
import type { DictionaryData } from '../../models/DictionaryData'
import Word from './Word'
import { Button } from 'antd'

const Dictionary = (): JSX.Element => {
  const items: DictionaryData[] = data.words
  const [direction, setDirection] = useState(true)
  const directionHandler = (): void => {
    console.log('Chnage')
    setDirection(!direction)
  }

  return (
    <>
      <p>Всего слов: {items?.length}</p>
      <Button type={'primary'} onClick={directionHandler}>Обратный перевод</Button>
      {items.map((item, index) => {
        return <Word key={index} data={item} direction={direction}/>
      })}
    </>
  )
}

export default Dictionary
