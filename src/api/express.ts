import type { HTTPError } from 'ky'
import ky from 'ky'
import { showError } from './common'
import type { DicDto } from '../models/dto/DicDto'
import { toast } from 'react-toastify'

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
  expressApi.post('export_dic', {
    json: dto
  }).json<DicDto>().then(value => {
    toast.success('Словарь успешно экспортирован.')
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

export const runBuild = (): void => {
  expressApi.post('build', { timeout: false }).json<boolean>().then(value => {
    toast.success('Проект собран.' + value)
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}
