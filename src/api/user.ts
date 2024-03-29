import { commonApi } from './common'
import type { UserDto } from '../models/dto/UserDto'
import type { ResponseDto } from '../models/dto/ResponseDto'
import { toast } from 'react-toastify'
import { setSetting, LocalStoreKey } from '../service/settings'
import navigationService from '../service/navigation'
import { RoutePath } from '../service/router'

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
  }).json<ResponseDto>().then((response: ResponseDto) => {
    if (response.status) {
      if (response.data === null) {
        toast.success('Успешная регистрация')
      } else {
        toast.error(response.data)
      }
    }
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
      toast.success('Вы успешно вошли.')
      console.log(response.message)
      if (response.data != null) {
        setSetting<string>(LocalStoreKey.TOKEN, `Bearer ${response.data as string}`)
        // location.reload()
        navigationService.redirectPage(RoutePath.SERVICE)
      }
    } else {
      toast.error(response.message)
    }
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}
