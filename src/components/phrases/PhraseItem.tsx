/**
 * Компонент фразы разговорника
 *
 * @author Markitanov Vadim
 * @since 08.05.2023
 */
import React from 'react'

interface PhraseItemProps {
  kg: string
  ru: string
}

const PhraseItem = (props: PhraseItemProps): JSX.Element => {
  return (
    <div>
      - {props.kg} <i>(- {props.ru})</i>
    </div>
  )
}

export default PhraseItem
