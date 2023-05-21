/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 22.05.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Checkbox, Tooltip } from 'antd'
import KgInput from '../common/KgInput'
import Letter, { VOWELS, VOICED_CONSONANTS, VOICELESS_CONSONANTS } from '../common/Letter'
import { QuestionCircleTwoTone, CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'

interface MultiplicityAffixPracticeProps {
  word: string
}

const MultiplicityAffixPractice = (props: MultiplicityAffixPracticeProps): JSX.Element => {
  const { word } = props
  const valueState = useState('')
  const wordArray = word.split('')
  const [answerState, setAnswerState] = useState<boolean | null>(null) // Состояние ответа: null - неизвестно, true - верно, false - неверно
  const [showHint, setShowHint] = useState<boolean>(false)

  const isVowels = (value: string): boolean => {
    return VOWELS.includes(value)
  }

  const isVoicedConsonants = (value: string): boolean => {
    return VOICED_CONSONANTS.includes(value)
  }

  const isVoicelessConsonants = (value: string): boolean => {
    return VOICELESS_CONSONANTS.includes(value)
  }

  const getLastVowelLetter = (): string => {
    let result: string = '-'
    for (let i = wordArray.length - 1; i >= 0; i--) {
      if (isVowels(wordArray[i]) && i !== wordArray.length - 1) {
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
    if (isVowels(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лар'
    } else if (isVoicedConsonants(lastLetter)) {
      rightAffix = 'дар'
    } else if (isVoicelessConsonants(lastLetter)) {
      rightAffix = 'тар'
    }
  } else if (lastVowelLetter === 'э' || lastVowelLetter === 'е' || lastVowelLetter === 'и') {
    if (isVowels(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лер'
    } else if (isVoicedConsonants(lastLetter)) {
      rightAffix = 'дер'
    } else if (isVoicelessConsonants(lastLetter)) {
      rightAffix = 'тер'
    }
  } else if (lastVowelLetter === 'ө' || lastVowelLetter === 'ү') {
    if (isVowels(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лөр'
    } else if (isVoicedConsonants(lastLetter)) {
      rightAffix = 'дөр'
    } else if (isVoicelessConsonants(lastLetter)) {
      rightAffix = 'төр'
    }
  } else if (lastVowelLetter === 'о' || lastVowelLetter === 'ё' || lastVowelLetter === 'у' || lastVowelLetter === 'ю') {
    if (lastVowelLetter === 'о' || lastVowelLetter === 'ё') {
      if (isVowels(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
        rightAffix = 'лор'
      } else if (isVoicedConsonants(lastLetter)) {
        rightAffix = 'дор'
      } else if (isVoicelessConsonants(lastLetter)) {
        rightAffix = 'тор'
      }
    } else if (lastVowelLetter === 'у' || lastVowelLetter === 'ю') {
      if (isVowels(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
        rightAffix = 'лар'
      } else if (isVoicedConsonants(lastLetter)) {
        rightAffix = 'дар'
      } else if (isVoicelessConsonants(lastLetter)) {
        rightAffix = 'тар'
      }
    }
  }

  useEffect(() => {
    if (valueState[0] !== '') {
      setAnswerState(valueState[0] === rightAffix)
    } else {
      setAnswerState(null)
    }
  }, [valueState[0]])

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
    <Space>
      <div style={{ minWidth: '50px' }}>
        {word}
      </div>
      <KgInput valueState={valueState} placeholder={'Впишите аффикс множественного числа'}/>
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

export default MultiplicityAffixPractice
