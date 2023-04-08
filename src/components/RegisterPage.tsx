/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 08.04.2023
 */
import React, { useState, FormEvent, useEffect } from 'react';
import { UserDto } from '../models/dto/UserDto'
import { registerUser, fetchUserInfo } from '../api/user'

const RegisterPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const registerHandler = (event: FormEvent<HTMLFormElement>): void => {
    if (username !== '' && password !== '') {
      const user: UserDto = {
        username,
        password
      }
      registerUser(user)
    }
    event.preventDefault()
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <>
      <form onSubmit={registerHandler}>
        <label>
          Имя:
          <input type={'text'} name={'username'} onChange={event => setUsername(event.target.value)}/>
        </label>
        <label>
          Пароль:
          <input type={'text'} name={'password'} onChange={event => setPassword(event.target.value)}/>
        </label>
        <input type={'submit'} value={'Зарегистрироваться'}/>
      </form>
    </>
  )
}

export default RegisterPage