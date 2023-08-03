/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import common from './commonSlice'
import dic from './dicSlice'
import hymn from './hymnSlice'

const store = configureStore({
  reducer: { user, common, dic, hymn }
})

export type CommonState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
