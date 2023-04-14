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
    if (value === 100) {
      return 'жүз'
    }

    // if (value === 200) {
    //   return 'эки жүз'
    // }

    if (value === 1000) {
      return 'миң'
    }
    if (value === 1000000) {
      return 'миллион'
    }
    if (value === 1000000) {
      return 'миллиард'
    }
    return null
  }

  const tempConvert = (value: number, dig: boolean) => {
    if (convertNumberToString(value) != null) {
      return convertNumberToString(value)
    } else {
      let zero = '1'
      for (let j = 0; j < value.toString().length - 1; j++) {
        zero += '0'
      }
      const temp = value / Number(zero)
      return convertNumberToString(temp) + ' ' + convertNumberToString(Number(zero))
    }
  }

  const countDigits = (value: number): number => {
    let i = 0
    for (i; value >= 1; i++) {
      value /= 10
    }
    return i
  }

  useEffect(() => {
    const cnt = countDigits(targetNumber)
    const resultNumber = []
    let newTargetNumber = targetNumber
    for (let i = 0; i < cnt; i++) {
      const current = newTargetNumber % 10 * Math.pow(10, i)
      if (current !== 0) {
        resultNumber.push(current)
      }

      newTargetNumber = Math.floor(newTargetNumber / 10)
    }
    setDebug(resultNumber.join(' '))
    const dig = targetNumber / Math.pow(10, cnt - 1)
    console.log('DIG', dig)
    setRightAnswer(resultNumber.reverse().map(value => tempConvert(value, dig === 1)).join(' '))
  }, [targetNumber])

  const checkResultHandler = (answerString: string): void => {
    // const targetString: string = convertNumberToString(targetNumber)
    // console.log('Целевое число: ', targetString)
    // console.log('Введенное число: ', answerString)
    // if (targetString === answerString) {
    //   console.log('GOOD')
    // } else {
    //   console.log('BAD')
    // }
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
