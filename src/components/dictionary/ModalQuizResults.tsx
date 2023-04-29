/**
 * Компонент отображения результатов
 *
 * @author Markitanov Vadim
 * @since 04.04.2023
 */
import React from 'react'
import { CheckCircleTwoTone, ExclamationCircleTwoTone } from '@ant-design/icons'
import Favorite from '../common/Favorite'
import { Space } from 'antd'

interface ModalQuizResultsProps {
  data: ResultItemProps[]
}

export interface ResultItemProps {
  success: boolean
  wordId: number
  title: string
  rightAnswerText: string
  wrongAnswerText: string
}

const ResultItem = (props: ResultItemProps): JSX.Element => {
  const getIcon = (): JSX.Element => {
    if (props.success) {
      return <CheckCircleTwoTone twoToneColor="#52c41a"/>
    } else {
      return <ExclamationCircleTwoTone twoToneColor={'red'}/>
    }
  }
  const getWrongAnswer = (): JSX.Element | undefined => {
    if (props.success) {
      return undefined
    } else {
      return <i>Ваш ответ: {props.wrongAnswerText}</i>
    }
  }
  return (
    <Space size={3}> {getIcon()} <Favorite wordId={props.wordId}/> {props.title} Ответ: {props.rightAnswerText}. {getWrongAnswer()}</Space>
  )
}

const ModalQuizResults = (props: ModalQuizResultsProps): JSX.Element => {
  return (
    <div>
      {props.data.map((value: ResultItemProps, index) => {
        return <ResultItem key={index} success={value.success} wordId={value.wordId} title={value.title}
                           rightAnswerText={value.rightAnswerText} wrongAnswerText={value.wrongAnswerText}/>
      })}
    </div>
  )
}

export default ModalQuizResults
