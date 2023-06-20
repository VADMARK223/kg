/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 15.04.2023
 */
import React from 'react'
import { Tag } from 'antd'
import type { NumberData } from './NumberData'

interface NumberTagProps {
  data: NumberData
  clickCallback: (value: NumberData) => void
}

const NumberTag = (props: NumberTagProps): JSX.Element => {
  const clickHandler = (): void => {
    props.clickCallback(props.data)
  }
  return (
    <Tag color={props.data.color} style={{ cursor: 'pointer' }} onClick={clickHandler}>
          <h4>
            {props.data.label}
          </h4>
    </Tag>
  )
}

export default NumberTag
