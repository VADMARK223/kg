/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React from 'react'
import { WordDto } from '../../../models/dto/WordDto'
import { DicDto } from '../../../models/dto/DicDto'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { updateHymnState } from '../../../store/hymnSlice'
import { Popover } from 'antd'

interface HymnWordProps {
  ru?: string // Русский ключ для поиска
  kg?: string // Кыргызский ключ для поиска
  display?: string // Как слово должно отображаться в тексте
}

const HymnWord = (props: HymnWordProps): JSX.Element => {
  const { ru, kg, display } = props
  const dic: DicDto = useAppSelector(state => state.dic)
  const hymnState = useAppSelector(state => state.hymn)
  const dispatch = useAppDispatch()

  if (ru === undefined && kg === undefined) {
    throw new Error('Ru and kg null.')
  }

  const key = ru !== undefined ? ru : kg as string
  const ruMode: boolean = ru !== undefined

  if (hymnState.key != null) {
    console.log('hymnState', hymnState)
  }

  let foundWord: WordDto | undefined
  if (ruMode) {
    foundWord = dic.words.find(word => word.ru.toLowerCase() === (ru as string).toLowerCase())
  } else {
    foundWord = dic.words.find(word => word.kg.toLowerCase() === (kg as string).toLowerCase())
  }

  const tooltip = (): JSX.Element => {
    if (foundWord === undefined) {
      return (<>Слово не найдено</>)
    }

    if (ruMode) {
      return (<>{foundWord?.ru} - {foundWord?.kg}</>)
    } else {
      return (<>{foundWord?.kg} - {foundWord?.ru}</>)
    }
  }

  const style: React.CSSProperties = {
    cursor: 'pointer',
    color: foundWord === undefined ? 'red' : 'green'
  }

  const Text = (): JSX.Element => {
    if (display !== undefined) {
      return (<u>{display}</u>)
    }

    if (ruMode) {
      return (<u>{ru}</u>)
    } else {
      return (<u>{kg}</u>)
    }
  }

  const handlerMouseEnter = (): void => {
    dispatch(updateHymnState({ isHovered: true, key, ruMode }))
  }

  const handlerMouseLeave = (): void => {
    dispatch(updateHymnState({ isHovered: false, key, ruMode }))
  }

  return (
    <Popover content={tooltip}>
        <span style={style}
              onMouseEnter={handlerMouseEnter}
              onMouseLeave={handlerMouseLeave}
        >
          <Text/>
        </span>
    </Popover>
  )
}

export default HymnWord
