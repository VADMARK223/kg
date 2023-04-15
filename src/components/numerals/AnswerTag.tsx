/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 15.04.2023
 */
import React from 'react'
import { Tag } from 'antd'
import type { NumberData } from './NumberData'

interface AnswerTagProps {
  data: NumberData
  closeCallback: (value: NumberData) => void
}

const AnswerTag = (props: AnswerTagProps): JSX.Element => {
  const closeHandler = (): void => {
    props.closeCallback(props.data)
  }
  return (
    <Tag closable={true} onClose={closeHandler}>
          <span>
            {props.data.label}
          </span>
    </Tag>
  )
}

export default AnswerTag
