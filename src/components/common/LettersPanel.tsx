/**
 * Компонент c буквами
 *
 * @author Markitanov Vadim
 * @since 26.05.2023
 */
import React from 'react'
import { Space } from 'antd'
import Letter, { VOWELS, VOICED_CONSONANTS, VOICELESS_CONSONANTS } from './Letter'

const LettersPanel = (): JSX.Element => {
  return (
    <Space size={1} direction={'vertical'}>
      <Space>
        <span>Краткие гласные:</span> {VOWELS.map(value => (<Letter key={value} value={value} bold/>))}
      </Space>
      <Space>
        <span>Звонкие согласные:</span>{VOICED_CONSONANTS.map(value => (<Letter key={value} value={value} bold/>))}
      </Space>
      <Space>
        <span>Глухие согласные:</span> {VOICELESS_CONSONANTS.map(value => (<Letter key={value} value={value} bold/>))}
      </Space>
    </Space>
  )
}

export default LettersPanel
