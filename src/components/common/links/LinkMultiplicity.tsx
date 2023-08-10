/**
 * Компонент ссылки на алгоритмическую таблицу аффиксов множественного числа.
 *
 * @author Markitanov Vadim
 * @since 08.08.2023
 */
import React from 'react'
import { RoutePath } from '../../../service/router'
import LinkItem from './LinkItem'

const LinkMultiplicity = (): JSX.Element => {
  return (
    <LinkItem to={RoutePath.MULTIPLICITY_TABLE} txt={'Аффиксы множественного числа'}/>
  )
}

export default LinkMultiplicity
