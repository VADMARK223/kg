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

const BasicPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: String(items.length),
    label: 'Выражение вопроса',
    children: (<Lesson1/>)
  })
  items.push({
    key: String(items.length),
    label: 'Выражение местонахождения',
    children: (<Lesson2/>)
  })
  items.push({
    key: String(items.length),
    label: 'Выражение принадлежности',
    children: (<Lesson3/>)
  })
  return (
    <div style={{ width: '100hv' }}>
      <Tabs items={items}
            tabPosition={'top'}
            tabBarStyle={{ width: '100%', display: 'block' }}
            style={{ width: '100%', whiteSpace: 'initial' }}
            type="line"
      />
    </div>
  )
}

export default BasicPage
