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
  const totalQuestions: number = 5
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

  const questionElement = (title: string, rightIndex: number, answers: string[]): JSX.Element => (
    <Question question={{ title, right: rightIndex, answers }} complete={answerComplete}/>
  )

  const getRandomIndex = (value: number): number => {
    return Math.floor(Math.random() * value)
  }

  const answers: string[] = []
  let currentWord = null
  let rightIndex: number = -1
  if (words.length !== 0) {
    const currentWordIndex = getRandomIndex(words.length)
    currentWord = words[currentWordIndex]
    words.splice(currentWordIndex, 1)
    for (let i = 0; i < answersValueCount - 1; i++) {
      const currentAnswerIndex = getRandomIndex(words.length)
      const currentAnswer = words[currentAnswerIndex]
      words.splice(currentAnswerIndex, 1)
      if (currentAnswer !== undefined) {
        answers.push(currentAnswer.kg)
      }
    }
    // Добавляем правильный ответ
    rightIndex = getRandomIndex(answersValueCount)
    answers.splice(rightIndex, 0, currentWord.kg)
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
          : questionElement(`Как перевести слово: "${currentWord?.ru ?? ''}"?`, rightIndex, answers)
        }
      </Modal>
    </div>
  )
}

export default ModalQuiz
