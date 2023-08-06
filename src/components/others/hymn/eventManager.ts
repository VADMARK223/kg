/**
 * @author Markitanov Vadim
 * @since 06.08.2023
 */

export const enum Event {
  Show,
  Hide
}

type OnShowCallback = (id: string) => void
type OnHideCallback = () => void

type Callback = OnShowCallback | OnHideCallback

interface EventManager {
  list: Map<Event, Callback[]>
  on: (event: Event, callback: OnShowCallback) => void
  emit: (event: Event, id: string) => void
}

export const eventManager: EventManager = {
  list: new Map<Event, Callback[]>(),

  on (event: Event, callback: Callback) {
    const callbacks = this.list.get(event)
    if (callbacks === undefined) {
      this.list.set(event, [])
    }
    const temp = this.list.get(event)
    if (temp !== undefined) {
      temp.push(callback)
    }
  },

  emit (event: Event, id: string) {
    const callbacks = this.list.get(event)
    if (callbacks !== undefined) {
      callbacks.forEach(callback => {
        callback(id)
      })
    }
  }
}
