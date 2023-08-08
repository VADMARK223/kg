/**
 * Компонент ссылки перехода
 *
 * @author Markitanov Vadim
 * @since 08.08.2023
 */
import React from 'react'
import { LinkOutlined } from '@ant-design/icons'
import { Link, To } from 'react-router-dom'

interface LinkItemProps {
  to: To
  txt: string
}

const LinkItem = (props: LinkItemProps): JSX.Element => {
  const { to, txt } = props

  return (
    <Link to={to} target={'_blank'}>{txt} <LinkOutlined/></Link>
  )
}

export default LinkItem
