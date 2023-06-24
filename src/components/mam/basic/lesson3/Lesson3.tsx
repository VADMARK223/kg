/**
 * Компонент "Выражение принадлежности"
 *
 * @author Markitanov Vadim
 * @since 27.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson31 from './Lesson31'
import Lesson32 from './Lesson32'
import Lesson33 from './Lesson33'

const Lesson3 = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: String(items.length), label: 'Общее', children: (<Lesson31/>)
  })
  items.push({
    key: String(items.length), label: 'Притяжательные местоимения I', children: (<Lesson32/>)
  })
  items.push({
    key: String(items.length), label: 'Притяжательные местоимения II', children: (<Lesson33/>)
  })
  return (
    <Tabs items={items}/>
  )
}

export default Lesson3
