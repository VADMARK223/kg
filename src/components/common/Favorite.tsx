/**
 * Компонент добавления/удаления идентификатора слова в избранные
 *
 * @author Markitanov Vadim
 * @since 28.04.2023
 */
import React, { useState, useEffect } from 'react'
import { Rate } from 'antd'
import { addFavoriteWordId, removeFavoriteWordId } from '../../store/userSlice'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

interface FavoriteProps {
  wordId: number
}

const Favorite = (props: FavoriteProps): JSX.Element => {
  const { wordId } = props
  const favoriteWordIds = useAppSelector(state => state.user.favoriteWordIds)
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState(favoriteWordIds.includes(wordId))

  useEffect(() => {
    setChecked(favoriteWordIds.includes(wordId))
  }, [wordId])

  const onChange = (value: number): void => {
    const checked = value === 1
    setChecked(checked)
    if (checked) {
      dispatch(addFavoriteWordId(wordId))
    } else {
      dispatch(removeFavoriteWordId(wordId))
    }
  }

  return (
    <Rate count={1}
          value={checked ? 1 : 0}
          onChange={onChange}/>
  )
}

export default Favorite
