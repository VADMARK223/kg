/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useEffect, useState } from 'react'
import { WordDto } from '../../../models/dto/WordDto'
import { DicDto } from '../../../models/dto/DicDto'
import { useAppSelector } from '../../../store/hooks'
import { Popover } from 'antd'
import { eventManager, Event, EventData } from './eventManager'

interface HymnWordProps {
  ru: string // Русский ключ для поиска в словаре
  kgMode?: boolean // Русское текущее слово или кыргызское
  display: string // Как слово должно отображаться в тексте
}

const HymnWord = (props: HymnWordProps): JSX.Element => {
  const { ru, kgMode = false, display } = props
  const ruMode = !kgMode
  const dic: DicDto = useAppSelector(state => state.dic)
  const [highlight, setHighlight] = useState<boolean>(false)

  useEffect(() => {
    eventManager.on(Event.Highlight, (data: EventData) => {
      if (data.ru === ru && data.ruMode !== ruMode) {
        setHighlight(true)
      }
    })

    eventManager.on(Event.Clear, (data: EventData) => {
      if (data.ru === ru && data.ruMode !== ruMode) {
        setHighlight(false)
      }
    })
  }, [])

  const foundWords: WordDto[] = dic.words.filter(word => word.ru.toLowerCase() === ru.toLowerCase())

  let translate: undefined | string
  if (foundWords.length !== 0) {
    if (ruMode) {
      translate = foundWords[0].ru
    } else {
      translate = foundWords[0].kg
    }
  }

  const errorMessage: string = `Слово не найдено "${ru}"`

  const tooltip = (): JSX.Element => {
    if (foundWords.length === 0) {
      return (<>{errorMessage}</>)
    }

    const ruWord: string = foundWords[0].ru
    const kgWord: string = foundWords.length === 1 ? foundWords[0].kg : foundWords.map(value => value.kg).join(', ')

    if (ruMode) {
      return (<>{ruWord} - {kgWord}</>)
    } else {
      return (<>{kgWord} - {ruWord}</>)
    }
  }

  const style: React.CSSProperties = {
    cursor: 'pointer',
    color: foundWords.length === 0 ? 'red' : highlight ? 'red' : 'green'
  }

  const Text = (): JSX.Element => {
    if (display !== undefined) {
      return (<u>{display}</u>)
    }

    if (translate === undefined) {
      return (<u>{errorMessage}</u>)
    }

    return (<u>{translate.toLowerCase()}</u>)
  }

  const handlerStartAction = (): void => {
    eventManager.emit(Event.Highlight, { ru, ruMode })
  }

  const handlerMouseLeave = (): void => {
    eventManager.emit(Event.Clear, { ru, ruMode })
  }

  return (
    <Popover
      content={tooltip}
    >
        <span style={style}
              onMouseEnter={handlerStartAction}
              onMouseLeave={handlerMouseLeave}
        >
          <Text/>
        </span>
    </Popover>
  )
}

export default HymnWord
