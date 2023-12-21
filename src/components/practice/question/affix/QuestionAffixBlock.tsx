/**
 * Компонент для практики вопросительных аффиксов
 *
 * @author Markitanov Vadim
 * @since 21.06.2023
 */
import React from 'react'
import { shuffleArray } from '../../../../service/utils'
import QuestionAffixPracticeItem from './QuestionAffixPracticeItem'

const QuestionAffixBlock = (): JSX.Element => {
  const practiceInitArray: string[] = ['үй', 'бар', 'кызык', 'бала', 'кыз',
    'текшерди', 'китеп', 'үйрендүң', 'төрт', 'стол', 'короо',
    'коңгуроо', 'чоголуш', 'шаар']
  const practiceShuffledArray: string[] = shuffleArray(practiceInitArray)

  return (
    <>
      {practiceShuffledArray.map(value => (<div key={value}><QuestionAffixPracticeItem word={value}/></div>))}
    </>
  )
}

export default QuestionAffixBlock
