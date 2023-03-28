/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import { TagDto } from './TagDto'
import { WordDto } from './WordDto'

export interface DicDto {
  tags: TagDto[]
  words: WordDto[]
}
