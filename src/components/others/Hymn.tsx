/**
 * Компонент гимна Кыргызского языка
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { DicDto } from '../../models/dto/DicDto'
import { fetchDic } from '../../api/dictionary'
import { WordDto } from '../../models/dto/WordDto'
import { Popover, Space, Divider } from 'antd'

interface TranslateWordProps {
  ru?: string // Русский ключ для поиска
  kg?: string // Кыргызский ключ для поиска
  display?: string // Как слово должно отображаться в тексте
}

const Hymn = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const dic: DicDto = useAppSelector(state => state.dic)

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

  const TranslateWord = (props: TranslateWordProps): JSX.Element => {
    const { ru, kg, display } = props

    if (ru === undefined && kg === undefined) {
      throw new Error('Ru and kg null.')
    }

    const ruMode: boolean = ru !== undefined

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

    return (
      <Popover content={tooltip}>
        <span style={style}>
          <Text/>
        </span>
      </Popover>
    )
  }

  return (
    <Space direction={'horizontal'}>
      <Space direction={'vertical'}>
        <span>
          В <TranslateWord ru={'ночь'} display={'ночи'}/> Стояла <TranslateWord ru={'ночь'}/> глубокая <TranslateWord ru={'bad'}/>.
        </span>
        <span>
          22
        </span>
      </Space>
      <Divider type={'vertical'}/>
      <Space direction={'vertical'}>
        <span>
          <TranslateWord kg={'Тун'}/> жарымы болуп калаган.
        </span>
        <span>
          33
        </span>
      </Space>
    </Space>
  )
}

export default Hymn
