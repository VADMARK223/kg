/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'

const store = configureStore({
  reducer: { user }
})

export default store
