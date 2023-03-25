/**
 * Компонент словаря
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState, useEffect } from 'react'
import data from '../../assets/dictionary.json'
import type { DictionaryData } from '../../models/DictionaryData'
import Word from './Word'
import { Button, Select, Space } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import { getDictionary } from '../../api/dictionary'

const Dictionary = (): JSX.Element => {
  let items: DictionaryData[] = data.words
  const [direction, setDirection] = useState(true)
  const [locale, setLocale] = useState(direction ? 'ru' : 'kg')
  const [search, setSearch] = useState('')

  useEffect(()=>{
    console.log('Test calc API.')
    getDictionary()
  },[])

  const directionHandler = (): void => {
    setDirection(!direction)
    if (locale === 'ru') {
      setLocale('kg')
    } else {
      setLocale('ru')
    }
  }

  const compareFunction = (a: DictionaryData, b: DictionaryData): number => {
    return (a[locale] as string).localeCompare(b[locale] as string)
  }

  const onSearch = (value: string): void => {
    setSearch(value)
  }

  items = items.filter(value => {
    if (search === '') {
      return true
    }
    return value.ru.toLowerCase().includes(search.toLowerCase()) || value.kg.toLowerCase().includes(search.toLowerCase())
  })

  const handleChange = (value: string): void => {
    console.log('value:', value)
  }

  return (
    <>
      <Search
        placeholder={'Введите слово для поиска'}
        allowClear
        enterButton={'Поиск'}
        size={'middle'}
        onSearch={onSearch}
      />
      <p>Всего слов: {items?.length}</p>
      <Space>
        Категория:
        <Select
          style={{ width: 200 }}
          onChange={handleChange}
          options={data.tags}
        />
        <Button type={'primary'} icon={<SwapOutlined/>} onClick={directionHandler}>Обратный перевод</Button>
      </Space>
      {items
        .sort(compareFunction)
        .map((item, index) => {
          const current = items[index]
          const prev = items[index - 1]
          const needShowSymbol = prev === undefined || (current[locale] as string).charCodeAt(0) !== (prev[locale] as string).charCodeAt(0)
          const firstSymbol = (item[locale] as string).substring(0, 1)
          if (needShowSymbol) {
            return <div key={firstSymbol.charCodeAt(0)}>
              <h4>{firstSymbol}</h4>
              <Word data={item} direction={direction}/>
            </div>
          } else {
            return <Word key={index} data={item} direction={direction}/>
          }
        })}
    </>
  )
}

export default Dictionary
