/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React from 'react'
import { Col, Row } from 'antd'

interface HymnLineProps {
  first: JSX.Element | string
  second: JSX.Element | string
  third: JSX.Element | string
}

const HymnLine = (props: HymnLineProps): JSX.Element => {
  const { first, second, third } = props
  return (
    <Row>
      <Col span={8}>{first}</Col>
      <Col span={8}>{second}</Col>
      <Col span={8}>{third}</Col>
    </Row>
  )
}

export default HymnLine
