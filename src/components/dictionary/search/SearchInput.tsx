/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 20.07.2023
 */
import React, { useState, useEffect } from 'react'
import { Space, Button } from 'antd'
import KgInput from '../../common/KgInput'
import { useHotkeys } from 'react-hotkeys-hook'

const SEARCH_HISTORY = 'search_history' // Ключ в localStore для массива записей истории

interface SearchInputProps {
  onSearch: (value: string) => void
}

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { onSearch } = props
  const valueState = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  useEffect(() => {
    const searchHistory = localStorage.getItem(SEARCH_HISTORY)
    if (searchHistory == null) {
      localStorage.setItem(SEARCH_HISTORY, JSON.stringify([]))
    } else {
      const fromStore: string[] = JSON.parse(localStorage.getItem(SEARCH_HISTORY) as string)
      setSearchHistory(fromStore)
    }
  }, [])

  useEffect(() => {
    if (valueState[0] !== '') {
      closeHistoryContainer()
    }
  }, [valueState[0]])

  useHotkeys('Enter', () => {
    handlerSearch()
  }, {
    enableOnFormTags: true
  })

  /**
   * Метод вызывается либо по клику на кнопку "Поиск", либо по горячей клавише "Enter"
   */
  const handlerSearch = (): void => {
    const newSearchWord: string = valueState[0].toLowerCase()
    if (newSearchWord !== '') {
      const index = searchHistory.indexOf(newSearchWord)
      if (index !== -1) {
        // Слово найдено в истории, его надо переместить в начало
        searchHistory.splice(index, 1)
        searchHistory.unshift(newSearchWord)
      } else {
        // Слово не найдено в истории, добавляем его в начало массива
        searchHistory.unshift(newSearchWord)
        localStorage.setItem(SEARCH_HISTORY, JSON.stringify(searchHistory))
      }
    }
    onSearch(newSearchWord)
    // Закрывает контейнер истории поиска
    closeHistoryContainer()
  }

  /**
   * Метод вызывается при получении фокуса строкой ввода
   */
  const handlerInputFocus = (): void => {
    if (valueState[0] === '') {
      openHistoryContainer()
    }
  }

  /**
   * Метод вызывается при потери фокуса строкой ввода
   */
  const handlerInputBlur = (): void => {
    setTimeout(() => {
      closeHistoryContainer()
    }, 200)
  }

  /**
   * Метод срабатывает при клике на элемент списка истории поиска
   * @param {string} value - значение по которому кликнули
   */
  const handlerHistoryItemClick = (value: string): void => {
    const setValue = valueState[1]
    setValue(value)
    onSearch(value)
    closeHistoryContainer()
  }

  /**
   * Метод открывает контейнер с историей поиска
   */
  const openHistoryContainer = (): void => {
    setIsDropdownOpen(true)
  }

  /**
   * Метод закрывает контейнер с историей поиска
   */
  const closeHistoryContainer = (): void => {
    setIsDropdownOpen(false)
  }

  return (
    <Space.Compact direction={'horizontal'}>
      <div className={'parent-dropdown-container'}>
        <KgInput
          valueState={valueState}
          placeholder={'Введите слово для поиска'}
          width={'210px'}
          onFocus={handlerInputFocus}
          onBlur={handlerInputBlur}
          handlerSearch={() => {
            onSearch('')
          }}
        />
        <div className={isDropdownOpen && searchHistory.length !== 0 ? 'dropdown-container-active' : 'dropdown-container'}>
          <Space direction={'vertical'}>
            <Space>
              <Button onClick={() => {
                localStorage.setItem(SEARCH_HISTORY, JSON.stringify([]))
                setSearchHistory([])
              }}>Очистить историю</Button>
              <Button onClick={closeHistoryContainer}>Закрыть</Button>
            </Space>

            {searchHistory.map(value => (
              <span key={value}>
                <Space>
                  <div style={{ cursor: 'pointer' }} onClick={() => {
                    handlerHistoryItemClick(value)
                  }}>{value}
                  </div>
                  <Button onClick={() => {
                    const afterRemove = searchHistory.filter(word => word !== value)
                    setSearchHistory(afterRemove)
                    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(afterRemove))
                  }}>Удалить</Button>
                </Space>

                </span>
            ))}
          </Space>
        </div>
      </div>
      <Button type={'primary'} onClick={handlerSearch}>Поиск</Button>
    </Space.Compact>
  )
}

export default SearchInput
