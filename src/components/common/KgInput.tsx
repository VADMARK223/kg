/**
 * Компонент ввода с особыми символами
 *
 * @author Markitanov Vadim
 * @since 14.04.2023
 */
import React, { useState, useEffect } from 'react'
import { Input, Button, Space } from 'antd'

interface KgInputProps {
  inputValueCallback: (value: string) => void
}

interface SymbolButtonProps {
  symbol: string
}

const KgInput = (props: KgInputProps): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    setButtonDisable(value === '')
  }, [value])

  const inputSymbolHandler = (symbol: string): void => {
    const newVal = value + symbol.toLowerCase()
    setValue(newVal)
  }

  const SymbolButton = (props: SymbolButtonProps): JSX.Element => {
    return (
      <Button type={'primary'} onClick={() => {
        inputSymbolHandler(props.symbol)
      }}>{props.symbol}</Button>
    )
  }

  const doneHandler = (): void => {
    props.inputValueCallback(value)
    setValue('')
  }

  return (
    <Space.Compact>
      <SymbolButton key={1} symbol={'Ң'}/>
      <SymbolButton key={2} symbol={'Ү'}/>
      <SymbolButton key={3} symbol={'Ө'}/>
      <Input placeholder={'Введите ответ'}
             allowClear
             value={value}
             onChange={(e) => {
               setValue(e.target.value)
             }}/>
      <Button type={'primary'} onClick={doneHandler} disabled={buttonDisable}>Ответить</Button>
    </Space.Compact>
  )
}

export default KgInput
