/**
 * Компонент алгоритмической таблицы образования дательного падежа
 *
 * @author Markitanov Vadim
 * @since 10.08.2023
 */
import React from 'react'
import LettersPanel from '../common/LettersPanel'
import Letter, { VOWELS_NAME, VOICED_CONSONANTS_NAME, VOICELESS_CONSONANTS_NAME } from '../common/Letter'
import AffixItem from '../common/AffixItem'
import WordAffix from '../common/WordAffix'

const DativeTable = (): JSX.Element => {
  return (
    <>
      <LettersPanel/><br/>
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
          <td rowSpan={2}>
            <AffixItem value={'га'}/>
          </td>
          <td>
            <WordAffix root={'китепкан'} affix={<Letter value={'а'}/>}/> - <WordAffix root={'китепкана'} affix={'га'}/>
          </td>
          <td>
            библиотека
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'айы'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'айыл'} affix={'га'}/>
          </td>
          <td>
            село
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'ка'}/>
          </td>
          <td>
            <WordAffix root={'саба'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'сабак'} affix={'ка'}/>
          </td>
          <td>
            урок
          </td>
        </tr>
        <tr>
          <td rowSpan={3} colSpan={2}>э, е, и</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'ге'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'деңи'} affix={<Letter value={'з'}/>}/> - <WordAffix root={'деңи'} affix={'ге'}/>
          </td>
          <td>
            море
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'ке'}/>
          </td>
          <td>
            <WordAffix root={'эши'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'эшик'} affix={'ке'}/>
          </td>
          <td>
            дверь
          </td>
        </tr>
        <tr>
          <td rowSpan={3} colSpan={2}>ө ү</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'гө'}/>
          </td>
          <td>
            <WordAffix root={'өлк'} affix={<Letter value={'ө'}/>}/> - <WordAffix root={'өлкө'} affix={'гө'}/>
          </td>
          <td>
            страна
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'ү'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'үй'} affix={'гө'}/>
          </td>
          <td>
            дом
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'кө'}/>
          </td>
          <td>
            <WordAffix root={'сү'} affix={<Letter value={'т'}/>}/> - <WordAffix root={'сүт'} affix={'кө'}/>
          </td>
          <td>
            вода
          </td>
        </tr>
        <tr>
          <td rowSpan={6}>о ё у ю</td>
          <td rowSpan={3}>о ё</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'го'}/>
          </td>
          <td>
            <WordAffix root={'то'} affix={<Letter value={'о'}/>}/> - <WordAffix root={'тоо'} affix={'го'}/>
          </td>
          <td>
            гора
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'телефо'} affix={<Letter value={'н'}/>}/> - <WordAffix root={'телефон'} affix={'го'}/>
          </td>
          <td>
            телефон
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'ко'}/>
          </td>
          <td>
            <WordAffix root={'курор'} affix={<Letter value={'т'}/>}/> - <WordAffix root={'курорт'} affix={'ко'}/>
          </td>
          <td>
            курорт
          </td>
        </tr>
        <tr>
          <td rowSpan={3}>у ю</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'гу'}/>
          </td>
          <td>
            <WordAffix root={'су'} affix={<Letter value={'у'}/>}/> - <WordAffix root={'уу'} affix={'га'}/>
          </td>
          <td>
            вода
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'клу'} affix={<Letter value={'б'}/>}/> - <WordAffix root={'клуб'} affix={'га'}/>
          </td>
          <td>
            клуб
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'ку'}/>
          </td>
          <td>
            <WordAffix root={'автобу'} affix={<Letter value={'с'}/>}/> - <WordAffix root={'автобус'} affix={'ка'}/>
          </td>
          <td>
            автобус
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default DativeTable
