/**
 * Компонент быстрого модального опросника
 *
 * @author Markitanov Vadim
 * @since 04.04.2023
 */
import React, { useState, useEffect } from 'react'
import Question from '../quiz/right/Question'
import type { DictionaryData } from '../../models/DictionaryData'
import { Modal } from 'antd'
import type { ResultItemProps } from './ModalQuizResults'
import ModalQuizResults from './ModalQuizResults'

interface ModalQuizProps {
  open: boolean
  words: DictionaryData[]
  onClose: () => void
}

const ModalQuiz = (props: ModalQuizProps): JSX.Element => {
  const words = [...props.words]
  const [currentAnswer, setCurrentAnswer] = useState(0)
  // Общее кол-во вопросов
  const totalQuestions: number = 2
  // Кол-во ответов вопросе
  const answersValueCount: number = 4
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

  const questionElement = (title: string, rightIndexes: number[], answers: string[]): JSX.Element => (
    <Question question={{ title, rightPositions: rightIndexes, answers }} complete={answerComplete}/>
  )

  const getRandomIndex = (value: number): number => {
    return Math.floor(Math.random() * value)
  }

  const getRandomWord = (): DictionaryData => {
    const currentWordIndex = 1//getRandomIndex(words.length)
    words.splice(currentWordIndex, 1)
    return words[currentWordIndex]
  }

  const answers: string[] = []
  let currentWord: DictionaryData | null = null
  // Позиции правильных ответов
  const rightIndexes: number[] = []
  if (words.length !== 0) {
    currentWord = getRandomWord()
    // Формируем ответы
    for (let i = 0; i < answersValueCount - 1; i++) {
      const currentAnswerIndex = getRandomIndex(words.length)
      const currentAnswer = words[currentAnswerIndex]
      words.splice(currentAnswerIndex, 1)
      if (currentAnswer !== undefined) {
        answers.push(currentAnswer.kg)
      }
    }
    // Добавляем правильный ответ в случайную позицию
    const rightPosition = getRandomIndex(answersValueCount)
    answers.splice(rightPosition, 0, currentWord.kg)
    rightIndexes.push(rightPosition)
  }

  const closeHandler = (): void => {
    setCurrentAnswer(0)
    setResult([])
    props.onClose()
  }

  const getTitle = (): string => {
    if (currentAnswer === totalQuestions) {
      return 'Результаты'
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
          : questionElement(`Как перевести слово: "${currentWord?.ru ?? ''}"?`, rightIndexes, answers)
        }
      </Modal>
    </div>
  )
}

export default ModalQuiz
