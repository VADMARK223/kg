import React, { useEffect } from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import Quiz from './components/quiz/Quiz'
import Dictionary from './components/dictionary/Dictionary'
import { QuestionOutlined, ProfileOutlined, RadarChartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { updateUserInfo } from './store/userSlice'

interface TabData {
  title: string
  icon: React.ReactNode
  component: React.ReactNode
  disable?: boolean
}

const initItems: TabData[] = [
  {
    title: 'Опросник',
    icon: <QuestionOutlined/>,
    component: <Quiz/>
  }, {
    title: 'Словарь',
    icon: <ProfileOutlined/>,
    component: <Dictionary/>
  }, {
    title: 'Карта',
    icon: <RadarChartOutlined/>,
    component: <Dictionary/>,
    disable: true
  }
]

/**
 * Метод создает вкладки
 */
const createTabsItems = (): TabsProps['items'] => {
  const items: TabsProps['items'] = []

  const addTabsItem = (title: string, icon: React.ReactNode, children: React.ReactNode, disable?: boolean): void => {
    const label = <span>{icon}{title}</span>
    items.push({ key: String(items.length), label, children, disabled: disable })
  }

  initItems.forEach(item => {
    addTabsItem(item.title, item.icon, item.component, item.disable)
  })

  return items
}

function App (): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUserInfo({
      lastName: 'Vadmark',
      tabIndex: 1
    }))
  }, [])

  const tabsChangeHandler = (activeKey:string) => {
    console.log('activeKey:', activeKey)
  }

  return (
    <Tabs
      items={createTabsItems()}
      size={'large'}
      style={{ margin: 16 }}
      onChange={tabsChangeHandler}
    />
  )
}

export default App
