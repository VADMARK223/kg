import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button } from 'antd'
import navigationService from '../service/navigation'
import { LocalStoreKey, getSetting } from '../service/settings'

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigationService.setNavigation(navigate)
  }, [])
  const logoutHandler = (): void => {
    localStorage.removeItem(LocalStoreKey.TOKEN)
    location.reload()
  }

  const isAuth: boolean = getSetting(LocalStoreKey.TOKEN, '') !== ''
  console.log('Auth:', isAuth)

  return (
    <Space>
      <Link key={'1'} to={'/'}>Дом</Link>
      <Link key={'2'} to={'/service'}>Сервис</Link>
      {!isAuth ? <Link key={'4'} to={'/register'}>Регистрация</Link> : null}
      {!isAuth ? <Link key={'5'} to={'/login'}>Логин</Link> : null}
      {isAuth ? <Button onClick={logoutHandler}>Разголиниться</Button> : null}
    </Space>
  )
}

export default Header
