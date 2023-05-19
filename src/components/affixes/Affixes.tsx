/**
 * Компонент окончаний
 *
 * @author Markitanov Vadim
 * @since 14.05.2023
 */
import React from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import QuestionAffix from './questionAffix/QuestionAffix'
import PredicateAffix from './predicateAffix/PredicateAffix'
import AboutAffix from './AboutAffix'

const Affixes = (): JSX.Element => {
  const items: TabsProps['items'] = [
    {
      key: 'AboutAffix',
      label: 'Общ',
      children: (<AboutAffix/>)
    },
    {
      key: 'QuestionAffix',
      label: 'Вопр',
      children: (<QuestionAffix/>)
    }, {
      key: 'PredicateAffix',
      label: 'Сказ',
      children: (<PredicateAffix/>)
    }, {
      key: '3',
      label: 'Множ',
      children: 'В разработке',
      disabled: true
    }
  ]
  return (
    <>
      <Tabs tabPosition={'top'} items={items}/>
    </>
  )
}

export default Affixes
