/**
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import { configureStore } from '@reduxjs/toolkit'
import user from './userSlice'
import common from './commonSlice'

const store = configureStore({
  reducer: { user, common }
})

export default store
