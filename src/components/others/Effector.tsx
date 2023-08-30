/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.08.2023
 */
import React from 'react'
import { Button, Space } from 'antd'
import { useStore } from 'effector-react'
import { createStore, createEvent, createEffect } from 'effector'

// Events
const countStore = createStore(0)
const increment = createEvent('Increment.')
const decrement = createEvent('Decrement.')
const resetCountStore = createEvent('Reset count store.')

countStore
  .on(increment, (count) => count + 1)
  .on(decrement, state => state - 1)
  .reset(resetCountStore)

// Effects
const getTags = createEffect('Get tags.')
getTags.use(async () => {
  await fetch('https://example.com/get-user/').then(res => {
    console.log('Result', res)
  })
})

const tagsStore = createStore([])
tagsStore.watch(console.log)

const Effector = (): JSX.Element => {
  const count = useStore(countStore)

  return (
    <Space direction={'vertical'}>
      <Space>
        <Button type={'primary'} onClick={() => {
          increment()
        }}>+</Button>
        <Button type={'primary'} onClick={() => {
          decrement()
        }}>-</Button>
        <Button type={'primary'} onClick={() => {
          resetCountStore()
        }}>Reset</Button>
        <span>Count: {count}</span>
      </Space>
      <Button onClick={() => {
        getTags(null)
      }}>Get tags</Button>
    </Space>
  )
}

export default Effector
