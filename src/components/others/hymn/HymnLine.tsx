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
}

const HymnLine = (props: HymnLineProps): JSX.Element => {
  const { first, second } = props
  return (
    <Row>
      <Col flex={1}>{first}</Col>
      <Col flex={1}>{second}</Col>
    </Row>
  )
}

export default HymnLine
