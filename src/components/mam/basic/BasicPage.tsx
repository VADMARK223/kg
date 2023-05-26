/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'
import Lesson1 from './lesson1/Lesson1'

const BasicPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  items.push({
    key: '1',
    label: 'Выражение вопроса',
    children: (<Lesson1/>)
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
