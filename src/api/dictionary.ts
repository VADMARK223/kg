/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
import type { HTTPError } from 'ky'
import ky from 'ky'
import data from '../assets/dictionary.json'
import { showError } from './common'
import { DicDto } from '../models/dto/DicDto'
import { WordDto } from '../models/dto/WordDto'
import { getDic } from '../store/dicSlice'

const BASE_API_URL: string = 'http://localhost:9000/'

export const getDictionary = () => {
  fetch('http://localhost:9000/receive')
    .then(res => {
      console.log('RES', res)
    })
    .catch(err => {
      console.log('err:', err)
    })
}

const commonApi = ky.create({
  prefixUrl: BASE_API_URL, // Префикс, который следует добавлять перед входным URL-адресом при выполнении запроса. Это может быть любой допустимый URL-адрес, относительный или абсолютный.
  retry: {
    limit: 1 // Максимальное количество повторных попыток неудачных запросов
  }
})

export const setDic = () => {
  commonApi.post('set_dic', {
    body: JSON.stringify(data, null, 2)
  }).then(value => {
    console.log('good:' + String(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

export const fetchDic = (dispatch: any) => {
  commonApi.get('get_dic').json<DicDto>().then(value => {
    console.log('Fetch dic Tags:' + String(value.tags.length))
    console.log('Fetch dic Words:' + String(value.words.length))
    dispatch(getDic(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод добавляет слово в словарь
 */
export const addWord = (dispatch: any, newWord: WordDto) => {
  commonApi.post('add_word', {
    body: JSON.stringify(newWord, null, 2)
  }).json<DicDto>().then(response => {
    console.log('Add word dic Tags:' + String(response.tags.length))
    console.log('Add word dic Words:' + String(response.words.length))
    dispatch(getDic(response))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод удаляет слово в словаря
 */
export const removeWord = (dispatch: any, id: string | undefined) => {
  commonApi.delete('remove_word', {
    body: JSON.stringify(id)
  }).json<DicDto>().then(response => {
    dispatch(getDic(response))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}
