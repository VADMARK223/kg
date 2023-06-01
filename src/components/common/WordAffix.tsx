/**
 * Компонент выделения аффиксов у слова
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'
import Letter from './Letter'

interface WordAffixProps {
  root: string | JSX.Element
  affix: string | JSX.Element
}

const WordAffix = (props: WordAffixProps): JSX.Element => {
  const { root, affix } = props
  if (React.isValidElement(affix)) {
    const letter = affix as JSX.Element
    return <>
      {root}<Letter value={letter.props.value as string} bold={true} underline={true}/>
    </>
  } else {
    return (
      <>
        {root}<b><u>{affix as string}</u></b>
      </>
    )
  }
}

export default WordAffix
