/**
 * Компонент аффикса
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'

interface AffixItemProps {
  value: string
}

const AffixItem = (props: AffixItemProps): JSX.Element => {
  const { value } = props
  return (
    <span style={{ color: 'orangered' }}>
      <b>-{value}</b>
    </span>
  )
}

export default AffixItem
