/**
 * Компонент выделения аффиксов у слова
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'

interface WordAffixProps {
  root: string
  affix: string
}

const WordAffix = (props: WordAffixProps): JSX.Element => {
  const { root, affix } = props
  // а - лар
  return (
    <>
      {root}<b><u>{affix}</u></b>
    </>
  )
}

export default WordAffix