/**
 * Компонент ссылки на алгоритмическую таблицу аффиксов местного падежа.
 *
 * @author Markitanov Vadim
 * @since 08.08.2023
 */
import React from 'react'
import { RoutePath } from '../../../service/router'
import LinkItem from './LinkItem'

const LinkLocative = (): JSX.Element => {
  return (
    <LinkItem to={RoutePath.LOCATIVE_TABLE} txt={'Аффиксы местного падежа'}/>
  )
}

export default LinkLocative
