/**
 * Компонент обучения числам
 *
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Button, InputNumber, Checkbox, Tooltip } from 'antd'
import { QuestionCircleTwoTone, CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'
import { generateRandomInteger, countDigitsInNumber } from '../../service/utils'
import NumberTag from './NumberTag'
import AnswerTag from './AnswerTag'
import type { NumberData } from './NumberData'

const SHOW_DEBUG: boolean = false
const MAX_TARGET_VALUE: number = 9999

const Numerals = (): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(generateRandomInteger(MAX_TARGET_VALUE))
  const [debug, setDebug] = useState<string>('-')
  const [rightAnswer, setRightAnswer] = useState<string>('-')
  const [answerState, setAnswerState] = useState<boolean | null>(null) // Состояние ответа: null - неизвестно, true - верно, false - неверно
  const [answerStateText, setAnswerStateText] = useState<string>('')
  const [answerTags, setAnswerTags] = useState<NumberData[]>([]) // Теги ответов
  const [showHint, setShowHint] = useState<boolean>(false)

  const convertNumberToString = (value: number): string | null => {
    if (value === 0) {
      return 'нөл'
    }
    if (value === 1) {
      return 'бир'
    }
    if (value === 2) {
      return 'эки'
    }
    if (value === 3) {
      return 'үч'
    }
    if (value === 4) {
      return 'төрт'
    }
    if (value === 5) {
      return 'беш'
    }
    if (value === 6) {
      return 'алты'
    }
    if (value === 7) {
      return 'жети'
    }
    if (value === 8) {
      return 'сегиз'
    }
    if (value === 9) {
      return 'тогуз'
    }
    if (value === 10) {
      return 'он'
    }
    if (value === 20) {
      return 'жыйырма'
    }
    if (value === 30) {
      return 'отуз'
    }
    if (value === 40) {
      return 'кырк'
    }
    if (value === 50) {
      return 'элүү'
    }
    if (value === 60) {
      return 'алтымыш'
    }
    if (value === 70) {
      return 'жетимиш'
    }
    if (value === 80) {
      return 'сексен'
    }
    if (value === 90) {
      return 'токсон'
    }
    return null
  }

  const convertNumberByCountDigits = (value: number): string | null => {
    if (value === 3) {
      return 'жүз'
    }
    if (value === 4) {
      return 'миң'
    }
    return null
  }

  const deepConvert = (value: number): string | null => {
    if (convertNumberToString(value) != null) {
      return convertNumberToString(value)
    } else {
      const cntDigits = countDigitsInNumber(value)
      return `${convertNumberToString(value / Math.pow(10, cntDigits - 1)) as string} ${convertNumberByCountDigits(cntDigits) as string}`
    }
  }

  useEffect(() => {
    const cnt = countDigitsInNumber(targetNumber)
    const resultNumber = []
    let newTargetNumber = targetNumber
    for (let i = 0; i < cnt; i++) {
      const current = newTargetNumber % 10 * Math.pow(10, i)
      if (current !== 0 || cnt === 1) {
        resultNumber.push(current)
      }

      newTargetNumber = Math.floor(newTargetNumber / 10)
    }
    setDebug(resultNumber.join(' '))
    setRightAnswer(resultNumber.reverse().map(value => {
      return deepConvert(value)
    }).join(' '))
    setAnswerState(null)
    setAnswerTags([])
  }, [targetNumber])

  useEffect(() => {
    if (answerState === null) {
      setAnswerStateText('Введите ответ кнопками ниже')
    } else if (answerState) {
      setAnswerStateText('Ответ верный')
    } else {
      setAnswerStateText(`Правильный ответ: ${rightAnswer}`)
    }
  }, [answerState])

  const generateHandler = (): void => {
    setTargetNumber(generateRandomInteger(MAX_TARGET_VALUE))
  }

  const AnswerStateIcon = (): JSX.Element => {
    if (answerState === null) {
      return (<QuestionCircleTwoTone twoToneColor={'orange'}/>)
    }

    if (answerState) {
      return (<CheckCircleTwoTone twoToneColor="#52c41a"/>)
    }

    return (<ExclamationCircleTwoTone twoToneColor={'red'}/>)
  }

  const addTag = (numberData: NumberData): void => {
    answerTags.push(numberData)
    setAnswerTags([...answerTags])
  }

  const removeTag = (data: NumberData): void => {
    answerTags.splice(answerTags.indexOf(data), 1)
    setAnswerTags([...answerTags])
  }

  const checkHandler = (): void => {
    const answerString = answerTags.map(value => value.label)
    setAnswerState(rightAnswer.toLowerCase() === answerString.join(' ').toLowerCase())
  }

  const initNumbersTags: NumberData[] = [
    { value: 0, label: 'нөл', color: '#87d068' },
    { value: 1, label: 'бир', color: '#87d068' },
    { value: 2, label: 'эки', color: '#87d068' },
    { value: 3, label: 'үч', color: '#87d068' },
    { value: 4, label: 'төрт', color: '#87d068' },
    { value: 5, label: 'беш', color: '#87d068' },
    { value: 6, label: 'алты', color: '#87d068' },
    { value: 7, label: 'жети', color: '#87d068' },
    { value: 8, label: 'сегиз', color: '#87d068' },
    { value: 9, label: 'тогуз', color: '#87d068' },
    { value: 10, label: 'он', color: '#87d068' },
    { value: 20, label: 'жыйырма', color: '#2db7f5' },
    { value: 30, label: 'отуз', color: '#2db7f5' },
    { value: 40, label: 'кырк', color: '#2db7f5' },
    { value: 50, label: 'элүү', color: '#2db7f5' },
    { value: 60, label: 'алтымыш', color: '#2db7f5' },
    { value: 70, label: 'жетимиш', color: '#2db7f5' },
    { value: 80, label: 'сексен', color: '#2db7f5' },
    { value: 90, label: 'токсон', color: '#2db7f5' },
    { value: 100, label: 'жүз', color: '#f50' },
    { value: 1000, label: 'миң', color: '#f50' }
  ]

  return (
    <Space direction={'vertical'}>
      <Space direction={'horizontal'}>
        <div>
          Переведите число:
        </div>
        <Space.Compact>
          <InputNumber<number> value={targetNumber}
                               min={0}
                               max={MAX_TARGET_VALUE}
                               onChange={(e) => {
                                 if (e != null) {
                                   setTargetNumber(e)
                                 }
                               }}/>
          <Button type={'primary'} onClick={generateHandler}>Генерировать</Button>
        </Space.Compact>
        <Space>
          <Tooltip title={'Показывать подсказку'}>
            <Checkbox checked={showHint}
                      onChange={() => {
                        setShowHint(!showHint)
                      }}/>
          </Tooltip>
          {showHint
            ? <>
              Правильный ответ: {rightAnswer}
            </>
            : <></>}
        </Space>
      </Space>
      {SHOW_DEBUG
        ? <p>
          Отладка: {debug}
        </p>
        : null}
      <hr/>
      <Space>
        {answerTags.map((value, index) => (<AnswerTag key={index} data={value} closeCallback={removeTag}/>))}
        <Button type={'primary'} onClick={checkHandler}>Проверить</Button>
        <AnswerStateIcon/>
        <p>
          {answerStateText}
        </p>
      </Space>
      <hr/>
      <Space size={1}>
        {initNumbersTags.map(value => (<NumberTag key={value.value} data={value} clickCallback={addTag}/>))}
      </Space>
    </Space>
  )
}

export default Numerals
