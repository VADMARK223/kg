/**
 * Компонент элемента тестирования вопросительного аффикса
 *
 * @author Markitanov Vadim
 * @since 21.06.2023
 */
import React, { useEffect, useState } from 'react'
import Letter from '../../../common/Letter'
import { Checkbox, Space, Tooltip } from 'antd'
import { CheckCircleTwoTone, ExclamationCircleTwoTone, QuestionCircleTwoTone } from '@ant-design/icons'
import KgInput from '../../../common/KgInput'
import { isVoicedConsonant, isVowelLetter } from '../../../../service/utils'

interface QuestionAffixPracticeItemProps {
  word: string
}

const QuestionAffixPracticeItem = (props: QuestionAffixPracticeItemProps): JSX.Element => {
  const { word } = props
  const valueState = useState('')
  const wordArray = word.split('')
  const [answerState, setAnswerState] = useState<boolean | null>(null) // Состояние ответа: null - неизвестно, true - верно, false - неверно
  const [showHint, setShowHint] = useState<boolean>(false)

  const getLastVowelLetter = (): string => {
    let result: string = '-'
    for (let i = wordArray.length - 1; i >= 0; i--) {
      if (isVowelLetter(wordArray[i])) {
        result = wordArray[i]
        break
      }
    }
    return result
  }
  // Последняя гласная буква корня
  const lastVowelLetter: string = getLastVowelLetter()
  // Последняя буква слова
  const lastLetter = wordArray[wordArray.length - 1]

  let rightAffix = '-'
  if (lastVowelLetter === 'а' || lastVowelLetter === 'я' || lastVowelLetter === 'ы') {
    if (isVowelLetter(lastLetter) || isVoicedConsonant(lastLetter)) {
      rightAffix = 'бы'
    } else {
      rightAffix = 'пы'
    }
  } else if (lastVowelLetter === 'э' || lastVowelLetter === 'е' || lastVowelLetter === 'и') {
    if (isVowelLetter(lastLetter) || isVoicedConsonant(lastLetter)) {
      rightAffix = 'би'
    } else {
      rightAffix = 'пи'
    }
  } else if (lastVowelLetter === 'ө' || lastVowelLetter === 'ү') {
    if (isVowelLetter(lastLetter) || isVoicedConsonant(lastLetter)) {
      rightAffix = 'бү'
    } else {
      rightAffix = 'пү'
    }
  } else if (lastVowelLetter === 'о' || lastVowelLetter === 'ё' || lastVowelLetter === 'у' || lastVowelLetter === 'ю') {
    if (isVowelLetter(lastLetter) || isVoicedConsonant(lastLetter)) {
      rightAffix = 'бу'
    } else {
      rightAffix = 'пу'
    }
  }

  useEffect(() => {
    if (valueState[0] !== '') {
      setAnswerState(valueState[0].toLowerCase() === rightAffix.toLowerCase())
    } else {
      setAnswerState(null)
    }
  }, [valueState[0]])

  const AnswerStateIcon = (): JSX.Element => {
    if (answerState === null) {
      return (<Tooltip title={'Введите аффикс'}><QuestionCircleTwoTone twoToneColor={'orange'}/></Tooltip>)
    }

    if (answerState) {
      return (<Tooltip title={'Ответ верный'}><CheckCircleTwoTone twoToneColor="#52c41a"/></Tooltip>)
    }

    return (<Tooltip title={'Ответ неверный'}><ExclamationCircleTwoTone twoToneColor={'red'}/></Tooltip>)
  }

  return (
    <Space>
      <div style={{ minWidth: '50px' }}>
        {word}
      </div>
      <KgInput valueState={valueState}
               placeholder={'Впишите аффикс множественного числа'}
               width={'80px'}
      />
      <AnswerStateIcon/>
      <Tooltip title={'Показывать подсказку'}>
        <Checkbox checked={showHint}
                  onChange={() => {
                    setShowHint(!showHint)
                  }}/>
      </Tooltip>
      {showHint && <>
          <b>{rightAffix}</b>Последняя гласная буква корня: <Letter value={lastVowelLetter}/>
          Последняя буква слова: <Letter value={lastLetter}/>
      </>}
    </Space>
  )
}

export default QuestionAffixPracticeItem
