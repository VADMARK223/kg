/**
 * Общий компонент для страниц
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React, { Suspense, useEffect, useState } from 'react'
import { CaretUpOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'

interface PageProps {
  children: JSX.Element
}

const Page = (props: PageProps): JSX.Element => {
  const { children } = props
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      const isTop = window.scrollY === 0
      setIsAtTop(isTop)
    }

    window.addEventListener('scroll', handleScroll)

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getUpButtonDisplay = (): 'none' | undefined => {
    if (isAtTop) {
      return 'none'
    } else {
      return undefined
    }
  }

  const scrollUpHandler = (): void => {
    window.scroll(0, 0)
  }

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      {children}
      <FloatButton icon={<CaretUpOutlined/>} type="primary" style={{ right: 20, display: getUpButtonDisplay() }}
                   onClick={scrollUpHandler}/>
    </Suspense>
  )
}

export default Page
