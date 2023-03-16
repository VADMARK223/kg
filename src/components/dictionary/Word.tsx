/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
import React from 'react'
import type { DictionaryData } from '../../models/DictionaryData'

interface WordProps {
  data: DictionaryData
  direction: boolean
}

const Word = (props: WordProps): JSX.Element => {
  return (
    <>
      {props.direction
        ? <div>
          {props.data.kg} - {props.data.ru}
        </div>
        : <div>{props.data.ru} - {props.data.kg}</div>}
    </>
  )
}

export default Word
