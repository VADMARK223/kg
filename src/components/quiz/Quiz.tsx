/**
 * Компонент опросника
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React from 'react'
import Left from './Left'
import { Row, Col } from 'antd'
import Right from './right/Right'

const Quiz = (): JSX.Element => {
  return (
    <Row>
      <Col span={6}>
        <Left/>
      </Col>
      <Col span={16}>
        <Right/>
      </Col>
    </Row>
  )
}

export default Quiz
