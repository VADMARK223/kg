/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 08.04.2023
 */
import type { FormEvent } from 'react'
import React, { useState } from 'react'
import type { UserDto } from '../models/dto/UserDto'
import { loginUser } from '../api/user'

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const registerHandler = (event: FormEvent<HTMLFormElement>): void => {
    if (username !== '' && password !== '') {
      const user: UserDto = {
        username,
        password
      }
      loginUser(user)
    }
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={registerHandler}>
        <label>
          Имя:
          <input type={'text'} name={'username'} onChange={event => {
            setUsername(event.target.value)
          }}/>
        </label>
        <label>
          Пароль:
          <input type={'text'} name={'password'} onChange={event => {
            setPassword(event.target.value)
          }}/>
        </label>
        <input type={'submit'} value={'Залогиниться'}/>
      </form>
    </>
  )
}

export default LoginPage
