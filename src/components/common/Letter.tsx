/**
 * Компонент буквы
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'
import { Tooltip } from 'antd'

/**
 * Гласные
 */
export const VOWELS_NAME: string = 'Гласная'
export const VOWELS: string[] = ['а', 'э', 'о', 'е', 'ө', 'у', 'ү', 'ы', 'и']

/**
 * Звонкие согласные
 */
export const VOICED_CONSONANTS_NAME: string = 'Звонкая согласная'
export const VOICED_CONSONANTS: string[] = ['б', 'в', 'г', 'д', 'ж', 'з', 'л', 'м', 'н', 'ң', 'р', 'й']

/**
 * Глухие согласные
 */
export const VOICELESS_CONSONANTS_NAME: string = 'Глухая согласная'
export const VOICELESS_CONSONANTS: string[] = ['п', 'ф', 'к', 'т', 'ш', 'с', 'х', 'ч', 'щ']

interface LetterProps {
  value: string
  bold?: boolean
  underline?: boolean
}

const Letter = (props: LetterProps): JSX.Element => {
  const { value, bold = false, underline = false } = props

  const getTooltip = (): string => {
    if (VOWELS.includes(value)) {
      return VOWELS_NAME
    }

    if (VOICED_CONSONANTS.includes(value)) {
      return VOICED_CONSONANTS_NAME
    }

    if (VOICELESS_CONSONANTS.includes(value)) {
      return VOICELESS_CONSONANTS_NAME
    }

    return 'Неизвестный тип буквы'
  }

  const getColor = (): string => {
    if (VOWELS.includes(value)) {
      return 'red'
    }

    if (VOICED_CONSONANTS.includes(value)) {
      return 'green'
    }

    if (VOICELESS_CONSONANTS.includes(value)) {
      return 'blue'
    }

    return 'black'
  }

  const getBold = (): 'bold' | undefined => {
    return bold ? 'bold' : undefined
  }

  const getUnderline = (): 'underline' | undefined => {
    return underline ? 'underline' : undefined
  }

  return (
    <Tooltip title={getTooltip()}>
    <span style={{ cursor: 'pointer', color: getColor(), fontWeight: getBold(), textDecoration: getUnderline() }}>
      {value}
    </span>
    </Tooltip>
  )
}

export default Letter
