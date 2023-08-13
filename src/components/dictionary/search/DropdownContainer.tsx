/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 13.08.2023
 */
import React from 'react'

interface DropdownContainerProps {
  children: JSX.Element
}

const DropdownContainer = (props: DropdownContainerProps): JSX.Element | null => {
  const { children } = props

  const style: React.CSSProperties = {
    display: 'block'
  }

  return (
    <span style={style}>
      {children}
    </span>
  )
}

export default DropdownContainer
