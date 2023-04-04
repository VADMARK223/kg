/**
 * Компонент отображения результатов
 *
 * @author Markitanov Vadim
 * @since 04.04.2023
 */
import React from 'react'
import { CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'

interface ModalQuizResultsProps {
  data: ResultItemProps[]
}

export interface ResultItemProps {
  success: boolean
  title: string
  rightAnswerText: string
}

const ResultItem = (props: ResultItemProps): JSX.Element => {
  const getIcon = (): JSX.Element => {
    if (props.success) {
      return <CheckCircleTwoTone twoToneColor="#52c41a"/>
    } else {
      return <ExclamationCircleTwoTone twoToneColor={'red'}/>
    }
  }
  return (
    <p> {getIcon()} {props.title} Правильный ответ: {props.rightAnswerText}</p>
  )
}

const ModalQuizResults = (props: ModalQuizResultsProps): JSX.Element => {
  return (
    <div>
      {props.data.map((value: ResultItemProps, index) => {
        return <ResultItem key={index} success={value.success} title={value.title}
                           rightAnswerText={value.rightAnswerText}/>
      })}
    </div>
  )
}

export default ModalQuizResults
