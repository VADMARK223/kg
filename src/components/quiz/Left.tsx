/**
 * Компонент левой части опросника
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React from 'react'
import { Steps } from 'antd'
import data from '../../assets/data.json'
import type { StepsProps } from 'antd/lib'

const Left = (): JSX.Element => {
  const items: StepsProps['items'] = data.categories.map((category) => {
    return { title: category.title, description: category.description }
  })
  return (
    <Steps
      direction={'vertical'}
      current={1}
      items={items}
    />
  )
}

export default Left
