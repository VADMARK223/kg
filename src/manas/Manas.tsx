/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.06.2023
 */
import React, { useEffect } from 'react';
import { Space, Divider, Popover } from 'antd'
import { fetchDic } from '../api/dictionary'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { DicDto } from '../models/dto/DicDto'
import { WordDto } from '../models/dto/WordDto'

interface TranslateWordProps {
  ru?: string
  kg?: string
}

const Manas = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const dic: DicDto = useAppSelector(state => state.dic)

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

  const TranslateWord = (props: TranslateWordProps): JSX.Element => {
    const { ru, kg } = props

    let temp: WordDto | undefined
    if (ru !== undefined) {
      temp = dic.words.find(word => word.ru.toLowerCase() === ru.toLowerCase())
    } else if (kg !== undefined) {
      temp = dic.words.find(word => word.kg.toLowerCase() === kg.toLowerCase())
    }

    const content = () => (
      <>
        {ru !== undefined && <>{temp?.ru} - {temp?.kg}</>}
        {kg !== undefined && <>{temp?.kg} - {temp?.ru}</>}
      </>
    )

    return (
      <Popover content={content}>
        <span style={{ cursor: 'pointer' }}>
          <u>{ru !== undefined && <>{ru}</>}</u>
          <u>{kg !== undefined && <>{kg}</>}</u>
        </span>
      </Popover>
    )
  }

  return (
    <Space direction={'horizontal'}>
      <Space direction={'vertical'}>
        <span>
          Стояла глубокая <TranslateWord ru={'ночь'}/>.
        </span>
        <span>
          Аил, приютившийся у поворота реки, бал погружен в безмятежный сон.
        </span>
      </Space>
      <Divider type={'vertical'}/>
      <Space direction={'vertical'}>
        <span>
          <TranslateWord kg={'Тун'}/> жарымы болуп калаган.
        </span>
        <span>
          Тун жарымы болуп калаган.
        </span>
      </Space>
    </Space>
  )
}

export default Manas