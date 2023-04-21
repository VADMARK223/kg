import React, { useEffect, useState } from 'react'
import { fetchTags, addTag } from '../api/service'
import type { TagDto } from '../models/dto/TagDto'
import { Input, Button, Space } from 'antd'

const ServicePage = (): JSX.Element => {
  const [tags, setTags] = useState<TagDto[]>([])
  const [tag, setTag] = useState<string>('')
  const [buttonDisable, setButtonDisable] = useState(true)

  useEffect(() => {
    fetchTags((fetchedTags) => {
      setTags(fetchedTags)
    })
  }, [])

  useEffect(() => {
    setButtonDisable(tag === '')
  }, [tag])

  const addTagHandler = (): void => {
    const newTag: TagDto = { value: 999, label: tag, color: null }
    addTag(newTag, (fetchedTags) => {
      setTags(fetchedTags)
      setTag('')
    })
  }

  return (
    <>
      <p>Тегов: {tags.length}</p>
      <Space.Compact>
        <Input placeholder={'Тег'}
               value={tag}
               onChange={(e) => {
                 setTag(e.target.value)
               }}/>
        <Button type={'primary'} onClick={addTagHandler} disabled={buttonDisable}>Добавить</Button>
      </Space.Compact>
      {tags.map(value => (<p key={value.value}>{value.label}</p>))}
    </>
  )
}

export default ServicePage
