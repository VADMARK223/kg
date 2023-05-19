/**
 * Компонент словаря
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React, { useState, useEffect, useRef, useCallback } from 'react'
import data from '../../assets/dictionary.json'
import Word from './Word'
import { Button, Space, InputNumber, Tooltip, Popover, List, Empty, FloatButton } from 'antd'
import { InfoCircleTwoTone, SwapOutlined, SettingOutlined, CaretUpOutlined } from '@ant-design/icons'
import { fetchDic } from '../../api/dictionary'
import type { DicDto } from '../../models/dto/DicDto'
import ModalQuiz from './ModalQuiz'
import WordEditor from './WordEditor'
import type { TagDto } from '../../models/dto/TagDto'
import { ADMIN_MODE } from '../../api/common'
import { getDic } from '../../store/dicSlice'
import type { WordDto } from '../../models/dto/WordDto'
import InfiniteScroll from 'react-infinite-scroll-component'
import Filter from './Filter'
import type { SelectorDto } from '../../models/dto/SelectorDto'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

const TOTAL_QUESTIONS_MAX = 50

const Dictionary = (): JSX.Element => {
  const [direction, setDirection] = useState(true)
  const [locale, setLocale] = useState(direction ? 'ru' : 'kg')
  const [search, setSearch] = useState('') // Строка поиска
  const [tags, setTags] = useState<number[]>([]) // Категории
  const [types, setTypes] = useState<number[]>([]) // Часть речи
  const dispatch = useAppDispatch()
  const dic = useAppSelector(state => state.dic)
  const favoriteWordIds = useAppSelector(state => state.user.favoriteWordIds)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [totalQuestions, setTotalQuestions] = useState<number>(5)
  const [answersValueCount, setAnswersValueCount] = useState<number>(4)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [emptyFilter, setEmptyFilter] = useState<boolean>(true)
  const [editWord, setEditWord] = useState<WordDto | null>(null)
  const compareFunction = (a: WordDto, b: WordDto): number => {
    return (a[locale] as string).localeCompare(b[locale] as string)
  }
  const [words, setWords] = useState<WordDto[]>(ADMIN_MODE ? dic.words : [...data.words].sort(compareFunction))

  const initWords: WordDto[] = words

  const [wordsForQuiz, setWordsForQuiz] = useState<WordDto[]>([])

  useEffect(() => {
    if (!ADMIN_MODE) {
      dispatch(getDic(data as DicDto))
    }
  }, [words])

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

  useEffect(() => {
    setWords([...dic.words].sort(compareFunction))
  }, [dic.words])

  const directionHandler = (): void => {
    setDirection(!direction)
    if (locale === 'ru') {
      setLocale('kg')
    } else {
      setLocale('ru')
    }
  }

  const onSearch = useCallback((value: string): void => {
    setSearch(value)
  }, [])

  const typesSelectCallback = useCallback((options: SelectorDto[]): void => {
    setTypes(options.map(value => value.value))
  }, [])

  const tagsSelectCallback = useCallback((options: SelectorDto[]): void => {
    setTags(options.map(value => value.value))
  }, [])

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

  const filterFn = (value: WordDto): boolean => {
    if (search === '' && tags.length === 0 && types.length === 0) {
      return true
    }

    return getCheckSearch(value.ru, value.kg) && getCheckTagForWord(value.tags) && getCheckTypeForWord(value.type)
  }

  const handlerSettingsOpen = (newOpen: boolean): void => {
    setSettingsOpen(newOpen)
  }

  const PAGE_SIZE: number = 50
  const [displayWords, setDisplayWords] = useState<WordDto[]>([])
  const loadMoreWords = (): void => {
    const newWords = [...words].filter(filterFn).slice(displayWords.length, displayWords.length + PAGE_SIZE)
    setDisplayWords([...displayWords, ...newWords])
  }
  useEffect(() => {
    setDisplayWords([...words].filter(filterFn).sort(compareFunction).slice(0, PAGE_SIZE))
  }, [words.length, direction, search, types, tags])

  useEffect(() => {
    setWords([...words].sort(compareFunction))
  }, [words.length, direction])

  useEffect(() => {
    setEmptyFilter(search === '' && tags.length === 0 && types.length === 0)
  }, [search, types, tags])

  const scrollableDivRef = useRef<any>()
  let distanceFromTop: number = 0
  if (scrollableDivRef.current !== undefined) {
    distanceFromTop = (scrollableDivRef.current as unknown as HTMLDivElement).offsetTop
  }

  const scrollUpHandler = (): void => {
    (scrollableDivRef.current as unknown as HTMLDivElement).scroll(0, 0)
  }

  const modalQuizCloseHandler = useCallback((): void => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <Space direction={'vertical'} style={{ width: '100%' }}>
        <Filter
          onSearch={onSearch}
          typesSelectCallback={typesSelectCallback}
          tagsSelectCallback={tagsSelectCallback}
        />
        {ADMIN_MODE && <WordEditor data={editWord} cancelCallback={() => {
          setEditWord(null)
        }}/>}
        <Space direction={'horizontal'}>
          <Button type={'primary'}
                  onClick={(): void => {
                    if (emptyFilter) {
                      setWordsForQuiz(initWords)
                    } else {
                      setWordsForQuiz(displayWords)
                    }
                    setIsModalOpen(true)
                  }}>Быстрый опросник
          </Button>
          <Tooltip title={'Можете настроить фильтры по частям речи, категориям для генерации нужных вам слов'}>
            <InfoCircleTwoTone twoToneColor={'blue'}/>
          </Tooltip>
          <p>Слов: {emptyFilter ? initWords.length : displayWords?.length}</p>

          <Popover title={'Настройки опросников'}
                   open={settingsOpen}
                   trigger={'click'}
                   onOpenChange={handlerSettingsOpen}
                   content={<Space direction={'horizontal'}>
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
                   </Space>}
          >
            <Button icon={<SettingOutlined/>}/>
          </Popover>

          <ModalQuiz open={isModalOpen}
                     outWords={wordsForQuiz}
                     outTotalQuestions={totalQuestions}
                     answersValueCount={answersValueCount}
                     onClose={modalQuizCloseHandler}
          />
        </Space>
        <Space direction={'horizontal'}>
          <Button type={'primary'}
                  disabled={favoriteWordIds.length === 0}
                  onClick={() => {
                    const newWordsForQuiz: WordDto[] = []
                    initWords.forEach(value => {
                      if (favoriteWordIds.includes(value.id as number)) {
                        newWordsForQuiz.push(value)
                      }
                    })
                    setWordsForQuiz(newWordsForQuiz)
                    setIsModalOpen(true)
                  }}>Опросник из избранных слов</Button>
          <Tooltip title={'Добавьте слова звездочкой'}>
            <InfoCircleTwoTone twoToneColor={'blue'}/>
          </Tooltip>
          <p>Слов: {favoriteWordIds?.length}</p>
        </Space>
        <Space direction={'horizontal'}>
          <Button icon={<SwapOutlined/>} onClick={directionHandler}>Обратный перевод</Button>
          <p>Всего слов: {words?.length}</p>
        </Space>
      </Space>
      <div
        ref={scrollableDivRef}
        id="scrollableDiv"
        style={{
          height: `calc(100vh - ${distanceFromTop}px - 5px)`,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)'
        }}
      >
        <InfiniteScroll next={loadMoreWords}
                        hasMore={displayWords.length < words.length}
                        loader={<p>...</p>}
                        dataLength={displayWords.length}
                        scrollableTarget={'scrollableDiv'}>
          <List dataSource={displayWords}
                locale={{ emptyText: <Empty description={'Слов по вашим фильтрам не найдено'}/> }}
                renderItem={(item, index) => {
                  const current = displayWords[index]
                  const prev = displayWords[index - 1]
                  const needShowSymbol = prev === undefined || (current[locale] as string).charCodeAt(0) !== (prev[locale] as string).charCodeAt(0)
                  const firstSymbol = (item[locale] as string).substring(0, 1)
                  return (
                    <div key={item.id}>
                      {needShowSymbol && <h4>{firstSymbol}</h4>}
                      <Word data={item} direction={direction} editWordCallback={value => {
                        setEditWord(value)
                      }}
                      />
                    </div>
                  )
                }}
          />
        </InfiniteScroll>
      </div>
      <FloatButton icon={<CaretUpOutlined/>} type="primary" style={{ right: 54 }} onClick={scrollUpHandler}/>
    </>
  )
}

export default Dictionary
