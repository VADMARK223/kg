/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 08.04.2023
 */
import React, { useState, useEffect } from 'react'
import type { UserDto } from '../models/dto/UserDto'
import { registerUser } from '../api/user'
import { Input, Button, Space } from 'antd'

const RegisterPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    setButtonDisable(username === '' || password === '')
  }, [username, password])

  const registerHandler = (): void => {
    if (username !== '' && password !== '') {
      const user: UserDto = {
        username,
        password
      }
      registerUser(user)
    }
  }

  return (
    <Space direction={'vertical'}>
      <h1>Регистрация</h1>
      <Space.Compact>
        <Input placeholder={'Имя'}
               onChange={(e) => {
                 setUsername(e.target.value)
               }}/>
        <Input placeholder={'Пароль'}
               onChange={(e) => {
                 setPassword(e.target.value)
               }}/>
        <Button type={'primary'} onClick={registerHandler} disabled={buttonDisable}>Зарегистрироваться</Button>
      </Space.Compact>
    </Space>
  )
}

export default RegisterPage
