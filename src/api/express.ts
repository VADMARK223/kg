import type { HTTPError } from 'ky'
import ky from 'ky'
import { showError } from './common'
import type { DicDto } from '../models/dto/DicDto'

/**
 * API для работы с Express JS
 *
 * @author Markitanov Vadim
 * @since 23.04.2023
 */
const BASE_API_URL: string = 'http://localhost:9000/'

const expressApi = ky.create({
  prefixUrl: BASE_API_URL,
  retry: {
    limit: 1 // Максимальное количество повторных попыток неудачных запросов
  }
})

export const exportDic = (dto: DicDto): void => {
  console.log('dto', dto)
  expressApi.post('export_dic', {
    json: dto
  }).json<DicDto>().then(value => {
    console.log('value', value)
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}
