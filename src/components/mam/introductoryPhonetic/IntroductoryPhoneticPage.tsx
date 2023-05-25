/**
 * Компонент вводно-фонетического курса
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson1 from './Lesson1'

const IntroductoryPhoneticPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Урок 1',
    children: (<Lesson1/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default IntroductoryPhoneticPage
