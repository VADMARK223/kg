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

  useHotkeys('Enter', () => {
    handlerSearch()
  }, {
    enableOnFormTags: true
  })

  const handlerSearch = (): void => {
    const newSearchWord: string = valueState[0]
    if (valueState[0] !== '') {
      searchHistory.push(newSearchWord)
      localStorage.setItem(SEARCH_HISTORY, JSON.stringify(searchHistory))
    }
    onSearch(newSearchWord)
  }

  const handlerInputFocus = (): void => {
    setIsDropdownOpen(true)
  }

  const handlerInputBlur = (): void => {
    // setIsDropdownOpen(false)
  }

  const handlerSearchHistoryClick = (value: string): void => {
    onSearch(value)
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
        />
        <div className={isDropdownOpen && searchHistory.length !== 0 ? 'dropdown-container-active' : 'dropdown-container'}>
          {/*<DropdownContainer>*/}
          <Space direction={'vertical'}>
            <Space>
              <Button onClick={() => {
                localStorage.setItem(SEARCH_HISTORY, JSON.stringify([]))
                setSearchHistory([])
              }}>Очистить историю</Button>
              <Button onClick={() => setIsDropdownOpen(false)}>Закрыть</Button>
            </Space>

            {searchHistory.map(value => (
              <span key={value}>
                <Space>
                  <div style={{ cursor: 'pointer' }} onClick={() => {
                    handlerSearchHistoryClick(value)
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
          {/*</DropdownContainer>*/}
        </div>
      </div>
      <Button type={'primary'} onClick={handlerSearch}>Поиск</Button>
    </Space.Compact>
  )
}

export default SearchInput
