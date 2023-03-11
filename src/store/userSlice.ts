/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { UserInfo } from '../models/dto/UserInfo'

const initialState: UserInfo = {
  tabIndex: 1
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserInfo>) => action.payload
  }
})

export const { updateUserInfo } = userSlice.actions

export default userSlice.reducer
