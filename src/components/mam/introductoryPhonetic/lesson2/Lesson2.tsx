/**
 * Компонент урока: Ударение, Гласные ө, ү, Согласный ң; Долгие гласные; Согласные К, Г, Согласный Ж, Согласные Л, Б
 *
 * @author Markitanov Vadim
 * @since 26.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson21 from './Lesson21'
import Lesson22 from './Lesson22'
import Lesson23 from './Lesson23'
import Lesson24 from './Lesson24'

const Lesson2 = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Ударение, Гласные Ө, Ү, Согласный Ң',
    children: (<Lesson21/>)
  })
  items.push({
    key: '2',
    label: 'Долгие гласные',
    children: (<Lesson22/>)
  })
  items.push({
    key: '3',
    label: 'К, Г, Ж',
    children: (<Lesson23/>)
  })
  items.push({
    key: '4',
    label: 'Л, Б',
    children: (<Lesson24/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default Lesson2
