import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space } from 'antd'
import navigationService from '../service/navigation'

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  useEffect(() => {
    navigationService.setNavigation(navigate)
  }, [])
  return (
    <Space>
      <Link key={'1'} to={'/'}>Дом</Link>
      <Link key={'2'} to={'/service'}>Сервис</Link>
      <Link key={'4'} to={'/register'}>Регистрация</Link>
      <Link key={'5'} to={'/login'}>Логин</Link>
    </Space>
  )
}

export default Header
