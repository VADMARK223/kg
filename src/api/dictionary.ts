/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
import type { HTTPError } from 'ky'
import ky from 'ky'
import { showError } from './common'
import type { DicDto } from '../models/dto/DicDto'
import type { WordDto } from '../models/dto/WordDto'
import { getDic } from '../store/dicSlice'
import { toast } from 'react-toastify'
import { ResponseDto } from '../models/dto/ResponseDto'

// const PORT: number = 9000 // Express
const PORT: number = 8080 // Java
const BASE_API_URL: string = `http://localhost:${PORT}/` // Express

const commonApi = ky.create({
  prefixUrl: BASE_API_URL, // Префикс, который следует добавлять перед входным URL-адресом при выполнении запроса. Это может быть любой допустимый URL-адрес, относительный или абсолютный.
  retry: {
    limit: 1 // Максимальное количество повторных попыток неудачных запросов
  }
})

export const fetchDic = (dispatch: any): void => {
  commonApi.get('dic_get').json<DicDto>().then(value => {
    console.log('value:', value)
    dispatch(getDic(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод добавляет/редактирует слово в словаре
 */
export const saveWord = (dispatch: any, newWord: WordDto): void => {
  newWord.ru = newWord.ru.charAt(0).toUpperCase() + newWord.ru.slice(1)
  newWord.kg = newWord.kg.charAt(0).toUpperCase() + newWord.kg.slice(1)
  commonApi.post('save_word', {
    json: newWord
  }).json<boolean>().then(response => {
    if (response) {
      toast.success('Слово успешно добавлено.')
      fetchDic(dispatch)
    }
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод удаляет слово в словаря
 */
export const removeWord = (dispatch: any, id: string | undefined): void => {
  commonApi.delete('delete_word', {
    body: id
  }).json<ResponseDto>().then(response => {
    console.log('response:', response)
    if (response.status) {
      toast.success('Слово успешно удалено.')
      fetchDic(dispatch)
    } else {
      toast.error(response.message)
    }
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}
