/**
 * Компонент правой части опросника
 *
 * @author Markitanov Vadim
 * @since 10.03.2023
 */
import React from 'react'
import { Layout, Space } from 'antd'
import Question from './Question'

const Right = (): JSX.Element => {
  return (
    <Layout>
      <Space direction={'vertical'}>
        <Question title={'Как переводится красный цвет?'}/>
        <Question title={'Как переводится синий цвет?'}/>
        <Question title={'Как переводится зеленый цвет?'}/>
      </Space>
    </Layout>
  )
}

export default Right
