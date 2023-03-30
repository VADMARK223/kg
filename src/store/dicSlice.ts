/**
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DicDto } from '../models/dto/DicDto'

const initialState: DicDto = {
  tags: [],
  words: []
}

const dicSlice = createSlice({
  name: 'dic',
  initialState,
  reducers: {
    getDic: (state, action: PayloadAction<DicDto>) => {
      state.tags = action.payload.tags
      state.words = action.payload.words
    }
  }
})

export const { getDic } = dicSlice.actions

export default dicSlice.reducer
