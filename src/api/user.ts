import { commonApi } from './common'
import type { UserDto } from '../models/dto/UserDto'
import type { ResponseDto } from '../models/dto/ResponseDto'
import { toast } from 'react-toastify'

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
  }).json<ResponseDto>().then(response => {
    console.log('Register login user:', response)
    if (response.status) {
      toast.success('Вы успешно вышло.')
      console.log(response.message)
      if (response.data != null) {
        localStorage.setItem('Token', `Bearer ${response.data as string}`)
      }
    } else {
      toast.error(response.message)
    }
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
