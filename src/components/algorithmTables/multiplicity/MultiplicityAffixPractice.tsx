/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 22.05.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Checkbox, Tooltip } from 'antd'
import { QuestionCircleTwoTone, CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'
import Letter from '../../common/Letter'
import KgInput from '../../common/KgInput'
import { isVowelLetter, isVoicedConsonant, isVoicelessConsonant } from '../../../service/utils'

interface MultiplicityAffixPracticeProps {
  word: string
}

const MultiplicityAffixPractice = (props: MultiplicityAffixPracticeProps): JSX.Element => {
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
    if (isVowelLetter(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лар'
    } else if (isVoicedConsonant(lastLetter)) {
      rightAffix = 'дар'
    } else if (isVoicelessConsonant(lastLetter)) {
      rightAffix = 'тар'
    }
  } else if (lastVowelLetter === 'э' || lastVowelLetter === 'е' || lastVowelLetter === 'и') {
    if (isVowelLetter(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лер'
    } else if (isVoicedConsonant(lastLetter)) {
      rightAffix = 'дер'
    } else if (isVoicelessConsonant(lastLetter)) {
      rightAffix = 'тер'
    }
  } else if (lastVowelLetter === 'ө' || lastVowelLetter === 'ү') {
    if (isVowelLetter(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
      rightAffix = 'лөр'
    } else if (isVoicedConsonant(lastLetter)) {
      rightAffix = 'дөр'
    } else if (isVoicelessConsonant(lastLetter)) {
      rightAffix = 'төр'
    }
  } else if (lastVowelLetter === 'о' || lastVowelLetter === 'ё' || lastVowelLetter === 'у' || lastVowelLetter === 'ю') {
    if (lastVowelLetter === 'о' || lastVowelLetter === 'ё') {
      if (isVowelLetter(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
        rightAffix = 'лор'
      } else if (isVoicedConsonant(lastLetter)) {
        rightAffix = 'дор'
      } else if (isVoicelessConsonant(lastLetter)) {
        rightAffix = 'тор'
      }
    } else if (lastVowelLetter === 'у' || lastVowelLetter === 'ю') {
      if (isVowelLetter(lastLetter) || lastLetter === 'й' || lastLetter === 'р') {
        rightAffix = 'лар'
      } else if (isVoicedConsonant(lastLetter)) {
        rightAffix = 'дар'
      } else if (isVoicelessConsonant(lastLetter)) {
        rightAffix = 'тар'
      }
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

export default MultiplicityAffixPractice
