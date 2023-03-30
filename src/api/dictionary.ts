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
import { toast } from 'react-toastify'

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

export const getDic = () => {
  commonApi.get('get_dic').json<DicDto>().then(value => {
    console.log('Tags:' + String(value.tags.length))
    console.log('Words:' + String(value.words.length))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод добавляет слово в словарь
 */
export const addWord = () => {
  const newWord: WordDto = {
    ru: 'Вадим',
    kg: 'Vadim'
  }
  commonApi.post('add_word', {
    body: JSON.stringify(newWord, null, 2)
  }).then(response => {
    if (response.status === 200) {
      toast.success('Слово успешно добавлено.')
    } else {
      toast.error('Статус ответа: ' + String(response.status))
    }
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
