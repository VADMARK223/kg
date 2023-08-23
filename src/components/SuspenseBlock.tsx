/**
 * Компонент для загрузки компонентов
 *
 * @author Markitanov Vadim
 * @since 23.08.2023
 */
import React, { Suspense } from 'react'
import { Spin } from 'antd'

interface SuspenseBlockProps {
  children: JSX.Element
}

const SuspenseBlock = (props: SuspenseBlockProps): JSX.Element => {
  const { children } = props
  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  return (
    <Suspense fallback={
      <div style={style}>
        <Spin size={'large'} tip={'Загрузка...'}/>
      </div>
    }>{children}</Suspense>
  )
}

export default SuspenseBlock
