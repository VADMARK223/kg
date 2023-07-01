/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson1 from './lesson1/Lesson1'
import Lesson2 from './lesson2/Lesson2'
import Lesson3 from './lesson3/Lesson3'
import Lesson4 from './lesson4/Lesson4'
import Lesson5 from './lesson5/Lesson5'

const BasicPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Выражение вопроса',
    children: (<Lesson1/>)
  })
  items.push({
    key: '2',
    label: 'Выражение местонахождения',
    children: (<Lesson2/>)
  })
  items.push({
    key: '3',
    label: 'Выражение принадлежности I',
    children: (<Lesson3/>)
  })
  items.push({
    key: '4',
    label: 'Выражение принадлежности II',
    children: (<Lesson4/>)
  })
  items.push({
    key: '5',
    label: 'Выражение пространственного местоположения объектов',
    children: (<Lesson5/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default BasicPage
