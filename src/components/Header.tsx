import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button } from 'antd'
import navigationService from '../service/navigation'
import { LocalStoreKey } from '../service/settings'

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigationService.setNavigation(navigate)
  }, [])
  const logoutHandler = (): void => {
    localStorage.removeItem(LocalStoreKey.TOKEN)
    location.reload()
  }
  return (
    <Space>
      <Link key={'1'} to={'/'}>Дом</Link>
      <Link key={'2'} to={'/service'}>Сервис</Link>
      <Link key={'4'} to={'/register'}>Регистрация</Link>
      <Link key={'5'} to={'/login'}>Логин</Link>
      <Button onClick={logoutHandler}>Разголиниться</Button>
    </Space>
  )
}

export default Header
