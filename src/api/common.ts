/**
 * Общие методы для работы с сервером
 *
 * @author Markitanov Vadim
 * @since 28.03.2023
 */

import type { HTTPError } from 'ky'
import { toast } from 'react-toastify'

/**
 * Метод показывает ошибки запросов
 */
export const showError = (reason: HTTPError) => {
  console.log('reason.response:', reason.response)
  if (reason.response === undefined) {
    toast.error('Нет соединения с сервером. Или ответ не пришел.')
    return
  }
  if (reason.response.status === 404) {
    toast.error('Сервер не может найти запрашиваемый ресурс.')
  } else if (reason.response.status === 400) {
    console.error('Сервер не понимает запрос из-за неверного синтаксиса.')
  } else {
    console.log('Неизвестная ошибка:', reason.response)
  }
}
