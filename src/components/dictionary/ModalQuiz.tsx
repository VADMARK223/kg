/**
 * Компонент быстрого модального опросника
 *
 * @author Markitanov Vadim
 * @since 04.04.2023
 */
import React, { useState, useEffect } from 'react'
import Question from '../quiz/right/Question'
import { Modal } from 'antd'
import type { ResultItemProps } from './ModalQuizResults'
import ModalQuizResults from './ModalQuizResults'
import type { WordDto } from '../../models/dto/WordDto'

interface ModalQuizProps {
  open: boolean
  words: WordDto[]
  onClose: () => void
  totalQuestions: number // Общее кол-во вопросов
  answersValueCount: number // Кол-во ответов вопросе
}

const ModalQuiz = React.memo((props: ModalQuizProps) => {
  const words = props.words.map(value => value)
  const [currentAnswer, setCurrentAnswer] = useState(0)
  const { totalQuestions, answersValueCount } = props
  const [totalComplete, setTotalComplete] = useState(false)
  const [results, setResult] = useState<ResultItemProps[]>([])

  useEffect(() => {
    setTotalComplete(currentAnswer === totalQuestions)
  }, [currentAnswer])

  const answerComplete = (resultItemProps: ResultItemProps): void => {
    results.push(resultItemProps)
    const newCurrentAnswer = currentAnswer + 1
    setCurrentAnswer(newCurrentAnswer)
  }

  const questionElement = (wordId: number, title: string, rightIndexes: number[], answers: WordDto[]): JSX.Element => (
    <Question question={{ wordId, title, rightPositions: rightIndexes, answers }} complete={answerComplete}/>
  )

  const answers: WordDto[] = []
  let currentWord: WordDto | null = null
  // Позиции правильных ответов
  const rightIndexes: number[] = []
  if (words.length !== 0) {
    currentWord = getRandomWord(words)
    // Формируем ответы
    for (let i = 0; i < answersValueCount - 1; i++) {
      if (words.length === 0) {
        break
      }
      const currentAnswerIndex = getRandomIndex(words.length)
      const currentAnswer = words[currentAnswerIndex]
      words.splice(currentAnswerIndex, 1)
      answers.push(currentAnswer)
    }
    // Добавляем правильный ответ в случайную позицию
    const rightPosition = getRandomIndex(answersValueCount)
    answers.splice(rightPosition, 0, currentWord)
    // Определяем правильные позиции для ответов
    answers.forEach((value, index) => {
      if (currentWord?.ru === value.ru) {
        rightIndexes.push(index)
      }
    })
  }

  const closeHandler = (): void => {
    setCurrentAnswer(0)
    setResult([])
    props.onClose()
  }

  const getTitle = (): string => {
    if (currentAnswer === totalQuestions) {
      return 'Результаты быстрого опроса:'
    } else {
      return `Быстрый опросник (${currentAnswer}/${totalQuestions})`
    }
  }

  return (
    <div>
      <Modal title={getTitle()}
             open={props.open}
             onOk={closeHandler}
             closable={false}
             okText={currentAnswer === totalQuestions ? 'Готово' : 'Завершить'}
             okButtonProps={{ type: currentAnswer === totalQuestions ? 'primary' : 'default' }}
             cancelButtonProps={{ style: { display: 'none' } }}
             destroyOnClose={true}
      >
        {totalComplete
          ? <ModalQuizResults data={results}/>
          : questionElement(currentWord?.id as number, `Перевод слова: "${currentWord?.ru ?? ''}"?`, rightIndexes, answers)
        }
      </Modal>
    </div>
  )
}, (prevProps: ModalQuizProps, nextProps: ModalQuizProps) => {
  if (prevProps.open && !nextProps.open) {
    return false
  }

  return !(!prevProps.open && nextProps.open)
})

ModalQuiz.displayName = 'ModalQuiz'

const getRandomIndex = (value: number): number => {
  return Math.floor(Math.random() * value)
}

const getRandomWord = (words: WordDto[]): WordDto => {
  const currentWordIndex: number = getRandomIndex(words.length)
  const result = words[currentWordIndex]
  words.splice(currentWordIndex, 1)
  return result
}

export default ModalQuiz
