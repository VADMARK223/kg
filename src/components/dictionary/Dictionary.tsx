/**
 * Компонент словаря
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState, useEffect } from 'react'
// import data from '../../assets/dictionary.json'
import type { DictionaryData } from '../../models/DictionaryData'
import Word from './Word'
import { Button, Select, Space } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import { fetchDic } from '../../api/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import { DicDto } from '../../models/dto/DicDto'
import AddWord from './AddWord'
import ModalQuiz from './ModalQuiz'

const Dictionary = (): JSX.Element => {
  const [direction, setDirection] = useState(true)
  const [locale, setLocale] = useState(direction ? 'ru' : 'kg')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<number[]>([])
  const [types, setTypes] = useState<number[]>([])
  const dispatch = useDispatch()
  const dic = useSelector((state: any): DicDto => state.dic)
  const [isModalOpen, setIsModalOpen] = useState(true)

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

  const getCheckSearch = (ruValue: string, kgValue: string): boolean => {
    if (search === '') {
      return true
    }

    return ruValue.toLowerCase().includes(search.toLowerCase()) || kgValue.toLowerCase().includes(search.toLowerCase())
  }

  const getCheckTagForWord = (wordTags: number | number[]): boolean => {
    if (tags.length === 0) {
      return true
    }
    if (Number.isInteger(wordTags)) {
      return tags.includes(wordTags as number)
    } else if (Array.isArray(wordTags)) {
      return tags.find(tag => wordTags.includes(tag)) !== undefined
    } else {
      throw new Error('Unknown type of word tags.')
    }
  }

  const getCheckTypeForWord = (wordType: number): boolean => {
    if (types.length === 0) {
      return true
    }

    return types.includes(wordType)
  }

  words = words.filter(value => {
    if (search === '' && tags.length === 0 && types.length === 0) {
      return true
    }

    return getCheckSearch(value.ru, value.kg) && getCheckTagForWord(value.tags) && getCheckTypeForWord(value.type)
  })

  const tagsChangeHandler = (value: number[]): void => {
    setTags(value)
  }

  const typesChangeHandler = (value: number[]): void => {
    setTypes(value)
  }

  return (
    <>
      <Space direction={'vertical'} style={{ width: '100%' }}>
        <Search
          placeholder={'Введите слово для поиска'}
          allowClear
          enterButton={'Поиск'}
          size={'middle'}
          onSearch={onSearch}
        />
        <Select
          placeholder={'Категории'}
          style={{ width: '100%' }}
          mode={'multiple'}
          onChange={tagsChangeHandler}
          options={dic.tags}
        />
        <Select
          placeholder={'Части речи'}
          style={{ width: '100%' }}
          mode={'multiple'}
          onChange={typesChangeHandler}
          options={dic.types}
        />
        <AddWord tags={dic.tags} types={dic.types}/>
        <Space direction={'horizontal'}>
          <p>Всего слов: {words?.length}</p>
          <Button type={'primary'} onClick={() => setIsModalOpen(true)}>Генерировать быстрый опросник</Button>
          <ModalQuiz open={isModalOpen} words={words} onClose={() => setIsModalOpen(false)}/>
        </Space>
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
              <Word data={item} direction={direction} tags={dic.tags} types={dic.types}/>
            </div>
          } else {
            return <Word key={index} data={item} direction={direction} tags={dic.tags} types={dic.types}/>
          }
        })}
    </>
  )
}

export default Dictionary
