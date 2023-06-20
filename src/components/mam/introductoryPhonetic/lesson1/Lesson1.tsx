/**
 * Компонент урока: Алфавит кыргызского языка; Четыре группы гласных: Употребление согласных: Важные закономерности кыргызского языка
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson11 from './Lesson11'
import Lesson12 from './Lesson12'
import Lesson13 from './Lesson13'

const Lesson1 = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Алфавит',
    children: (<Lesson11/>)
  })
  items.push({
    key: '2',
    label: 'Фонетика',
    children: (<Lesson12/>)
  })
  items.push({
    key: '3',
    label: 'Грамматика',
    children: (<Lesson13/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default Lesson1
