import React, { useEffect } from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import Quiz from './components/quiz/Quiz'
import Dictionary from './components/dictionary/Dictionary'
import {
  QuestionOutlined,
  ReadOutlined,
  SubnodeOutlined,
  RadarChartOutlined,
  FieldBinaryOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from './store/userSlice'
import { updateActiveKey } from './store/commonSlice'
import Numerals from './components/numerals/Numerals'
import WordEndings from './components/wordEndings/WordEndings'

interface TabData {
  title: string
  icon: React.ReactNode
  component: React.ReactNode
  disable?: boolean
}

const initItems: TabData[] = [
  {
    title: 'Словарь',
    icon: <ReadOutlined/>,
    component: <Dictionary/>
  },
  {
    title: 'Опросник',
    icon: <QuestionOutlined/>,
    component: <Quiz/>
  }, {
    title: 'Числительные',
    icon: <FieldBinaryOutlined/>,
    component: <Numerals/>
  }, {
    title: 'Вопросительный аффикс -бы',
    icon: <SubnodeOutlined/>,
    component: <WordEndings/>
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
  const activeKey = useSelector((state: any): string => state.common.activeKey)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateUserInfo({
      lastName: 'Vadmark',
      tabIndex: 1
    }))
  }, [])

  const tabsChangeHandler = (activeKey: string): void => {
    dispatch(updateActiveKey(activeKey))
  }

  return (
    <Tabs
      activeKey={activeKey}
      defaultActiveKey={activeKey}
      defaultValue={activeKey}
      items={createTabsItems()}
      size={'large'}
      style={{ margin: 16 }}
      onChange={tabsChangeHandler}
    />
  )
}

export default App
