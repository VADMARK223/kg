/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs, Tooltip } from 'antd'
import Lesson1 from './lesson1/Lesson1'
import Lesson2 from './lesson2/Lesson2'
import Lesson3 from './lesson3/Lesson3'
import Lesson4 from './lesson4/Lesson4'
import Lesson5 from './lesson5/Lesson5'
import Lesson24 from './lesson24/Lesson24'

const BasicPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: <>
      <Tooltip title={'Выражение вопроса'}>
        Урок 1
      </Tooltip>
    </>,
    children: (<Lesson1/>)
  })
  items.push({
    key: '2',
    label: <>
      <Tooltip title={'Выражение местонахождения'}>
        Урок 2
      </Tooltip>
    </>,
    children: (<Lesson2/>)
  })
  items.push({
    key: '3',
    label: <>
      <Tooltip title={'Выражение принадлежности I'}>
        Урок 3
      </Tooltip>
    </>,
    children: (<Lesson3/>)
  })
  items.push({
    key: '4',
    label: <>
      <Tooltip title={'Выражение принадлежности II'}>
        Урок 4
      </Tooltip>
    </>,
    children: (<Lesson4/>)
  })
  items.push({
    key: '5',
    label: <>
      <Tooltip title={'Выражение пространственного местоположения объектов'}>
        Урок 5
      </Tooltip>
    </>,
    children: (<Lesson5/>)
  })
  items.push({
    key: '24',
    label: <>
      <Tooltip title={'Выражение лица или предмета, к которым направлено действие и Выражение лица или предмета, от которого направлено действие'}>
        Урок 24
      </Tooltip>
    </>,
    children: (<Lesson24/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default BasicPage
