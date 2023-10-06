/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 30.08.2023
 */
import React from 'react'
import { Button, Space } from 'antd'
import { useStore, useEvent } from 'effector-react'
import { createStore, createEvent, createEffect } from 'effector'
import { unLogger } from '../../index'
import { configure } from 'effector-logger'

// Events
const countStore = createStore(0, { name: 'Count store.' })
const incrementCount = createEvent('Increment count.')
const decrementCount = createEvent('Decrement count.')
const resetCountStore = createEvent('Reset count store.')

countStore
  .on(incrementCount, (count) => count + 1)
  .on(decrementCount, state => state - 1)
  .reset(resetCountStore)

// Effects
const getTags = createEffect('Get tags.')
getTags.use(async () => {
  await fetch('http://localhost:60899/get_dic').then(res => {
    res.json().then(value => {
      console.log('Result', value)
    })
  })
})

const fetchDicFx = createEffect('Fetch dic effect.', { handler: async (url: string) => await fetch(url).then(async req => await req.json()) })
const $dicStore = createStore(null, { name: 'Dic store.' }).on(fetchDicFx.doneData, (state, result) => result.words)

const tagsStore = createStore([], { name: 'Tags store' })
tagsStore.watch(console.log)

const Effector = (): JSX.Element => {
  const count = useStore(countStore)
  const dic = useStore($dicStore)
  const dicPending = useStore(fetchDicFx.pending)
  const fetchEvent = useEvent(fetchDicFx)

  return (
    <Space direction={'vertical'}>
      <Space>
        <Button type={'primary'} onClick={() => {
          incrementCount()
        }}>+</Button>
        <Button type={'primary'} onClick={() => {
          decrementCount()
        }}>-</Button>
        <Button type={'primary'} onClick={() => {
          resetCountStore()
        }}>Reset</Button>
        <span>Count: {count}</span>
      </Space>
      <Space>
        <Button onClick={() => {
          configure([incrementCount, decrementCount], { log: 'disabled' })
        }}>Отписаться от логирования Unit</Button>
        <Button onClick={() => {
          configure([incrementCount, decrementCount], { log: 'enabled' })
        }}>Подписать на логирование Unit</Button>
      </Space>
      <Button onClick={() => {
        unLogger()
      }}>Прекратить логирование</Button>
      <Button onClick={() => {
        getTags(null)
      }}>Get tags</Button>
      <Button type={'primary'} disabled={dicPending} onClick={() => {
        fetchEvent('http://localhost:60899/get_dic').then(value => {
          console.log('VAle', value)
        })
      }}>
        Fetch dic
      </Button>
    </Space>
  )
}

export default Effector
