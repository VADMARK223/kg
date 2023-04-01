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
import type { SelectProps } from 'antd'
import { Button, Select, Space } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import { setDic, fetchDic } from '../../api/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import { DicDto } from '../../models/dto/DicDto'
import AddWord from './AddWord'

const Dictionary = (): JSX.Element => {
  const [direction, setDirection] = useState(true)
  const [locale, setLocale] = useState(direction ? 'ru' : 'kg')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<number[]>([])
  const dispatch = useDispatch()
  const dic = useSelector((state: any): DicDto => state.dic)
  // Local
  // let items: DictionaryData[] = data.words
  // Remote
  let words: DictionaryData[] = dic.words

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

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

  words = words.filter(value => {
    if (search === '' && tags.length === 0) {
      return true
    }

    if (value.tags !== undefined) {
      const tagsType = typeof value.tags
      if (tagsType === 'number') {
        const result = tags.includes(value.tags as number)
        console.log('Result: ' + String(result))
      }
    }

    return value.ru.toLowerCase().includes(search.toLowerCase()) || value.kg.toLowerCase().includes(search.toLowerCase())
  })

  const handleChange = (value: number[]): void => {
    console.log('value:', value)
    setTags(value)
  }

  const tagsOptions: SelectProps['options'] = data.tags

  return (
    <>
      <Search
        placeholder={'Введите слово для поиска'}
        allowClear
        enterButton={'Поиск'}
        size={'middle'}
        onSearch={onSearch}
      />
      <Space direction={'vertical'}>
        <Button type={'primary'} onClick={setDic} style={{ display: 'none' }}>Перезаписать словарь</Button>
        <Button type={'primary'} onClick={fetchDic} style={{ display: 'none' }}>Получить словарь</Button>
        <AddWord tags={dic.tags}/>
      </Space>
      <p>Всего слов: {words?.length}</p>
      <Space>
        <Select
          style={{ width: 400, display: 'none' }}
          mode={'multiple'}
          onChange={handleChange}
          options={tagsOptions}
        />
        <Button type={'primary'} icon={<SwapOutlined/>} onClick={directionHandler}>Обратный перевод</Button>
      </Space>
      {words
        .sort(compareFunction)
        .map((item, index) => {
          const current = words[index]
          const prev = words[index - 1]
          const needShowSymbol = prev === undefined || (current[locale] as string).charCodeAt(0) !== (prev[locale] as string).charCodeAt(0)
          const firstSymbol = (item[locale] as string).substring(0, 1)
          if (needShowSymbol) {
            return <div key={firstSymbol.charCodeAt(0)}>
              <h4>{firstSymbol}</h4>
              <Word data={item} direction={direction} tags={dic.tags}/>
            </div>
          } else {
            return <Word key={index} data={item} direction={direction} tags={dic.tags}/>
          }
        })}
    </>
  )
}

export default Dictionary
