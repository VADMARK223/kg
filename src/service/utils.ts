import { VOWELS, VOICED_CONSONANTS, VOICELESS_CONSONANTS } from '../components/common/Letter'

/**
 * @author Markitanov Vadim
 * @since 15.04.2023
 */
export const generateRandomInteger = (max: number): number => Math.floor(Math.random() * max) + 1

/**
 * Количество цифр в числе.
 *
 * @param {number} value - число.
 * @returns {number} количество цифр
 */
export const countDigitsInNumber = (value: number): number => String(value).length

/**
 * Метод перемешивания массива
 * @param {string[]} array
 * @returns {string[]}
 */
export const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
 * Метод проверяет гласная ли это буква.
 * @param {string} letter - буква.
 * @returns {boolean} результат.
 */
export const isVowelLetter = (letter: string): boolean => {
  return VOWELS.includes(letter)
}

/**
 * Метод проверяет звонкая согласная ли это буква.
 * @param {string} letter - буква.
 * @returns {boolean} результат.
 */
export const isVoicedConsonant = (letter: string): boolean => {
  return VOICED_CONSONANTS.includes(letter)
}

/**
 * Метод проверяет глухая согласная ли это буква.
 * @param {string} letter - буква.
 * @returns {boolean} результат.
 */
export const isVoicelessConsonant = (letter: string): boolean => {
  return VOICELESS_CONSONANTS.includes(letter)
}
