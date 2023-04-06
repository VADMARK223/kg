/**
 * @author Markitanov Vadim
 * @since 16.03.2023
 */
export interface DictionaryData {
  [index: string]: any

  id: number | null
  ru: string
  kg: string
  type: number
}
