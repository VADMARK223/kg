/**
 * Компонент ввода с особыми символами
 *
 * @author Markitanov Vadim
 * @since 14.04.2023
 */
import React, { useRef } from 'react'
import { Input, Button, Space } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

interface KgInputProps {
  valueState: [string, React.Dispatch<React.SetStateAction<string>>]
  placeholder?: string
  width?: string
  onFocus?: () => void
  onBlur?: () => void
  handlerSearch?: () => void
}

interface SymbolButtonProps {
  symbol: string
}

const KgInput = (props: KgInputProps): JSX.Element => {
  const { placeholder = 'Кыргызский', width = '150px', onFocus, onBlur, handlerSearch } = props
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
             value={value}
             style={{ width }}
             onFocus={onFocus}
             onBlur={onBlur}
             onChange={(e) => {
               setValue(e.target.value)
             }}
             suffix={<CloseCircleOutlined style={{
               color: 'rgba(0, 0, 0, 0.25)'
             }} onClick={() => {
               setValue('')
               if (handlerSearch !== undefined) {
                 handlerSearch()
               }
             }}/>
             }
             className={value.length > 0 ? '' : 'hide-icon'}
      />
    </Space.Compact>
  )
}

export default KgInput
