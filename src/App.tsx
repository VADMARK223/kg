import React from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import Quiz from './components/quiz/Quiz'
import Dictionary from './components/dictionary/Dictionary'
import { QuestionOutlined, ProfileOutlined, RadarChartOutlined } from '@ant-design/icons'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: (<span><QuestionOutlined/>Опросник</span>),
    children: <Quiz/>
  }, {
    key: '2',
    label: (<span><ProfileOutlined/>Словарь</span>),
    children: <Dictionary/>,
    disabled: false
  }, {
    key: '3',
    label: (<span><RadarChartOutlined/>Карта</span>),
    children: <Dictionary/>,
    disabled: true
  }
]

function App (): JSX.Element {
  return (
    <Tabs
      items={items}
      size={'large'}
      style={{ margin: 16 }}
    />
  )
}

export default App
