/**
 * Компонент бокового меню.
 *
 * @author Markitanov Vadim
 * @since 12.08.2023
 */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button, Drawer, Tag, Divider } from 'antd'
import navigationService from '../../service/navigation'
import { LocalStoreKey, getSetting } from '../../service/settings'
import store from '../../store'
import type { DicDto } from '../../models/dto/DicDto'
import { exportDic, runBuild } from '../../api/express'
import { ADMIN_MODE } from '../../api/common'
import { InstagramOutlined } from '@ant-design/icons'
import { RoutePath } from '../../service/router'
import InfoIcon from '../common/InfoIcon'
import MenuButtonLink from './MenuButtonLink'
import { menuEventManager } from './menuEventManager'

const Menu = (): JSX.Element => {
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

  const hideMenu = (): void => {
    setOpenSideMenu(false)
  }

  menuEventManager.onClose(hideMenu)

  return (
    <>
      <Drawer title={'Меню'}
              open={openSideMenu}
              onClose={hideMenu}
              placement={'left'}
              closable={true}
      >
        <Space direction={'vertical'} size={2}>
          <Space direction={'horizontal'}>
            <MenuButtonLink to={RoutePath.HOME} label={'Словарь'}/>
            <MenuButtonLink to={RoutePath.NUMBERS} label={'Числительные'}/>
            <MenuButtonLink to={RoutePath.INTERACTIVE} label={'Интерактив'}/>
          </Space>
          <Space direction={'horizontal'}>
            <MenuButtonLink to={RoutePath.AFFIXES} label={'Аффиксы'}/>
            <MenuButtonLink to={RoutePath.PHRASES} label={'Разговорник'}/>
          </Space>
          <Divider orientation={'left'}>Мамытова Э.Дж.</Divider>
          <MenuButtonLink to={RoutePath.INTRODUCTORY_PHONETIC} label={'Вводно-фонетический курс'}/>
          <MenuButtonLink to={RoutePath.BASIC} label={'Основной курс'}/>
          <MenuButtonLink to={RoutePath.PHONETICS} label={'Вводно-фонетический курс'} hide/>

          <Divider orientation={'left'}>Алгоритмические таблицы</Divider>
          <MenuButtonLink to={RoutePath.QUESTION_TABLE} label={'Вопросительные аффиксы'}/>
          <MenuButtonLink to={RoutePath.LOCATIVE_TABLE} label={'Местный падежа'}/>
          <MenuButtonLink to={RoutePath.BELONGING_SINGLE_TABLE} label={'Принадлежность единственного числа'}/>
          <MenuButtonLink to={RoutePath.GENITIVE_TABLE} label={'Родительный падеж'}/>
          <MenuButtonLink to={RoutePath.MULTIPLICITY_TABLE} label={'Множественно число'}/>
          <MenuButtonLink to={RoutePath.DATIVE_TABLE} label={'Дательный падеж'}/>

          <Divider orientation={'left'}>Прочее</Divider>
          <MenuButtonLink to={RoutePath.HYMN} label={'Гимн Кыргызстана'}/>
          {ADMIN_MODE && <MenuButtonLink to={RoutePath.SERVICE} label={'Сервис'}/>}
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
        <InfoIcon tooltip={'Также источник: Э.Дж. МАМЫТОВА (Кыргызский для начинающих)'}/>
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

export default Menu
