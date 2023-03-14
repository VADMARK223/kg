/**
 * @author Markitanov Vadim
 * @since 14.03.2023
 */

import { tempSum, getSetting, LocalStoreKey, setSetting } from '../../service/settings'

test('Get setting for Locale Store', () => {
  const stringValue = getSetting<number>(LocalStoreKey.NUMBER_KEY, -100)
  console.log('stringValue:', stringValue)

  setSetting<number>(LocalStoreKey.NUMBER_KEY, 888)
  const stringValue1 = getSetting<number>(LocalStoreKey.NUMBER_KEY, -100)
  console.log('stringValue1:', stringValue1)

  expect(tempSum(1, 3)).toBe(4)
})
