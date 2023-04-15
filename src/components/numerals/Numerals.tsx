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

// const MAX_TARGET_VALUE: number = 9999
const MAX_TARGET_VALUE: number = 10

const Numerals = (): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(generateRandomInteger(MAX_TARGET_VALUE))
  const [debug, setDebug] = useState<string>('-')
  const [rightAnswer, setRightAnswer] = useState<string>('-')
  const [answerState, setAnswerState] = useState<boolean | null>(null) // Состояние ответа: null - неизвестно, true - верно, false - неверно

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
    if (value === 1000000) {
      return 'миллион'
    }
    if (value === 1000000) {
      return 'миллиард'
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
      <p>
        Отладка: {debug}
      </p>
      <p>
        Правильный ответ: {rightAnswer}
      </p>
      <KgInput inputValueCallback={checkResultHandler}/>
      <AnswerStateIcon/>
    </Space>
  )
}

export default Numerals
