/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react';
import { TabsProps, Tabs } from 'antd'

const BasicPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  for (let i = 1; i <= 30; i++) {
    items.push({
      key: `${i}`,
      label: `Урок ${i}`,
      children: `${i}`
    })
  }
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
