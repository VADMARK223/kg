/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useState } from 'react'
import { WordDto } from '../../../models/dto/WordDto'
import { DicDto } from '../../../models/dto/DicDto'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { Popover } from 'antd'
import { updateHymnState } from '../../../store/hymnSlice'

interface HymnWordProps {
  ru: string // Русский ключ для поиска в словаре
  kgMode?: boolean // Русское текущее слово или кыргызское
  display?: string // Как слово должно отображаться в тексте
}

const HymnWord = (props: HymnWordProps): JSX.Element => {
  const { ru, kgMode = false, display } = props
  const ruMode = !kgMode
  const dic: DicDto = useAppSelector(state => state.dic)
  const hymnState = useAppSelector(state => state.hymn)
  const dispatch = useAppDispatch()
  let highlight: boolean = false
  const [open, setOpen] = useState(false)

  if (hymnState.key != null) {
    // Если навели
    if (hymnState.isHovered) {
      // Если ключи совпадают
      if (hymnState.key === ru) {
        // Если режимы разные
        if (hymnState.ruMode !== ruMode) {
          highlight = true
        }
      }
    }
  }

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
    setOpen(true)
    dispatch(updateHymnState({ isHovered: true, key: ru, ruMode }))
  }

  const handlerMouseLeave = (): void => {
    setOpen(false)
    dispatch(updateHymnState({ isHovered: false, key: ru, ruMode }))
  }

  return (
    <Popover
      open={open}
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
