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
  display?: string // Как слово должно отображаться в тексте
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

  const foundWord: WordDto | undefined = dic.words.find(word => word.ru.toLowerCase() === ru.toLowerCase())

  let translate: undefined | string
  if (foundWord !== undefined) {
    if (ruMode) {
      translate = foundWord.ru
    } else {
      translate = foundWord.kg
    }
  }

  const errorMessage: string = `Слово не найдено "${ru}"`

  const tooltip = (): JSX.Element => {
    if (foundWord === undefined) {
      return (<>{errorMessage}</>)
    }

    if (ruMode) {
      return (<>{foundWord?.ru} - {foundWord?.kg}</>)
    } else {
      return (<>{foundWord?.kg} - {foundWord?.ru}</>)
    }
  }

  const style: React.CSSProperties = {
    cursor: 'pointer',
    color: foundWord === undefined ? 'red' : highlight ? 'red' : 'green'
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
