/**
 * Компонент аффикса
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'

interface AffixItemProps {
  value: string
  inWord?: boolean // Обособленный ли аффикс или в составе слова
}

const AffixItem = (props: AffixItemProps): JSX.Element => {
  const { value, inWord = false } = props
  return (
    <span style={{ color: 'orangered' }}>
      {inWord ? <b><u>{value}</u></b> : <b>-{value}</b>}
    </span>
  )
}

export default AffixItem
