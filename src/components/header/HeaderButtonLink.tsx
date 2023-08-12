/**
 * Компонент кнопки навигации в боковой панели.
 *
 * @author Markitanov Vadim
 * @since 12.08.2023
 */
import React from 'react'
import { Button } from 'antd'
import { Link, To } from 'react-router-dom'

interface HeaderButtonLinkProps {
  to: To
  label: string
  onClose: () => void
  hide?: boolean
}

const HeaderButtonLink = (props: HeaderButtonLinkProps): JSX.Element => {
  const { to, label, onClose, hide = false } = props
  const style: React.CSSProperties = {
    display: hide ? 'none' : undefined
  }
  return (
    <Link to={to} onClick={onClose} style={style}>
      <Button type={'primary'} size={'small'}>{label}</Button>
    </Link>
  )
}

export default HeaderButtonLink
