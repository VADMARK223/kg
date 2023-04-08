/**
 * Сервис для навигации
 *
 * @author Markitanov Vadim
 * @since 08.03.2023
 */
import type { NavigateFunction } from 'react-router/dist/lib/hooks'
import { RoutePath } from './router'

class NavigationService {
  private _navigation: NavigateFunction | null

  public constructor () {
    this._navigation = null
  }

  /**
   * Метод устанавливает функцию хука навигации в хедере в useEffect.
   * @param {NavigateFunction} value - функция навигации.
   */
  public setNavigation (value: NavigateFunction): void {
    this._navigation = value
  }

  /**
   * Метод перенаправляет на страницу логина
   */
  public redirectLoginPage (): void {
    if (this._navigation != null) {
      this._navigation(RoutePath.LOGIN)
    }
  }
}

const navigationService = new NavigationService()

export default navigationService
