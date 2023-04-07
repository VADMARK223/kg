import React from 'react'
import { Link } from 'react-router-dom'

const Header = (): JSX.Element => {
  return (
    <>
      <Link key={'1'} to={'/'}>Дом</Link>
      <Link key={'2'} to={'/service'}>Сервис</Link>
    </>
  )
}

export default Header
