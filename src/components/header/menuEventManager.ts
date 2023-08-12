/**
 * @author Markitanov Vadim
 * @since 12.08.2023
 */
type CloseCallback = () => void

interface MenuEventManager {
  callback: CloseCallback | null
  onClose: (callback: CloseCallback) => void
  close: () => void
}

export const menuEventManager: MenuEventManager = {
  callback: null,
  onClose (callback) {
    this.callback = callback
  },
  close () {
    if (this.callback != null) {
      this.callback()
    }
  }
}
