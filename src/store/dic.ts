/**
 * @author Markitanov Vadim
 * @since 21.12.2023
 */
import { createEffect, createStore } from 'effector'
import { DicDto } from '../models/dto/DicDto'
import { commonApi } from '../api/common'

const initialState: DicDto = {
  tags: [],
  types: [],
  words: []
}

export const $dic = createStore(initialState, { name: 'Хранишще словаря.' })

export const dicFetchFx = createEffect<void, DicDto>({
  name: 'Эффект запроса словаря',
  handler: async () => {
    try {
      return await commonApi.get('get_dic').json<DicDto>()
    } catch (error: any) {
      return initialState
    }
  }
})

$dic.on(dicFetchFx.doneData, (state, payload) => payload)
