import React, { useEffect } from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
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
import Map from './components/map/Map'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Content, Header as AntHeader } from 'antd/es/layout/layout'
import Header from './components/Header'
import { RoutePath } from './service/router'
import NoPage from './components/NoPage'
import ServicePage from './components/ServicePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Phrases from './components/phrases/Phrases'
import { ADMIN_MODE } from './api/common'

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
    title: 'Фразы',
    icon: <QuestionOutlined/>,
    component: <Phrases/>
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
    component: <Map/>,
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

  const headerStyle: React.CSSProperties = {
    alignItems: 'center',
    height: 60,
    paddingInline: '0px',
    backgroundColor: '#FFF'
  }

  const CustomLayout = (): JSX.Element => {
    if (ADMIN_MODE) {
      return (<>
        <AntHeader style={headerStyle}>
          <Header/>
        </AntHeader>
        <Outlet/>
      </>)
    }
    return (<Outlet/>)
  }
  const routes = createBrowserRouter([
    {
      element: <CustomLayout/>,
      children: [
        {
          path: RoutePath.HOME,
          children: [
            {
              index: true,
              element:
                <Tabs
                  activeKey={activeKey}
                  defaultActiveKey={activeKey}
                  defaultValue={activeKey}
                  items={createTabsItems()}
                  size={'large'}
                  style={{ margin: 16 }}
                  onChange={tabsChangeHandler}
                />
            }
          ]
        },
        {
          path: RoutePath.SERVICE,
          element: <ServicePage/>
        },
        {
          path: RoutePath.LOGIN,
          element: <LoginPage/>
        }, {
          path: RoutePath.REGISTER,
          element: <RegisterPage/>
        },
        {
          path: RoutePath.ALL,
          element: <NoPage/>
        }
      ]
    }
  ])

  return (
    <Content>
      <RouterProvider router={routes}/>
    </Content>
  )
}

export default App
