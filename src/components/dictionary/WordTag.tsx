/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 10.04.2023
 */
import React from 'react'
import { Tag } from 'antd'

interface WordTagProps {
  label: string
  color: null | string
}

const WordTag = (props: WordTagProps): JSX.Element => {
  return (
    <Tag color={props.color ?? 'default'}>
          <span>
            {props.label}
          </span>
    </Tag>
  )
}

export default WordTag
