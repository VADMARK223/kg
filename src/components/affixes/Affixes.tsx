/**
 * Компонент окончаний
 *
 * @author Markitanov Vadim
 * @since 14.05.2023
 */
import React from 'react'
import type { TabsProps } from 'antd'
import { Tabs } from 'antd'
import PredicateAffix from './predicateAffix/PredicateAffix'
import AboutAffix from './AboutAffix'
import PersonalAffix from './personalAffix/PersonalAffix'

const Affixes = (): JSX.Element => {
  const items: TabsProps['items'] = [
    {
      key: 'AboutAffix',
      label: 'Общее',
      children: (<AboutAffix/>)
    },
    {
      key: 'PersonalAffix',
      label: 'Личные',
      children: (<PersonalAffix/>)
    }, {
      key: 'PredicateAffix',
      label: 'Сказуемости',
      children: (<PredicateAffix/>)
    }, {
      key: '3',
      label: 'Множественные',
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
