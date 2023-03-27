/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
import ky from 'ky'

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

export const validateDic = () => {
  fetch('http://localhost:9000/receive')
    .then(res => {
      console.log('RES', res)
    })
    .catch(err => {
      console.log('err:', err)
    })
}
