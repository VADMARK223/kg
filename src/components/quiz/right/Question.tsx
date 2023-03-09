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

interface QuestionProps {
  title: string
}

const Question = (data: QuestionProps): JSX.Element => {
  const [value, setValue] = useState(0)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)
  const [nextButtonTooltip, setNextButtonTooltip] = useState('')

  /**
   * Эффект устанавливает доступность кнопки в зависимости от выбранного ответа
   */
  useEffect(() => {
    if (value !== 0) {
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

  return (
    <Space direction={'vertical'}>
      {data.title}
      <Radio.Group onChange={onChange} value={value}>
        <Space direction={'vertical'}>
          <Radio value={1}>Сары</Radio>
          <Radio value={2}>Жашыл</Radio>
          <Radio value={3}>Кызыл</Radio>
        </Space>
      </Radio.Group>
      <Tooltip title={nextButtonTooltip} placement={'right'}>
        <Button type={'primary'} disabled={nextButtonDisabled}>Дальше</Button>
      </Tooltip>
    </Space>
  )
}

export default Question
