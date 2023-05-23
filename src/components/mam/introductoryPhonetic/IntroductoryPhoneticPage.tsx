/**
 * Компонент вводно-фонетического курса
 *
 * @author Markitanov Vadim
 * @since 23.05.2023
 */
import React from 'react'
import { TabsProps, Tabs } from 'antd'

const IntroductoryPhoneticPage = (): JSX.Element => {
  const items: TabsProps['items'] = []
  for (let i = 1; i <= 5; i++) {
    items.push({
      key: `${i}`,
      label: `Урок ${i}`,
      children: `${i}`
    })
  }
  return (
    <Tabs tabPosition={'top'} items={items}/>
  )
}

export default IntroductoryPhoneticPage
