/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
import type { HTTPError } from 'ky'
import { showError, commonApi } from './common'
import type { DicDto } from '../models/dto/DicDto'
import type { WordDto } from '../models/dto/WordDto'
import { getDic } from '../store/dicSlice'
import { toast } from 'react-toastify'
import type { ResponseDto } from '../models/dto/ResponseDto'

export const fetchDic = (dispatch: any): void => {
  commonApi.get('dic_get').json<DicDto>().then(value => {
    dispatch(getDic(value))
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод добавляет/редактирует слово в словаре
 */
export const saveWord = (dispatch: any, newWord: WordDto): void => {
  const editMode = newWord.id != null
  newWord.ru = newWord.ru.charAt(0).toUpperCase() + newWord.ru.slice(1)
  newWord.kg = newWord.kg.charAt(0).toUpperCase() + newWord.kg.slice(1)
  commonApi.post('save_word', {
    json: newWord
  }).json<boolean>().then(response => {
    if (response) {
      if (editMode) {
        toast.success('Слово успешно изменено.')
      } else {
        toast.success('Слово успешно добавлено.')
      }

      fetchDic(dispatch)
    }
  }).catch((reason: HTTPError) => {
    showError(reason)
  })
}

/**
 * Метод удаляет слово в словаря
 */
export const removeWord = (dispatch: any, id: number): void => {
  commonApi.delete('delete_word', {
    body: String(id)
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
