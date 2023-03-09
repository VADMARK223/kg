/**
 * Компонент правой части опросника
 *
 * @author Markitanov Vadim
 * @since 10.03.2023
 */
import React from 'react'
import { Layout, Space } from 'antd'
import Question from './Question'
import data from '../../../assets/data.json'

const Right = (): JSX.Element => {
  return (
    <Layout>
      <Space direction={'vertical'}>
        {data.questions.map(question => {
          return <Question key={question.id} question={question}/>
        })}
      </Space>
    </Layout>
  )
}

export default Right
