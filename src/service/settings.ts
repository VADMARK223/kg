/**
 * Методы для работы с настройками пользователя
 *
 * @author Markitanov Vadim
 * @since 12.03.2023
 */

/**
 * Список доступных ключей в Local Storage
 */
export enum LocalStoreKey {
  TOKEN = 'Token', // Токен авторизации
  TABS_ACTIVE_KEY = 'tabs_active_key', // Ключ активной закладки
  BOOL_KEY = 'bool_key', // Ключ активной закладки
  NUMBER_KEY = 'number_key' // Ключ активной закладки
}

/**
 * Метод забирает настройку из Local Storage по ключу.
 * @param {LocalStoreKey} key - значение ключа.
 * @param {boolean|string|number} defaultValue - значение по умолчанию.
 * @return {boolean|string|number} значение настройки.
 */
export const getSetting = <T extends boolean | string | number> (key: LocalStoreKey, defaultValue: T): T => {
  const result: string | null = localStorage.getItem(key)
  console.log('GET TOKEN:', result)
  if (typeof defaultValue === 'boolean') {
    if (result == null) {
      return defaultValue
    } else {
      return Boolean(result === 'true') as T
    }
  } else if (typeof defaultValue === 'string') {
    if (result == null) {
      return defaultValue
    } else {
      return String(result) as T
    }
  } else if (typeof defaultValue === 'number') {
    if (result == null) {
      return defaultValue
    } else {
      return Number(result) as T
    }
  } else {
    throw new Error('Unknown value type!')
  }
}

/**
 * Метод записывает значение настройки в LocalStore
 * @param {LocalStoreKey} key - значение ключа.
 * @param {boolean|string|number} value - значение настройки.
 */
export const setSetting = <T extends string | boolean | number> (key: LocalStoreKey, value: T): void => {
  console.log('SET TOKEN:', value)
  if (typeof value === 'boolean') {
    localStorage.setItem(key, String(Boolean(value)))
  } else if (typeof value === 'string') {
    localStorage.setItem(key, value)
  } else if (typeof value === 'number') {
    localStorage.setItem(key, String(Number(value)))
  } else {
    console.error('Unknown value type:', typeof value)
  }
}

export const tempSum = (a: number, b: number): number => {
  return a + b
}
