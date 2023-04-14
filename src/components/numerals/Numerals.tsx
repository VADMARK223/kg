/**
 * Компонент обучения числам
 *
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Button, InputNumber } from 'antd'
import KgInput from '../common/KgInput'

const Numerals = (): JSX.Element => {
  const [targetNumber, setTargetNumber] = useState<number>(101)
  const [debug, setDebug] = useState<string>('-')
  const [rightAnswer, setRightAnswer] = useState<string>('-')

  const convertNumberToString = (value: number): string => {
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
    if (value === 100) {
      return 'жүз'
    }
    if (value === 1000) {
      return 'миң'
    }
    if (value === 1000000) {
      return 'миллион'
    }
    if (value === 1000000) {
      return 'миллиард'
    }
    return 'unknown'
  }

  useEffect(() => {
    const numbersArray = String(targetNumber).split('').map(Number)
    let result: string = ''
    const resultNumber = []
    for (let i = numbersArray.length - 1; i >= 0; i--) {
      result += '|' + convertNumberToString(numbersArray[i])
      let zero = '1'
      for (let j = 0; j < numbersArray.length - i - 1; j++) {
        zero += '0'
      }
      const temp: number = Number(zero) * Math.floor(numbersArray[i] * 10 / 10)
      if (temp !== 0) {
        resultNumber.push(temp)
      }
      result += ' ' + temp
    }
    setDebug(result)
    setRightAnswer(resultNumber.reverse().map(value => convertNumberToString(value)).join(' '))
  }, [targetNumber])

  const checkResultHandler = (answerString: string): void => {
    const targetString: string = convertNumberToString(targetNumber)
    console.log('Целевое число: ', targetString)
    console.log('Введенное число: ', answerString)
    if (targetString === answerString) {
      console.log('GOOD')
    } else {
      console.log('BAD')
    }
  }

  return (
    <Space direction={'vertical'}>
      <Space.Compact>
        <InputNumber<number> value={targetNumber}
                             min={0}
                             onChange={(e) => {
                               if (e != null) {
                                 setTargetNumber(e)
                               }
                             }}/>
        <Button type={'primary'}>Генерировать</Button>
      </Space.Compact>
      <p>
        Отладка: {debug}
      </p>
      <p>
        Правильный ответ: {rightAnswer}
      </p>
      <KgInput inputValueCallback={checkResultHandler}/>
    </Space>
  )
}

export default Numerals
