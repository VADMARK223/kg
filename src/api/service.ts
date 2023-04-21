import { commonApi } from './common'
import type { TagDto } from '../models/dto/TagDto'
import type { ResponseDto } from '../models/dto/ResponseDto'

/**
 * @author Markitanov Vadim
 * @since 21.04.2023
 */
export const fetchTags = (tagsLoadedCallback: (tags: TagDto[]) => void): void => {
  commonApi.get('get_tags').json<ResponseDto>().then(response => {
    if (response.status) {
      const tags: TagDto[] = response.data
      tagsLoadedCallback(tags)
    }
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}

export const addTag = (newTag: TagDto, tagsLoadedCallback: (tags: TagDto[]) => void): void => {
  commonApi.post('save_tag', {
    json: newTag
  }).json<ResponseDto>().then(response => {
    if (response.status) {
      const tags: TagDto[] = response.data
      tagsLoadedCallback(tags)
    }
  }).catch(reason => {
    console.warn('Error fetch user info', reason)
  })
}
