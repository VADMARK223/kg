import React, { useEffect, Suspense } from 'react'
import { updateUserInfo } from './store/userSlice'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Content, Header as AntHeader } from 'antd/es/layout/layout'
import Header from './components/Header'
import { RoutePath } from './service/router'
import NoPage from './components/NoPage'
import ServicePage from './components/ServicePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

// Словарь
import Dictionary from './components/dictionary/Dictionary'
import { useAppDispatch } from './store/hooks'
// Числительные
const Numerals = React.lazy(async () => await import('./components/numerals/Numerals'))
// Разговорник
const Phrases = React.lazy(async () => await import('./components/phrases/Phrases'))
// Аффиксы
const Affixes = React.lazy(async () => await import('./components/affixes/Affixes'))
// Вводно-фонетический курс
const Phonetics = React.lazy(async () => await import('./components/phonetics/Phonetics'))
// Местоимения
const Pronouns = React.lazy(async () => await import('./components/pronouns/Pronouns'))

function App (): JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(updateUserInfo({
      lastName: 'Vadmark',
      tabIndex: 1,
      favoriteWordIds: localStorage.getItem('kg_favor_ids') == null ? [] : JSON.parse(localStorage.getItem('kg_favor_ids') as string)
    }))
  }, [])

  const headerStyle: React.CSSProperties = {
    alignItems: 'center',
    height: 60,
    paddingInline: '0px',
    backgroundColor: '#FFF'
  }

  const CustomLayout = (): JSX.Element => {
    return (<>
      <AntHeader style={headerStyle}>
        <Header/>
      </AntHeader>
      <Outlet/>
    </>)
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
                <Dictionary/>
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
        }, {
          path: RoutePath.DIC,
          element: <Dictionary/>
        }, {
          path: RoutePath.NUMBERS,
          element: <Suspense fallback={<div>Загрузка...</div>}><Numerals/></Suspense>
        }, {
          path: RoutePath.PHRASES,
          element: <Suspense fallback={<div>Загрузка...</div>}><Phrases/></Suspense>
        }, {
          path: RoutePath.AFFIXES,
          element: <Suspense fallback={<div>Загрузка...</div>}><Affixes/></Suspense>
        }, {
          path: RoutePath.PHONETICS,
          element: <Suspense fallback={<div>Загрузка...</div>}><Phonetics/></Suspense>
        }, {
          path: RoutePath.PRONOUNS,
          element: <Suspense fallback={<div>Загрузка...</div>}><Pronouns/></Suspense>
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
