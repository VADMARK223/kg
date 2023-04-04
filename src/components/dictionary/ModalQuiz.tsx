/**
 * Компонент быстрого модального опросника
 *
 * @author Markitanov Vadim
 * @since 04.04.2023
 */
import React, { useState, useEffect } from 'react'
import Question from '../quiz/right/Question'
import { DictionaryData } from '../../models/DictionaryData'
import { Modal } from 'antd'

interface ModalQuizProps {
  open: boolean
  words: DictionaryData[]
  onClose: () => void
}

const ModalQuiz = (props: ModalQuizProps): JSX.Element => {
  const words = props.words
  const [currentAnswer, setCurrentAnswer] = useState(0)
  // Общее кол-во вопросов
  const totalQuestions: number = 3
  // Кол-во ответов вопросе
  const answersValueCount: number = 4
  const [totalComplete, setTotalComplete] = useState(false)

  useEffect(() => {
    setTotalComplete(currentAnswer === totalQuestions)
  }, [currentAnswer])

  const answerComplete = (rightAnswer: boolean) => {
    if (rightAnswer) {
      console.log('Да.')
    } else {
      console.log('Нет.')
    }
    const newCurrentAnswer = currentAnswer + 1
    setCurrentAnswer(newCurrentAnswer)
  }

  const questionElement = (title: string, rightIndex: number, answers: string[]) => (
    <Question question={{ title: title, right: rightIndex, answers: answers }} complete={answerComplete}/>
  )

  const getRandomIndex = (value: number): number => {
    return Math.floor(Math.random() * value)
  }

  const answers: string[] = []
  let currentWord = null
  let rightIndex: number = -1
  if (words.length !== 0) {
    currentWord = words[getRandomIndex(words.length)]
    for (let i = 0; i < answersValueCount - 1; i++) {
      const temp = words[getRandomIndex(words.length)]
      answers.push(temp.kg)
    }
    // Добавляем правильный ответ
    rightIndex = getRandomIndex(answersValueCount)
    answers.splice(rightIndex, 0, currentWord.kg)
  }

  const closeHandler = () => {
    setCurrentAnswer(0)
    props.onClose()
  }

  return (
    <div>
      <Modal title={`Быстрый опросник (${currentAnswer}/${totalQuestions})`}
             open={props.open}
             onOk={closeHandler}
             closable={false}
             cancelText={'Завершить'}
             onCancel={closeHandler}
             destroyOnClose={true}
      >
        {totalComplete
          ? <p>Complete</p>
          : questionElement(`Как перевести слово: "${currentWord?.ru ?? ''}"?`, rightIndex, answers)
        }
      </Modal>
    </div>
  )
}

export default ModalQuiz
