/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import { TagDto } from './TagDto'
import { WordDto } from './WordDto'
import { TypeDto } from './TypeDto'

export interface DicDto {
  tags: TagDto[]
  types: TypeDto[]
  words: WordDto[]
}
