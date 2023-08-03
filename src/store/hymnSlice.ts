/**
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HymnState {
  isHovered: boolean
  key: string | null
  ruMode: boolean
}

const initialState: HymnState = {
  isHovered: false,
  key: null,
  ruMode: false
}

const hymnSlice = createSlice({
  name: 'hymn',
  initialState,
  reducers: {
    updateHymnState: (state, action: PayloadAction<HymnState>) => {
      const newState: HymnState = action.payload
      state.isHovered = newState.isHovered
      state.key = newState.key
      state.ruMode = newState.ruMode
    }
  }
})

export const { updateHymnState } = hymnSlice.actions

export default hymnSlice.reducer
