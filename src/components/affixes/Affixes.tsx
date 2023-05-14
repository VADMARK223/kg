/**
 * Компонент окончаний
 *
 * @author Markitanov Vadim
 * @since 14.05.2023
 */
import React from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import QuestionAffix from './questionAffix/QuestionAffix'

const Affixes = (): JSX.Element => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Вопр',
      children: (<QuestionAffix/>)
    }, {
      key: '2',
      label: 'Множ',
      children: 'В разработке',
      disabled: true
    }
  ]
  return (
    <>
      <b>Аффикс</b> (лат. affixis – прикрепленный) (Мүчө) – служебная
      морфема, которая самостоятельно без корня не употребляется, служит
      для образования различных форм одного и того же слова или
      образования другого однокоренного слова. Таким образом, аффиксы
      делятся на формообразующие и словообразовательные.
      <Tabs tabPosition={'left'} items={items}/>
    </>
  )
}

export default Affixes
