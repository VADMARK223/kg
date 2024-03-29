import React, { useEffect } from 'react'
import { updateUserInfo } from './store/userSlice'
import { Outlet, RouterProvider, useLocation, createHashRouter } from 'react-router-dom'
import { Content, Header as AntHeader } from 'antd/es/layout/layout'
import Menu from './components/menu/Menu'
import { RoutePath } from './service/router'
import NoPage from './components/NoPage'
import ServicePage from './components/ServicePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'

// Словарь
import Dictionary from './components/dictionary/Dictionary'
import { useAppDispatch } from './store/hooks'
import Page from './components/common/Page'
import SuspenseBlock from './components/SuspenseBlock'

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
// Вводно-фонетический курс
const IntroductoryPhoneticPage = React.lazy(async () => await import('./components/mam/introductoryPhonetic/IntroductoryPhoneticPage'))
// Основной курс
const BasicPage = React.lazy(async () => await import('./components/mam/basic/BasicPage'))
// Интерактив
const Interactive = React.lazy(async () => await import('./components/interactive/Interactive'))

// === Алгоритмические таблицы ===
// Таблица вопросительных аффиксов
const QuestionTable = React.lazy(async () => await import('./components/algorithmTables/QuestionTable'))
// Местный падеж
const LocativeTable = React.lazy(async () => await import('./components/algorithmTables/LocativeTable'))
// Образование категории принадлежности единственного числа
const BelongingSingleTable = React.lazy(async () => await import('./components/algorithmTables/BelongingSingle'))
// Родительный падеж
const GenitiveTable = React.lazy(async () => await import('./components/algorithmTables/GenitiveTable'))
// Выражение множественности
const MultiplicityTable = React.lazy(async () => await import('./components/algorithmTables/multiplicity/Multiplicity'))
// Дательный падеж
const DativeTable = React.lazy(async () => await import('./components/algorithmTables/DativeTable'))

const Hymn = React.lazy(async () => await import('./components/others/hymn/Hymn'))

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
        <Menu/>
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
          element: <SuspenseBlock><Numerals/></SuspenseBlock>
        }, {
          path: RoutePath.INTERACTIVE,
          element: <SuspenseBlock><Interactive/></SuspenseBlock>
        }, {
          path: RoutePath.PHRASES,
          element: <SuspenseBlock><Phrases/></SuspenseBlock>
        }, {
          path: RoutePath.AFFIXES,
          element: <SuspenseBlock><Affixes/></SuspenseBlock>
        }, {
          path: RoutePath.PHONETICS,
          element: <SuspenseBlock><Phonetics/></SuspenseBlock>
        }, {
          path: RoutePath.PRONOUNS,
          element: <SuspenseBlock><Pronouns/></SuspenseBlock>
        }, {
          path: RoutePath.INTRODUCTORY_PHONETIC,
          element: <Page><IntroductoryPhoneticPage/></Page>
        }, {
          path: RoutePath.BASIC,
          element: <Page><BasicPage/></Page>
        },
        // Алгоритмические таблицы
        {
          path: RoutePath.QUESTION_TABLE,
          element: <SuspenseBlock><QuestionTable/></SuspenseBlock>
        }, {
          path: RoutePath.LOCATIVE_TABLE,
          element: <SuspenseBlock><LocativeTable/></SuspenseBlock>
        },
        {
          path: RoutePath.BELONGING_SINGLE_TABLE,
          element: <SuspenseBlock><BelongingSingleTable/></SuspenseBlock>
        },
        {
          path: RoutePath.GENITIVE_TABLE,
          element: <SuspenseBlock><GenitiveTable/></SuspenseBlock>
        }, {
          path: RoutePath.MULTIPLICITY_TABLE,
          element: <SuspenseBlock><MultiplicityTable/></SuspenseBlock>
        }, {
          path: RoutePath.DATIVE_TABLE,
          element: <SuspenseBlock><DativeTable/></SuspenseBlock>
        },
        {
          path: RoutePath.HYMN,
          element: <SuspenseBlock><Hymn/></SuspenseBlock>
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
