import React from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd'

const Header = (): JSX.Element => {
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
