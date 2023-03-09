import React from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import Quiz from './components/quiz/Quiz'
import Dictionary from './components/dictionary/Dictionary'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: (<span><AndroidOutlined/>Опросник</span>),
    children: <Quiz/>
  }, {
    key: '2',
    label: (<span><AppleOutlined/>Словарь</span>),
    children: <Dictionary/>,
    disabled: true
  }
]

function App (): JSX.Element {
  return (
    <Tabs
      items={items}
      size={'large'}
      style={{ margin: 32 }}
    />
  )
}

export default App
