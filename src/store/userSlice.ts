/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { UserInfo } from '../models/dto/UserInfo'

const initialState: UserInfo = {
  tabIndex: 1,
  favoriteWordIds: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserInfo>) => action.payload,
    addFavoriteWordId: (state, action: PayloadAction<number>) => {
      const wordId = action.payload
      state.favoriteWordIds.push(wordId)
      localStorage.setItem('kg_favor_ids', JSON.stringify(state.favoriteWordIds))
    },
    removeFavoriteWordId: (state, action: PayloadAction<number>) => {
      const wordId = action.payload
      state.favoriteWordIds.splice(state.favoriteWordIds.indexOf(wordId), 1)
      localStorage.setItem('kg_favor_ids', JSON.stringify(state.favoriteWordIds))
    }
  }
})

export const { updateUserInfo, addFavoriteWordId, removeFavoriteWordId } = userSlice.actions

export default userSlice.reducer
