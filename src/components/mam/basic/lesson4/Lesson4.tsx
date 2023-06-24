/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.06.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson41 from './Lesson41'
import Lesson42 from './Lesson42'

const Lesson4 = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({ key: '1', label: 'Общее', children: (<Lesson41/>) })
  items.push({ key: '2', label: 'Изафетные словосочетания', children: (<Lesson42/>) })
  return (
    <Tabs items={items}/>
  )
}

export default Lesson4
