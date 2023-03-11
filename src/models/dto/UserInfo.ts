/**
 * Модель данных пользователя
 *
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
export interface UserInfo {
  id?: string
  firstName?: string
  lastName?: string
  middleName?: string
  email?: string
  login?: string
  regionId?: string
  locale?: string
  // TODO: Temp
  tabIndex: number
}
