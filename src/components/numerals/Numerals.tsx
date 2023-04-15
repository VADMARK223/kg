/**
 * Компонент обучения числам
 *
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Button, InputNumber } from 'antd'
import KgInput from '../common/KgInput'
import { QuestionCircleTwoTone, CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'
import { generateRandomInteger } from '../../service/utils'
import NumberTag from './NumberTag'
import AnswerTag from './AnswerTag'
import type { NumberData } from './NumberData'

const SHOW_DEBUG: boolean = false
const SHOW_RIGHT_ANSWER: boolean = false
// const MAX_TARGET_VALUE: number = 9999
const MAX_TARGET_VALUE: number = 100

const Numerals = (): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(generateRandomInteger(MAX_TARGET_VALUE))
  const [debug, setDebug] = useState<string>('-')
  const [rightAnswer, setRightAnswer] = useState<string>('-')
  const [answerState, setAnswerState] = useState<boolean | null>(null) // Состояние ответа: null - неизвестно, true - верно, false - неверно
  const [answerStateText, setAnswerStateText] = useState<string>('')

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

  const countDigits = (value: number): number => String(value).length

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
      const cntDigits = countDigits(value)
      return `${convertNumberToString(value / Math.pow(10, cntDigits - 1)) as string} ${convertNumberByCountDigits(cntDigits) as string}`
    }
  }

  useEffect(() => {
    const cnt = countDigits(targetNumber)
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
  }, [targetNumber])

  useEffect(() => {
    if (answerState === null) {
      setAnswerStateText('Введите ответ для проверки')
    } else if (answerState) {
      setAnswerStateText('Ответ верный')
    } else {
      setAnswerStateText(`Правильный ответ: ${rightAnswer}`)
    }
  }, [answerState])

  const checkResultHandler = (answerString: string): void => {
    setAnswerState(rightAnswer.toLowerCase() === answerString.toLowerCase())
  }

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

  const [answerTags, setAnswerTags] = useState<NumberData[]>([])
  const addTag = (numberData: NumberData): void => {
    answerTags.push(numberData)
    setAnswerTags([...answerTags])
  }

  const removeTag = (data: NumberData): void => {
    answerTags.splice(answerTags.indexOf(data), 1)
    // delete answerTags[answerTags.indexOf(data)]
    // setAnswerTags(answerTags)
  }

  const checkHandler = (): void => {
    console.log('answerTags', answerTags)
    const answerString = answerTags.map(value => value.label)
    console.log('answerString', answerString)
    setAnswerState(rightAnswer.toLowerCase() === answerString.join(' ').toLowerCase())
  }

  const initNumbersTags: NumberData[] = [
    { value: 0, label: 'нөл' },
    { value: 1, label: 'бир' },
    { value: 2, label: 'эки' },
    { value: 4, label: 'төрт' },
    { value: 5, label: 'беш' },
    { value: 6, label: 'алты' },
    { value: 7, label: 'жети' },
    { value: 8, label: 'сегиз' },
    { value: 9, label: 'тогуз' },
    { value: 10, label: 'он' },
    { value: 20, label: 'жыйырма' },
    { value: 30, label: 'отуз' },
    { value: 40, label: 'кырк' },
    { value: 50, label: 'элүү' },
    { value: 60, label: 'алтымыш' },
    { value: 70, label: 'жетимиш' },
    { value: 80, label: 'сексен' },
    { value: 90, label: 'токсон' },
    { value: 100, label: 'жүз' },
    { value: 1000, label: 'миң' }
  ]

  return (
    <Space direction={'vertical'}>
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
      {SHOW_DEBUG
        ? <p>
          Отладка: {debug}
        </p>
        : null}
      {SHOW_RIGHT_ANSWER
        ? <p>
          Правильный ответ: {rightAnswer}
        </p>
        : null}
      <hr/>
      <Space>
        {answerTags.map((value, index) => (<AnswerTag key={index} data={value} closeCallback={removeTag}/>))}
        <Button type={'primary'} onClick={checkHandler}>Проверить</Button>
      </Space>
      <hr/>
      <Space size={2}>
        {initNumbersTags.map(value => (<NumberTag key={value.value} data={value} clickCallback={addTag}/>))}
      </Space>
      <Space direction={'horizontal'}>
        <KgInput inputValueCallback={checkResultHandler}/>
        <AnswerStateIcon/>
        <p>
          {answerStateText}
        </p>
      </Space>
    </Space>
  )
}

export default Numerals
