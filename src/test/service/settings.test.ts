/**
 * @author Markitanov Vadim
 * @since 14.03.2023
 */

import { getSetting, LocalStoreKey, setSetting } from '../../service/settings'

describe('Local store.', () => {
  test('String for Local Store.', () => {
    const STRING_KEY: LocalStoreKey = 'string_key' as LocalStoreKey // Ключ для числовых значений
    const DEFAULT_VALUE: string = 'default_value' // Значение по умолчанию для числовых значений

    const stringValueInit = getSetting<string>(STRING_KEY, DEFAULT_VALUE)
    expect(stringValueInit).toBeTruthy()
    expect(stringValueInit).toEqual(DEFAULT_VALUE)
    expect(stringValueInit).toBe(DEFAULT_VALUE)

    const NEW_VALUE: string = '999'
    setSetting<string>(STRING_KEY, NEW_VALUE)

    const stringValueAfterSetting = getSetting<string>(STRING_KEY, DEFAULT_VALUE)
    expect(stringValueAfterSetting).toEqual(NEW_VALUE)
    expect(stringValueAfterSetting).toBe(NEW_VALUE)
  })

  test('Number for Local Store.', () => {
    const NUMBER_KEY: LocalStoreKey = 'number_key' as LocalStoreKey
    const DEFAULT_VALUE: number = -1

    const numberKeyValueInit = getSetting<number>(NUMBER_KEY, DEFAULT_VALUE)
    expect(numberKeyValueInit).toEqual(DEFAULT_VALUE)
    expect(numberKeyValueInit).toBe(DEFAULT_VALUE)

    const NEW_VALUE: number = 999
    setSetting<number>(NUMBER_KEY, NEW_VALUE)

    const numberKeyValueAfterSetting = getSetting<number>(NUMBER_KEY, DEFAULT_VALUE)
    expect(numberKeyValueAfterSetting).toEqual(NEW_VALUE)
    expect(numberKeyValueAfterSetting).toBe(NEW_VALUE)
  })

  test('Boolean for Local Store.', () => {
    const BOOLEAN_KEY: LocalStoreKey = 'bool_key' as LocalStoreKey
    const DEFAULT_VALUE: boolean = true

    const valueInit = getSetting<boolean>(BOOLEAN_KEY, DEFAULT_VALUE)
    expect(valueInit).toBeTruthy()
    expect(valueInit).toEqual(DEFAULT_VALUE)
    expect(valueInit).toBe(DEFAULT_VALUE)

    const NEW_VALUE_FALSE: boolean = false
    setSetting<boolean>(BOOLEAN_KEY, NEW_VALUE_FALSE)
    let valueAfterSetting = getSetting<boolean>(BOOLEAN_KEY, DEFAULT_VALUE)
    expect(valueAfterSetting).toBeFalsy()
    expect(valueAfterSetting).toEqual(NEW_VALUE_FALSE)
    expect(valueAfterSetting).toBe(NEW_VALUE_FALSE)

    const NEW_VALUE_TRUE: boolean = true
    setSetting<boolean>(BOOLEAN_KEY, NEW_VALUE_TRUE)
    valueAfterSetting = getSetting<boolean>(BOOLEAN_KEY, DEFAULT_VALUE)
    expect(valueAfterSetting).toBeTruthy()
    expect(valueAfterSetting).toEqual(NEW_VALUE_TRUE)
    expect(valueAfterSetting).toBe(NEW_VALUE_TRUE)
  })
})


