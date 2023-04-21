/**
 * Компонент ввода с особыми символами
 *
 * @author Markitanov Vadim
 * @since 14.04.2023
 */
import React, { useState, useRef } from 'react'
import { Input, Button, Space } from 'antd'

interface KgInputProps {
  valueState: [string, React.Dispatch<React.SetStateAction<string>>]
}

interface SymbolButtonProps {
  symbol: string
}

const KgInput = (props: KgInputProps): JSX.Element => {
  const value = props.valueState[0]
  const setValue = props.valueState[1]
  const [cursorPosition, setCursorPosition] = useState<number | null>(0)
  const inputRef = useRef<any>()

  const SymbolButton = (props: SymbolButtonProps): JSX.Element => {
    return (
      <Button type={'primary'}
              onFocus={() => {
                inputRef.current.focus()
              }}
              onClick={() => {
                const selectionStart: number = inputRef.current.input.selectionStart
                setCursorPosition(selectionStart + 1)
                const newVal = value.slice(0, selectionStart) + props.symbol.toLowerCase() + value.slice(selectionStart)
                setValue(newVal)
              }}>{props.symbol}</Button>
    )
  }

  return (
    <Space.Compact>
      <SymbolButton key={1} symbol={'Ң'}/>
      <SymbolButton key={2} symbol={'Ү'}/>
      <SymbolButton key={3} symbol={'Ө'}/>
      <Input placeholder={'Кыргыский'}
             ref={inputRef}
             allowClear
             value={value}
             onFocus={() => {
               if (cursorPosition != null) {
                 inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
               }
             }}
             onChange={(e) => {
               setValue(e.target.value)
               // setCursorPosition(e.target.value.length)
               setCursorPosition(null)
             }}/>
    </Space.Compact>
  )
}

export default KgInput
