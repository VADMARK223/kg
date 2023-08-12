/**
 * Компонент кнопки навигации в боковом меню.
 *
 * @author Markitanov Vadim
 * @since 12.08.2023
 */
import React from 'react'
import { Button } from 'antd'
import { Link, To } from 'react-router-dom'
import { menuEventManager } from './menuEventManager'

interface MenuButtonLinkProps {
  to: To
  label: string
  hide?: boolean
}

const MenuButtonLink = (props: MenuButtonLinkProps): JSX.Element => {
  const { to, label, hide = false } = props
  const style: React.CSSProperties = {
    display: hide ? 'none' : undefined
  }

  const handlerClose = (): void => {
    menuEventManager.close()
  }

  return (
    <Link to={to} onClick={handlerClose} style={style}>
      <Button type={'primary'} size={'small'}>{label}</Button>
    </Link>
  )
}

export default MenuButtonLink
