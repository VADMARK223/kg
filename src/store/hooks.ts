/**
 * Хуки для redux
 *
 * @author Markitanov Vadim
 * @since 17.05.2023
 */
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { CommonState, AppDispatch } from './index'

export const useAppSelector: TypedUseSelectorHook<CommonState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
