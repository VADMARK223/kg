/**
 * Компонент правой части опросника
 *
 * @author Markitanov Vadim
 * @since 10.03.2023
 */
import React from 'react'
import { Space, Divider, Button, Tooltip } from 'antd'
import data from '../../../assets/data.json'

const Right = (): JSX.Element => {
  return (
    <Space direction={'vertical'}>
      {data.questions.map(question => {
        if (question.hidden !== true) {
          return <span key={question.id}>
            <Divider/>
          </span>
        }

        return null
      })}
      <Space>
        <Button type={'primary'}>Назад</Button>
        <Tooltip title={'Ответьте на все вопросы'} placement={'right'}>
          <Button type={'primary'} disabled={true}>Вперед</Button>
        </Tooltip>
      </Space>
    </Space>
  )
}

export default Right
