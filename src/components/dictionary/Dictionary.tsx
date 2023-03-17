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
import Generator from '../genegeator/Generator'

const Dictionary = (): JSX.Element => {
  const items: DictionaryData[] = data.words
  const [direction, setDirection] = useState(true)

  const directionHandler = (): void => {
    setDirection(!direction)
  }
  const compareFunction = (a: DictionaryData, b: DictionaryData): number => {
    return a.ru.localeCompare(b.ru)
  }

  return (
    <>
      <Generator/>
      <p>Всего слов: {items?.length}</p>
      <Button type={'primary'} onClick={directionHandler}>Обратный перевод</Button>
      {items.sort(compareFunction).map((item, index) => {
        const current = items[index]
        const prev = items[index - 1]
        const needShowSymbol = prev === undefined || current.ru.charCodeAt(0) !== prev.ru.charCodeAt(0)
        const firstSymbol = item.ru.substring(0, 1)
        if (needShowSymbol) {
          return <div key={firstSymbol.charCodeAt(0)}>
            <h4>{firstSymbol}</h4>
            <Word data={item} direction={direction}/>
          </div>
        } else {
          return <Word key={index} data={item} direction={direction}/>
        }
      })}
    </>
  )
}

export default Dictionary
