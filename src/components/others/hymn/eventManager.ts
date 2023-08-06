/**
 * @author Markitanov Vadim
 * @since 06.08.2023
 */

export const enum Event {
  Highlight, // Подсветить
  Clear// Сбросить подсветку
}

export interface EventData {
  ru: string // Ключ на русском
  ruMode: boolean // На какое слово навели, русское или кыргызское
}

type OnShowCallback = (data: EventData) => void
type OnHideCallback = (data: EventData) => void

type Callback = OnShowCallback | OnHideCallback

interface EventManager {
  list: Map<Event, Callback[]>
  on: (event: Event, callback: Callback) => void
  emit: (event: Event, data: EventData) => void
}

export const eventManager: EventManager = {
  list: new Map<Event, Callback[]>(),

  on (event: Event, callback: Callback) {
    if (this.list.get(event) === undefined) {
      this.list.set(event, [])
    }
    this.list.get(event)?.push(callback)
  },

  emit (event: Event, data: EventData) {
    const callbacks = this.list.get(event)
    if (callbacks !== undefined) {
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }
}
