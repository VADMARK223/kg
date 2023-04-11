import { commonApi } from './common'
import type { UserDto } from '../models/dto/UserDto'

export const fetchUserInfo = (): void => {
  commonApi.get('get_user_info').then(response => {
    console.log('Get user info response:', response)
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}

export const registerUser = (user: UserDto): void => {
  commonApi.post('register_user', {
    json: user
  }).then(response => {
    console.log('Register user:', response)
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}

export const loginUser = (user: UserDto): void => {
  commonApi.post('login_user', {
    json: user
  }).then(response => {
    console.log('Register user:', response)
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}

export const testService = (): void => {
  commonApi.post('test_service').then(response => {
    console.log('Register user:', response)
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}
