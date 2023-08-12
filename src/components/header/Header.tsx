import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Space, Button, Drawer, Tag, Divider } from 'antd'
import navigationService from '../../service/navigation'
import { LocalStoreKey, getSetting } from '../../service/settings'
import store from '../../store'
import type { DicDto } from '../../models/dto/DicDto'
import { exportDic, runBuild } from '../../api/express'
import { ADMIN_MODE } from '../../api/common'
import { InstagramOutlined, MessageOutlined } from '@ant-design/icons'
import { RoutePath } from '../../service/router'
import InfoIcon from '../common/InfoIcon'
import HeaderButtonLink from './HeaderButtonLink'

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

  const onCloseHandler = (): void => {
    setOpenSideMenu(false)
  }

  return (
    <>
      <Drawer title={'Меню'}
              open={openSideMenu}
              onClose={onCloseHandler}
              placement={'left'}
              closable={true}
      >
        <Space direction={'vertical'} size={2}>
          <Space direction={'horizontal'}>
            <HeaderButtonLink to={RoutePath.HOME} label={'Словарь'} onClose={onCloseHandler}/>
            <HeaderButtonLink to={RoutePath.NUMBERS} label={'Числительные'} onClose={onCloseHandler}/>
          </Space>
          <Space direction={'horizontal'}>
            <HeaderButtonLink to={RoutePath.AFFIXES} label={'Аффиксы'} onClose={onCloseHandler}/>
            <HeaderButtonLink to={RoutePath.PHRASES} label={'Разговорник'} onClose={onCloseHandler}/>
          </Space>
          <Divider orientation={'left'}>Мамытова Э.Дж.</Divider>
          <HeaderButtonLink to={RoutePath.INTRODUCTORY_PHONETIC} label={'Вводно-фонетический курс'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.BASIC} label={'Основной курс'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.PHONETICS} label={'Вводно-фонетический курс'} hide onClose={onCloseHandler}/>

          <Divider orientation={'left'}>Алгоритмические таблицы</Divider>
          <HeaderButtonLink to={RoutePath.QUESTION_TABLE} label={'Вопросительные аффиксы'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.LOCATIVE_TABLE} label={'Местный падежа'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.BELONGING_SINGLE_TABLE} label={'Принадлежность единственного числа'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.GENITIVE_TABLE} label={'Родительный падеж'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.MULTIPLICITY_TABLE} label={'Множественно число'} onClose={onCloseHandler}/>
          <HeaderButtonLink to={RoutePath.DATIVE_TABLE} label={'Дательный падеж'} onClose={onCloseHandler}/>

          <Divider orientation={'left'}>Прочее</Divider>
          <HeaderButtonLink to={RoutePath.HYMN} label={'Гимн Кыргызстана'} onClose={onCloseHandler}/>
          {ADMIN_MODE && <HeaderButtonLink to={RoutePath.SERVICE} label={'Сервис'} onClose={onCloseHandler}/>}
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

export default Header
