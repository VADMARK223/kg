import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button } from 'antd'
import navigationService from '../service/navigation'
import { LocalStoreKey, getSetting } from '../service/settings'
import store from '../store'
import type { DicDto } from '../models/dto/DicDto'
import { exportDic } from '../api/express'

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

  const exportHandler = (): void => {
    const dic: DicDto = store.getState().dic
    if (dic.tags.length !== 0 && dic.types.length !== 0 && dic.words.length !== 0) {
      exportDic(dic)
    } else {
      console.error('Не валидный словарь для выгрузки.')
    }
  }

  return (
    <Space>
      <Link key={'1'} to={'/'}>Дом</Link>
      <Link key={'2'} to={'/service'}>Сервис</Link>
      {!isAuth ? <Link key={'4'} to={'/register'}>Регистрация</Link> : null}
      {!isAuth ? <Link key={'5'} to={'/login'}>Логин</Link> : null}
      {isAuth ? <Button onClick={logoutHandler}>Разголиниться</Button> : null}
      <Button type={'primary'} onClick={exportHandler}>Экспортировать словарь</Button>
    </Space>
  )
}

export default Header
