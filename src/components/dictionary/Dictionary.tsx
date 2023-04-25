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
import { Button, Space, InputNumber, Tooltip, FloatButton, Divider } from 'antd'
import { InfoCircleTwoTone, SwapOutlined, CaretUpOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import { fetchDic } from '../../api/dictionary'
import { useDispatch, useSelector } from 'react-redux'
import type { DicDto } from '../../models/dto/DicDto'
import ModalQuiz from './ModalQuiz'
import WordEditor from './WordEditor'
import type { TagDto } from '../../models/dto/TagDto'
import Selector from '../common/Selector'
import { ADMIN_MODE } from '../../api/common'
import { getDic } from '../../store/dicSlice'
// import InfiniteScroll from 'react-infinite-scroll-component';
const TOTAL_QUESTIONS_MAX = 50

const Dictionary = (): JSX.Element => {
  const [direction, setDirection] = useState(true)
  const [locale, setLocale] = useState(direction ? 'ru' : 'kg')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState<number[]>([])
  const [types, setTypes] = useState<number[]>([])
  const dispatch = useDispatch()
  const dic = useSelector((state: any): DicDto => state.dic)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [totalQuestions, setTotalQuestions] = useState<number>(5)
  const [answersValueCount, setAnswersValueCount] = useState<number>(4)
  const [favorIds, setFavorIds] = useState<number[]>(localStorage.getItem('kg_favor_ids') == null ? [] : JSON.parse(localStorage.getItem('kg_favor_ids') as string))
  let words: DictionaryData[] = []
  if (ADMIN_MODE) {
    words = dic.words
  } else {
    words = data.words
  }

  useEffect(() => {
    if (!ADMIN_MODE) {
      dispatch(getDic(data as DicDto))
    }
  }, words)

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

  const getCheckTagForWord = (wordTags: TagDto[]): boolean => {
    if (tags.length === 0) {
      return true
    }

    const wordTagsIds = wordTags.map(value => value.value)

    if (Array.isArray(wordTags)) {
      return tags.find(tag => wordTagsIds.includes(tag)) !== undefined
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
        <Selector placeholder={'Части речи'}
                  mode={'multiple'}
                  options={dic.types}
                  selectedCallback={(options) => {
                    setTypes(options.map(value => value.value))
                  }}/>
        <Selector placeholder={'Категории'}
                  mode={'multiple'}
                  options={dic.tags}
                  selectedCallback={(options) => {
                    setTags(options.map(value => value.value))
                  }}/>
        {ADMIN_MODE && <WordEditor/>}
        <Space direction={'horizontal'}>
          <p>Всего слов: {words?.length}</p>
          <Tooltip title={'Можете настроить фильтры по частям речи, категориям для генерации нужных вам слов'}>
            <InfoCircleTwoTone twoToneColor={'blue'}/>
          </Tooltip>
          <Button type={'primary'}
                  onClick={(): void => {
                    setIsModalOpen(true)
                  }}>Генерировать быстрый опросник
          </Button>

          <Space direction={'horizontal'}>
            <div>
              Кол-во вопросов:
            </div>
            <InputNumber<number> value={totalQuestions}
                                 min={1}
                                 max={TOTAL_QUESTIONS_MAX}
                                 onChange={(e) => {
                                   if (e != null) {
                                     setTotalQuestions(e)
                                   }
                                 }}/>
          </Space>
          <Space direction={'horizontal'}>
            <div>
              Кол-во ответов в вопросе:
            </div>
            <InputNumber<number> value={answersValueCount}
                                 min={2}
                                 max={10}
                                 onChange={(e) => {
                                   if (e != null) {
                                     setAnswersValueCount(e)
                                   }
                                 }}/>
          </Space>

          <ModalQuiz open={isModalOpen}
                     words={words}
                     totalQuestions={totalQuestions}
                     answersValueCount={answersValueCount}
                     onClose={(): void => {
                       setIsModalOpen(false)
                     }}/>
        </Space>
      </Space>
      {/* <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)'
        }}
      >
        <InfiniteScroll next={() => false} hasMore={false} loader={<p>Load</p>} dataLength={20} scrollableTarget={'scrollableDiv'}>
          <List dataSource={words}
                renderItem={(item) => (
                  <Word data={item} direction={direction}/>
                )}
          />
        </InfiniteScroll>
      </div> */}
      <Space>
        {favorIds.length === 0
          ? <>Добавьте галочками слова, какие хотите выучить</>
          : <>Слов в избранном: {favorIds.length}</>}
        <Button type={'primary'}
                disabled={favorIds.length === 0}
                onClick={() => {
                  console.log('Gen')
                }}>Генерировать опросник из избранных слов</Button>
      </Space>
      <Divider/>
      <Button icon={<SwapOutlined/>} onClick={directionHandler}>Обратный перевод</Button>
      {words
        .sort(compareFunction)
        .map((item, index) => {
          const current = words[index]
          const prev = words[index - 1]
          const needShowSymbol = prev === undefined || (current[locale] as string).charCodeAt(0) !== (prev[locale] as string).charCodeAt(0)
          const firstSymbol = (item[locale] as string).substring(0, 1)
          return (
            <div key={item.id}>
              {needShowSymbol && <h4>{firstSymbol}</h4>}
              <Word isFavor={favorIds.includes(item.id as number)}
                    data={item}
                    direction={direction}
                    changeFavorCallback={(id, add) => {
                      if (add) {
                        favorIds.push(id)
                        localStorage.setItem('kg_favor_ids', JSON.stringify(favorIds))
                        setFavorIds([...favorIds])
                      } else {
                        favorIds.splice(favorIds.indexOf(id), 1)
                        localStorage.setItem('kg_favor_ids', JSON.stringify(favorIds))
                        setFavorIds([...favorIds])
                      }
                    }}
              />
            </div>
          )
        })}
      <FloatButton icon={<CaretUpOutlined/>} type="primary" style={{ right: 24 }} onClick={() => {
        window.scroll(0, 0)
      }}/>
    </>
  )
}

export default Dictionary
