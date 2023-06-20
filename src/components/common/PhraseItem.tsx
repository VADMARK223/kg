/**
 * Компонент фразы
 *
 * @author Markitanov Vadim
 * @since 14.05.2023
 */
import React from 'react'

interface PhraseItemProps {
  kg: string | JSX.Element
  ru: string
}

const PhraseItem = (props: PhraseItemProps): JSX.Element => {
  return (
    <div>
      - {props.kg}&nbsp;&nbsp;<i>- {props.ru}</i>
    </div>
  )
}

export default PhraseItem
