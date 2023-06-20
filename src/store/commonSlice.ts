/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface CommonState {
  activeKey: string
}

const initialState: CommonState = {
  activeKey: '0'
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateActiveKey: (state, action: PayloadAction<string>) => {
      state.activeKey = action.payload
    }
  }
})

export const { updateActiveKey } = commonSlice.actions

export default commonSlice.reducer
