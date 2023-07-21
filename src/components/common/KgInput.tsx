/**
 * Компонент ввода с особыми символами
 *
 * @author Markitanov Vadim
 * @since 14.04.2023
 */
import React, { useRef } from 'react'
import { Input, Button, Space } from 'antd'

interface KgInputProps {
  valueState: [string, React.Dispatch<React.SetStateAction<string>>]
  placeholder?: string
  width?: string
}

interface SymbolButtonProps {
  symbol: string
}

const KgInput = (props: KgInputProps): JSX.Element => {
  const { placeholder = 'Кыргызский', width = '150px' } = props
  const value = props.valueState[0]
  const setValue = props.valueState[1]
  const inputRef = useRef<any | null>()

  const SymbolButton = (props: SymbolButtonProps): JSX.Element => {
    const handlerButton = (): void => {
      if (inputRef.current != null) {
        const selectionStart: number = inputRef.current.input.selectionStart
        const newVal = value.slice(0, selectionStart) + props.symbol.toLowerCase() + value.slice(selectionStart)
        setValue(newVal)
        inputRef.current.focus()
        setTimeout(() => {
          const selectionPosition: number = selectionStart + 1
          inputRef.current.setSelectionRange(selectionPosition, selectionPosition)
        }, 0)
      }
    }
    return (
      <Button type={'primary'} onClick={handlerButton}>{props.symbol}</Button>
    )
  }

  return (
    <Space.Compact>
      <SymbolButton key={1} symbol={'Ң'}/>
      <SymbolButton key={2} symbol={'Ү'}/>
      <SymbolButton key={3} symbol={'Ө'}/>
      <Input placeholder={placeholder}
             ref={inputRef}
             allowClear
             value={value}
             style={{ width }}
             onChange={(e) => {
               setValue(e.target.value)
             }}/>
    </Space.Compact>
  )
}

export default KgInput
