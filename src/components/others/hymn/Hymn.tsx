/**
 * Компонент гимна Кыргызского языка
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { fetchDic } from '../../../api/dictionary'
import HymnLine from './HymnLine'
import HymnWord from './HymnWord'

const Hymn = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

  return (
    <>
      <HymnLine first={<span>В <HymnWord ru={'ночь'} display={'ночи'}/> было тихо.</span>}
                second={<span><HymnWord kg={'Тун'}/> жарымы болуп калаган.</span>}
      />
    </>
  )
}

export default Hymn
