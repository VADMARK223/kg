import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button, Drawer, Tag, Tooltip } from 'antd'
import navigationService from '../service/navigation'
import { LocalStoreKey, getSetting } from '../service/settings'
import store from '../store'
import type { DicDto } from '../models/dto/DicDto'
import { exportDic, runBuild } from '../api/express'
import { ADMIN_MODE } from '../api/common'
import { InstagramOutlined, MessageOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { RoutePath } from '../service/router'

const Header = (): JSX.Element => {
  const navigate = useNavigate()
  const [openSideMenu, setOpenSideMenu] = useState(false)

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

  const buildHandler = (): void => {
    runBuild()
  }

  const onCloseSideMenuHandler = (): void => {
    setOpenSideMenu(false)
  }

  return (
    <>
      <Drawer title={'Меню'}
              open={openSideMenu}
              onClose={onCloseSideMenuHandler}
              placement={'left'}
              closable={false}
      >
        <Space direction={'vertical'}>
          <Link to={RoutePath.DIC} onClick={onCloseSideMenuHandler}><Button type={'primary'}>Словарь</Button></Link>
          <Link to={RoutePath.NUMBERS} onClick={onCloseSideMenuHandler}><Button
            type={'primary'}>Числительные</Button></Link>
          <Link to={RoutePath.PHRASES} onClick={onCloseSideMenuHandler}><Button
            type={'primary'}>Разговорник</Button></Link>
          <Link to={RoutePath.AFFIXES} onClick={onCloseSideMenuHandler}><Button type={'primary'}>Аффиксы</Button></Link>
          <hr/>
          <Link to={RoutePath.PHONETICS} onClick={onCloseSideMenuHandler}><Button type={'primary'}>Вводно-фонетический
            курс</Button></Link>
          {ADMIN_MODE &&
          <Link to={RoutePath.SERVICE} onClick={onCloseSideMenuHandler}><Button type={'primary'}>Сервис</Button></Link>}
        </Space>
      </Drawer>
      <Space>
        <Button type={'primary'} onClick={() => {
          setOpenSideMenu(true)
        }}>Меню</Button>
        <Tag icon={<InstagramOutlined/>} color="#55acee">
          <a href={'https://www.instagram.com/vadmark_in_kyrgyzstan/'} target={'_blank'}
             rel={'noopener noreferrer'}>Автор</a><br/>
        </Tag>
        <Tag icon={<MessageOutlined/>} color="#55acee">
          <a href={'https://t.me/kyrgyztili_2023'} target={'_blank'}
             rel={'noopener noreferrer'}>Кыргыз Тили</a><br/>
        </Tag>
        <Tooltip title={'Также источник: Э.Дж. МАМЫТОВА (Кыргызский для начинающих)'}>
          <InfoCircleTwoTone twoToneColor={'blue'}/>
        </Tooltip>
        {ADMIN_MODE && <>
          {!isAuth ? <Link key={'4'} to={'/register'}>Регистрация</Link> : null}
          {!isAuth ? <Link key={'5'} to={'/login'}>Логин</Link> : null}
          {isAuth ? <Button onClick={logoutHandler}>Разголиниться</Button> : null}
            <Button type={'primary'} onClick={exportHandler}>Экспортировать словарь</Button>
            <Button type={'primary'} onClick={buildHandler}>Собрать</Button>
        </>}
      </Space>
    </>
  )
}

export default Header
