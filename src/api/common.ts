/**
 * Общие методы для работы с сервером
 *
 * @author Markitanov Vadim
 * @since 28.03.2023
 */

import type { HTTPError } from 'ky'
import ky from 'ky'
import { toast } from 'react-toastify'
import navigationService from '../service/navigation'
import { getSetting, LocalStoreKey } from '../service/settings'

export const ADMIN_MODE: boolean = process.env.REACT_APP_ADMIN_MODE === 'true'

const PORT: number = 60899 // Java
const BASE_API_URL: string = `http://localhost:${PORT}/`

export const commonApi = ky.create({
  prefixUrl: BASE_API_URL, // Префикс, который следует добавлять перед входным URL-адресом при выполнении запроса. Это может быть любой допустимый URL-адрес, относительный или абсолютный.
  retry: {
    limit: 1 // Максимальное количество повторных попыток неудачных запросов
  },
  hooks: {
    beforeRequest: [request => {
      request.headers.set('Authorization', getSetting<string>(LocalStoreKey.TOKEN, ''))
    }],
    beforeError: [
      (error: HTTPError) => {
        if (error.response.status === 401) {
          navigationService.redirectLoginPage()
        }
        return error
      }
    ]
  }
})

/**
 * Метод показывает ошибки запросов
 */
export const showError = (reason: HTTPError): void => {
  if (reason.response === undefined) {
    toast.error('Нет соединения с сервером. Или ответ не пришел.')
    return
  }

  if (reason.response.status === 401) {
    return
  }

  if (reason.response.status === 404) {
    toast.error('Сервер не может найти запрашиваемый ресурс.')
  } else if (reason.response.status === 400) {
    toast.error('Сервер не понимает запрос из-за неверного синтаксиса.')
  } else if (reason.response.status === 415) {
    toast.error('Сервер отказывается принять запрос, потому что формат содержимого не поддерживается сервером.')
  } else if (reason.response.status === 500) {
    toast.error('Внутренняя ошибка сервера.')
  } else {
    toast.error(`Неизвестная ошибка: ${reason.response.status}`)
  }
}
