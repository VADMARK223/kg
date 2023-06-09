import React, { useEffect, Suspense } from 'react'
import { updateUserInfo } from './store/userSlice'
import { Outlet, RouterProvider, useLocation, createHashRouter } from 'react-router-dom'
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
import Page from './components/common/Page'

// Числительные
const Numerals = React.lazy(async () => await import('./components/numerals/Numerals'))
// Разговорник
const Phrases = React.lazy(async () => await import('./components/phrases/Phrases'))
// Аффиксы
const Affixes = React.lazy(async () => await import('./components/affixes/Affixes'))
// Вводно-фонетический курс
const Phonetics = React.lazy(async () => await import('./components/phonetics/Phonetics'))
// Выражение множественности
const Multiplicity = React.lazy(async () => await import('./components/algorithmTables/multiplicity/Multiplicity'))
// Местный падеж
const Locative = React.lazy(async () => await import('./components/algorithmTables/locative/Locative'))
// Местоимения
const Pronouns = React.lazy(async () => await import('./components/pronouns/Pronouns'))
// Вводно-фонетический курс
const IntroductoryPhoneticPage = React.lazy(async () => await import('./components/mam/introductoryPhonetic/IntroductoryPhoneticPage'))
// Основной курс
const BasicPage = React.lazy(async () => await import('./components/mam/basic/BasicPage'))

// === Алгоритмические таблицы ===
// Образование категории принадлежности единственного числа
const BelongingSingle = React.lazy(async () => await import('./components/algorithmTables/BelongingSingle'))
const GenitiveTable = React.lazy(async () => await import('./components/algorithmTables/GenitiveTable'))

const Manas = React.lazy(async () => await import('./manas/Manas'))

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
    const location = useLocation()
    useEffect(() => {
      localStorage.setItem('previousPath', location.pathname)
    }, [location.pathname])

    return (<>
      <AntHeader style={headerStyle}>
        <Header/>
      </AntHeader>
      <Outlet/>
    </>)
  }
  const routes = createHashRouter([
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
          path: RoutePath.LOCATIVE,
          element: <Suspense fallback={<div>Загрузка...</div>}><Locative/></Suspense>
        }, {
          path: RoutePath.MULTIPLICITY,
          element: <Suspense fallback={<div>Загрузка...</div>}><Multiplicity/></Suspense>
        }, {
          path: RoutePath.PRONOUNS,
          element: <Suspense fallback={<div>Загрузка...</div>}><Pronouns/></Suspense>
        }, {
          path: RoutePath.INTRODUCTORY_PHONETIC,
          element: <Page><IntroductoryPhoneticPage/></Page>
        }, {
          path: RoutePath.BASIC,
          element: <Page><BasicPage/></Page>
        },
        // Алгоритмические таблицы
        {
          path: RoutePath.BELONGING_SINGLE,
          element: <Suspense fallback={<div>Загрузка...</div>}><BelongingSingle/></Suspense>
        },
        {
          path: RoutePath.GENITIVE_TABLE,
          element: <Suspense fallback={<div>Загрузка...</div>}><GenitiveTable/></Suspense>
        },
        {
          path: RoutePath.MANAS,
          element: <Suspense fallback={<div>Загрузка...</div>}><Manas/></Suspense>
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
