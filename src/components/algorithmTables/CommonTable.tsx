/**
 * Общий компонент для алгоритмических таблиц
 *
 * @author Markitanov Vadim
 * @since 10.08.2023
 */
import React from 'react'
import LettersPanel from '../common/LettersPanel'
import { Space } from 'antd'

interface CommonTableProps {
  title: string
  children: JSX.Element | JSX.Element[] | string
}

const CommonTable = (props: CommonTableProps): JSX.Element => {
  const { title, children } = props
  return (
    <>
      <h3>{title}</h3>
      <Space direction={'vertical'}>
        <LettersPanel/>
        {children}
      </Space>
    </>
  )
}

export default CommonTable
