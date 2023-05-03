import React, { useEffect } from 'react'
import Dictionary from './components/dictionary/Dictionary'
import { useDispatch } from 'react-redux'
import { updateUserInfo } from './store/userSlice'
import Numerals from './components/numerals/Numerals'
import WordEndings from './components/wordEndings/WordEndings'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Content, Header as AntHeader } from 'antd/es/layout/layout'
import Header from './components/Header'
import { RoutePath } from './service/router'
import NoPage from './components/NoPage'
import ServicePage from './components/ServicePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Phrases from './components/phrases/Phrases'
import Phonetics from './components/phonetics/Phonetics'

function App (): JSX.Element {
  const dispatch = useDispatch()
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
          element: <Numerals/>
        }, {
          path: RoutePath.PHRASES,
          element: <Phrases/>
        }, {
          path: RoutePath.AFFIXES,
          element: <WordEndings/>
        }, {
          path: RoutePath.PHONETICS ,
          element: <Phonetics/>
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
