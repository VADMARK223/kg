/**
 * Компонент ссылки на алгоритмическую таблицу дательного падежа.
 *
 * @author Markitanov Vadim
 * @since 10.08.2023
 */
import React from 'react';
import { RoutePath } from '../../../service/router'
import LinkItem from './LinkItem'

const LinkDative = (): JSX.Element => {
  return (
    <LinkItem to={RoutePath.DATIVE} txt={'Аффиксы дательного падежа'}/>
  )
}

export default LinkDative