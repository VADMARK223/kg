/**
 * @author Markitanov Vadim
 * @since 30.03.2023
 */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { DicDto } from '../models/dto/DicDto'

const initialState: DicDto = {
  tags: [],
  types: [],
  words: []
}

const dicSlice = createSlice({
  name: 'dic',
  initialState,
  reducers: {
    getDic: (state, action: PayloadAction<DicDto>) => {
      state.tags = action.payload.tags
      state.types = action.payload.types
      state.words = action.payload.words
    }
  }
})

export const { getDic } = dicSlice.actions

export default dicSlice.reducer
