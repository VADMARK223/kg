/**
 * Компонент алгоритмическая таблица образования родительного падежа
 *
 * @author Markitanov Vadim
 * @since 23.06.2023
 */
import React from 'react'
import Letter, { VOWELS_NAME, VOICED_CONSONANTS_NAME, VOICELESS_CONSONANTS_NAME } from '../common/Letter'
import AffixItem from '../common/AffixItem'
import WordAffix from '../common/WordAffix'
import CommonTable from './CommonTable'

const GenitiveTable = (): JSX.Element => {
  return (
    <CommonTable title={'№5 Образование родительного падежа'}>
      <table>
        <thead>
        <tr>
          <td colSpan={2}>Последняя гласная буква корня</td>
          <td>Последняя буква корня</td>
          <td>Аффикс</td>
          <td>Пример</td>
          <td>Перевод</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowSpan={3} colSpan={2}>а, я, ы</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td>
            <AffixItem value={'нын'}/>
          </td>
          <td>
            <WordAffix root={'музык'} affix={<Letter value={'а'}/>}/> - <WordAffix root={'музыка'} affix={'нын'}/>
          </td>
          <td>
            музыка - музыки
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дын'}/>
          </td>
          <td>
            <WordAffix root={'кы'} affix={<Letter value={'з'}/>}/> - <WordAffix root={'кыз'} affix={'дын'}/>
          </td>
          <td>
            дочь - дочери
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тын'}/>
          </td>
          <td>
            <WordAffix root={'вра'} affix={<Letter value={'ч'}/>}/> - <WordAffix root={'врач'} affix={'тын'}/>
          </td>
          <td>
            врач - врача
          </td>
        </tr>
        {/* ================================================================================================ */}
        <tr>
          <td rowSpan={3} colSpan={2}>э, е, и</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td>
            <AffixItem value={'нин'}/>
          </td>
          <td>
            <WordAffix root={'кем'} affix={<Letter value={'е'}/>}/> - <WordAffix root={'кеме'} affix={'нин'}/>
          </td>
          <td>
            корабль - корабля
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дин'}/>
          </td>
          <td>
            <WordAffix root={'мунали'} affix={<Letter value={'м'}/>}/> - <WordAffix root={'мугалим'} affix={'дин'}/>
          </td>
          <td>
            учитель - учителя
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тин'}/>
          </td>
          <td>
            <WordAffix root={'планше'} affix={<Letter value={'т'}/>}/> - <WordAffix root={'планшет'} affix={'тин'}/>
          </td>
          <td>
            планшет - планшета
          </td>
        </tr>
        {/* ================================================================================================ */}
        <tr>
          <td rowSpan={3} colSpan={2}>ө, ү</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td>
            <AffixItem value={'нүн'}/>
          </td>
          <td>
            <WordAffix root={'өлк'} affix={<Letter value={'ө'}/>}/> - <WordAffix root={'өлкө'} affix={'нүн'}/>
          </td>
          <td>
            страна - страны
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дүн'}/>
          </td>
          <td>
            <WordAffix root={'кө'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'көл'} affix={'дүн'}/>
          </td>
          <td>
            озеро - озера
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'түн'}/>
          </td>
          <td>
            <WordAffix root={'сөздү'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'сөздөк'} affix={'түн'}/>
          </td>
          <td>
            словарь - словаря
          </td>
        </tr>
        {/* ================================================================================================ */}
        <tr>
          <td rowSpan={3} colSpan={2}>о, ё, у, ю</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td>
            <AffixItem value={'нун'}/>
          </td>
          <td>
            <WordAffix root={'окууч'} affix={<Letter value={'у'}/>}/> - <WordAffix root={'окуучу'} affix={'нун'}/>
          </td>
          <td>
            ученик - ученика
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дун'}/>
          </td>
          <td>
            <WordAffix root={'телефо'} affix={<Letter value={'н'}/>}/> - <WordAffix root={'телефон'} affix={'дун'}/>
          </td>
          <td>
            телефон - телефона
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тун'}/>
          </td>
          <td>
            <WordAffix root={'автобу'} affix={<Letter value={'с'}/>}/> - <WordAffix root={'автобус'} affix={'тун'}/>
          </td>
          <td>
            автобус - автобуса
          </td>
        </tr>
        </tbody>
      </table>
    </CommonTable>
  )
}

export default GenitiveTable
