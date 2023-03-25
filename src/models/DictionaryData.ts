/**
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
export interface DictionaryData {
  [index: string]: string | number | number[] | undefined

  ru: string
  kg: string
  tags?: number | number[]
}
