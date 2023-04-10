import { TagDto } from './TagDto'

/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
export interface WordDto {
  id: number | null
  ru: string
  kg: string
  type: number
  tags: TagDto[]
}
