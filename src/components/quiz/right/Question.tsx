/**
 * Компонент вопроса
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState, useEffect } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio, Space, Button, Tooltip } from 'antd'
import type { ResultItemProps } from '../../dictionary/ModalQuizResults'
import type { WordDto } from '../../../models/dto/WordDto'
import Favorite from '../../common/Favorite'

const NEXT_BUTTON_TOOLTIP = 'Следующий вопрос'
const NEXT_BUTTON_TOOLTIP_DISABLED = 'Выберите вариант ответа'

interface QuestionData {
  wordId: number
  title: string
  rightPositions: number[]
  answers: WordDto[]
}

interface QuestionProps {
  showNextButton?: boolean
  question: QuestionData
  complete?: (resultItemProps: ResultItemProps) => void
}

const Question = ({ showNextButton = false, question, complete }: QuestionProps): JSX.Element => {
  const [value, setValue] = useState(-1)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)
  const [nextButtonTooltip, setNextButtonTooltip] = useState('')

  /**
   * Эффект устанавливает доступность кнопки в зависимости от выбранного ответа
   */
  useEffect(() => {
    if (value !== -1) {
      setNextButtonDisabled(false)
      if (complete !== undefined) {
        setValue(-1)
        const result: ResultItemProps = {
          success: checkRightAnswer(),
          wordId: question.wordId,
          title: question.title,
          rightAnswerText: question.answers.filter((value1, index) => question.rightPositions.includes(index)).map(value1 => value1.kg).join(' или '),
          wrongAnswerText: question.answers[value].kg
        }

        complete(result)
      }
    }
  }, [value])

  /**
   * Эффект подсказку кнопки в зависимости от её доступности
   */
  useEffect(() => {
    setNextButtonTooltip(nextButtonDisabled ? NEXT_BUTTON_TOOLTIP_DISABLED : NEXT_BUTTON_TOOLTIP)
  }, [nextButtonDisabled])

  /**
   * Метод вызывается, когда выбирается ответ
   * @param {RadioChangeEvent} e
   */
  const onChange = (e: RadioChangeEvent): void => {
    setValue(e.target.value)
  }

  /**
   * Метод проверяет правильность ответа
   * @return {boolean}
   */
  const checkRightAnswer = (): boolean => question.rightPositions.includes(value)

  /**
   * Метод вызывается после нажатия кнопки
   */
  const handlerNextButton = (): void => {
    if (checkRightAnswer()) {
      console.log('Good.')
    } else {
      console.log('Bad.')
    }
  }

  return (
    <Space direction={'vertical'}>
      <Space>
        <Favorite wordId={question.wordId}/>
        <b>{question.title}</b>
      </Space>

      <Radio.Group onChange={onChange} value={value}>
        <Space direction={'vertical'}>
          {question.answers.map((value, index) => <Radio key={index} value={index}>{value.kg}</Radio>)}
        </Space>
      </Radio.Group>
      {showNextButton
        ? <Tooltip title={nextButtonTooltip} placement={'right'}>
          <Button type={'primary'} onClick={handlerNextButton} disabled={nextButtonDisabled}>Дальше</Button>
        </Tooltip>
        : null}

    </Space>
  )
}

export default Question
