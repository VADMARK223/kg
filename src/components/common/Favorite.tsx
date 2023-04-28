/**
 * Компонент добавления/удаления идентификатора слова в избранные
 *
 * @author Markitanov Vadim
 * @since 28.04.2023
 */
import React, { useState } from 'react';
import { Rate } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addFavoriteWordId, removeFavoriteWordId } from '../../store/userSlice'

interface FavoriteProps {
  wordId: number
}

const Favorite = (props: FavoriteProps): JSX.Element => {
  const favoriteWordIds = useSelector((state: any): number[] => state.user.favoriteWordIds)
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(favoriteWordIds.includes(props.wordId))
  const onChange = (value: number): void => {
    const checked = value === 1
    setChecked(checked)
    if (checked) {
      dispatch(addFavoriteWordId(props.wordId))
    } else {
      dispatch(removeFavoriteWordId(props.wordId))
    }
  }
  return (
    <Rate count={1} defaultValue={checked ? 1 : undefined} onChange={onChange}/>
  );
}

export default Favorite