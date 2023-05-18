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
  outWords: WordDto[]
  outTotalQuestions: number // Общее кол-во вопросов
  answersValueCount: number // Кол-во ответов вопросе
  onClose: () => void
}

const ModalQuiz = React.memo((props: ModalQuizProps) => {
    const { open, outWords, outTotalQuestions, answersValueCount, onClose } = props
    const totalQuestions = Math.min(outWords.length, outTotalQuestions)
    const [words, setWords] = useState<WordDto[]>([])
    const [targetWord, setTargetWord] = useState<WordDto | null>(null) // Слово вопроса
    const [currentAnswer, setCurrentAnswer] = useState(-1)
    const [totalComplete, setTotalComplete] = useState(false)
    const [results, setResult] = useState<ResultItemProps[]>([])
    const [rightIndexes, setRightIndexes] = useState<number[]>([]) // Позиции правильных ответов
    const [answers, setAnswers] = useState<WordDto[]>([])// Правильные ответы
    useEffect(() => {
      if (open) {
        setWords([...outWords])
        setCurrentAnswer(0)
      } else {
        setCurrentAnswer(-1)
      }
    }, [open])

    useEffect(() => {
      if (currentAnswer >= 0) {
        if (words.length !== 0) {
          setTargetWord(getRandomWord(words))
        }
      }
      setTotalComplete(currentAnswer === totalQuestions)
    }, [currentAnswer])

    useEffect(() => {
      if (targetWord != null) {
        const tempAnswer: WordDto[] = []
        const tempRightIndexes: number[] = []
        // Формируем ответы из входящих слов и исключаем целевое слово
        const currentAnswersWord = [...outWords].filter(value => value !== targetWord)
        for (let i = 0; i < Math.min(answersValueCount - 1, currentAnswersWord.length + 1); i++) {
          const currentAnswerIndex = getRandomIndex(currentAnswersWord.length)
          const currentAnswer = currentAnswersWord[currentAnswerIndex]
          currentAnswersWord.splice(currentAnswerIndex, 1)
          tempAnswer.push(currentAnswer)
        }
        // Добавляем правильный ответ в случайную позицию
        const rightPosition = getRandomIndex(answersValueCount)
        tempAnswer.splice(rightPosition, 0, targetWord)
        // Определяем правильные позиции для ответов
        tempAnswer.forEach((value, index) => {
          if (targetWord?.ru === value.ru) {
            tempRightIndexes.push(index)
          }
        })
        setRightIndexes(tempRightIndexes)
        setAnswers(tempAnswer)
      }
    }, [targetWord])

    const answerComplete = (resultItemProps: ResultItemProps): void => {
      results.push(resultItemProps)
      const newCurrentAnswer = currentAnswer + 1
      setCurrentAnswer(newCurrentAnswer)
    }

    const questionElement = (wordId: number, title: string, rightIndexes: number[], answers: WordDto[]): JSX.Element => (
      <Question question={{ wordId, title, rightPositions: rightIndexes, answers }} complete={answerComplete}/>
    )

    const closeHandler = (): void => {
      setCurrentAnswer(0)
      setResult([])
      onClose()
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
               open={open}
               onOk={closeHandler}
               closable={false}
               okText={currentAnswer === totalQuestions ? 'Готово' : 'Завершить'}
               okButtonProps={{ type: currentAnswer === totalQuestions ? 'primary' : 'default' }}
               cancelButtonProps={{ style: { display: 'none' } }}
               destroyOnClose={true}
        >
          {totalComplete
            ? <ModalQuizResults data={results}/>
            : questionElement(targetWord?.id as number, `Перевод слова: "${targetWord?.ru ?? ''}"?`, rightIndexes, answers)
          }
        </Modal>
      </div>
    )
  }, (prevProps: ModalQuizProps, nextProps: ModalQuizProps) => {
    if (prevProps.open && !nextProps.open) {
      return false
    }
    return !(!prevProps.open && nextProps.open)
  }
)

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
