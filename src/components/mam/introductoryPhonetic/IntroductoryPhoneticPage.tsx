/**
 * Компонент вводно-фонетического курса
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs, Tooltip } from 'antd'
import Lesson1 from './lesson1/Lesson1'
import Lesson2 from './lesson2/Lesson2'

const IntroductoryPhoneticPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: <>
      <Tooltip title={<>
        Алфавит кыргызского языка<br/>
        Четыре группы гласных<br/>
        Употребление согласных<br/><br/>
        Важные закономерности кыргызского языка
      </>}>
        Урок 1
      </Tooltip>
    </>,
    children: (<Lesson1/>)
  })
  items.push({
    key: '2',
    label: <>
      <Tooltip title={<>
        Ударение<br/>
        Гласные Ө, Ү<br/>
        Согласный Ң
      </>}>
        Урок 2
      </Tooltip>
    </>,
    children: (<Lesson2/>)
  })
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default IntroductoryPhoneticPage
