/**
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
export interface DictionaryData {
  [index: string]: any

  id?: string
  ru: string
  kg: string
  tags: number | number[]
}
