/**
 * Компонент вопроса
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState, useEffect } from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio, Space, Button, Tooltip } from 'antd'

const NEXT_BUTTON_TOOLTIP = 'Следующий вопрос'
const NEXT_BUTTON_TOOLTIP_DISABLED = 'Выберите вариант ответа'

interface QuestionData {
  title: string
  right: number
  answers: string[]
}

interface QuestionProps {
  question: QuestionData
}

const Question = ({ question }: QuestionProps): JSX.Element => {
  const [value, setValue] = useState(-1)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)
  const [nextButtonTooltip, setNextButtonTooltip] = useState('')

  /**
   * Эффект устанавливает доступность кнопки в зависимости от выбранного ответа
   */
  useEffect(() => {
    if (value !== -1) {
      setNextButtonDisabled(false)
    }
  }, [value])

  /**
   * Эффект подсказку кнопки в зависимости от её доступности
   */
  useEffect(() => {
    setNextButtonTooltip(nextButtonDisabled ? NEXT_BUTTON_TOOLTIP_DISABLED : NEXT_BUTTON_TOOLTIP)
  }, [nextButtonDisabled])

  const onChange = (e: RadioChangeEvent): void => {
    setValue(e.target.value)
  }

  /**
   * Метод вызывается после нажатия кнопки
   */
  const handlerNextButton = (): void => {
    if (question.right - 1 === value) {
      console.log('Good:')
    } else {
      console.log('Bad:')
    }
  }

  return (
    <Space direction={'vertical'}>
      {question.title}
      <Radio.Group onChange={onChange} value={value}>
        <Space direction={'vertical'}>
          {question.answers.map((value, index) => <Radio key={index} value={index}>{value}</Radio>)}
        </Space>
      </Radio.Group>
      <Tooltip title={nextButtonTooltip} placement={'right'}>
        <Button type={'primary'} onClick={handlerNextButton} disabled={nextButtonDisabled}>Дальше</Button>
      </Tooltip>
    </Space>
  )
}

export default Question
