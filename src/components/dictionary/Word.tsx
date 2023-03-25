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
  const data = props.data
  return (
    <>
      {props.direction
        ? <div>
          {data.ru} - {data.kg} {data.tags !== undefined ? <>Категории: {data.tags}</> : null}
        </div>
        : <div>
          {data.kg} - {data.ru} {data.tags !== undefined ? <>Категории: {data.tags}</> : null}
        </div>}
    </>
  )
}

export default Word
