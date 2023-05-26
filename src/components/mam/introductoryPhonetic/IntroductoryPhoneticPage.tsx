/**
 * Компонент вводно-фонетического курса
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson1 from './lesson1/Lesson1'
import Lesson2 from './lesson2/Lesson2'

const IntroductoryPhoneticPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Урок 1',
    children: (<Lesson1/>)
  })
  items.push({
    key: '2',
    label: 'Урок 2',
    children: (<Lesson2/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default IntroductoryPhoneticPage
