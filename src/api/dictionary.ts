/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
import type { HTTPError } from 'ky'
import ky from 'ky'
import data from '../assets/dictionary.json'
import { showError } from './common'

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

export const createDic = () => {
  commonApi.post('create', {
    body: JSON.stringify(data, null, 2)
  }).then(value => {
    console.log('good:' + String(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

export const getDic = () => {
  commonApi.get('get_dic').text().then(value => {
    console.log('Dic:' + String(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

export const validateDic = () => {
  commonApi.get('receive').then(value => {
    console.log('good:' + String(value))
  }).catch(reason => {
    console.log('Errro:', reason)
  })
}
