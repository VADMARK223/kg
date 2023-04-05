/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import type { TagDto } from './TagDto'
import type { WordDto } from './WordDto'
import type { TypeDto } from './TypeDto'

export interface DicDto {
  types: TypeDto[]
  words: WordDto[]
  tags: null | TagDto[]
}
