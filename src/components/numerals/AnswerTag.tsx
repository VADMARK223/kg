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
  const closeHandler = (e: React.MouseEvent<HTMLElement>): void => {
    props.closeCallback(props.data)
    e.preventDefault()
  }
  return (
    <Tag closable={true}
         onClose={closeHandler}>
          <b style={{fontSize: '20px'}}>
            {props.data.label}
          </b>
    </Tag>
  )
}

export default AnswerTag
