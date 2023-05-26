/**
 * Компонент "Местного падежа"
 *
 * @author Markitanov Vadim
 * @since 26.05.2023
 */
import React from 'react';
import LettersPanel from '../../common/LettersPanel'
import Letter, { VOWELS_NAME, VOICED_CONSONANTS_NAME, VOICELESS_CONSONANTS_NAME } from '../../common/Letter'
import AffixItem from '../../common/AffixItem'
import WordAffix from '../../common/WordAffix'

const Locative = (): JSX.Element => {
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
            <AffixItem value={'да'}/>
          </td>
          <td>
            <WordAffix root={'китепкан'} affix={<Letter value={'а'}/>}/> - <WordAffix root={'китепкана'} affix={'да'}/>
          </td>
          <td>
            библиотека - в библиотеке
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'айы'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'айыл'} affix={'да'}/>
          </td>
          <td>
            село - в селе
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'та'}/>
          </td>
          <td>
            <WordAffix root={'саба'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'сабак'} affix={'та'}/>
          </td>
          <td>
            урок - на уроке
          </td>
        </tr>
        <tr>
          <td rowSpan={3} colSpan={2}>э, е, и</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'де'}/>
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
            <WordAffix root={'поез'} affix={<Letter value={'д'}/>}/> - <WordAffix root={'поезд'} affix={'де'}/>
          </td>
          <td>
            поезд - в поезде
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'те'}/>
          </td>
          <td>
            <WordAffix root={'эши'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'эшик'} affix={'те'}/>
          </td>
          <td>
            дверь - у двери
          </td>
        </tr>
        <tr>
          <td rowSpan={3} colSpan={2}>ө ү</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'дө'}/>
          </td>
          <td>
            <WordAffix root={'өлк'} affix={<Letter value={'ө'}/>}/> - <WordAffix root={'өлкө'} affix={'дө'}/>
          </td>
          <td>
            страна - в стране
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'ү'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'үй'} affix={'дө'}/>
          </td>
          <td>
            дом - в доме
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тө'}/>
          </td>
          <td>
            <WordAffix root={'сү'} affix={<Letter value={'т'}/>}/> - <WordAffix root={'сүт'} affix={'тө'}/>
          </td>
          <td>
            вода - в воде
          </td>
        </tr>
        <tr>
          <td rowSpan={10}>о ё у ю</td>
          <td rowSpan={5}>о ё</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лор'}/>
          </td>
          <td>
            <WordAffix root={'коро'} affix={<Letter value={'о'}/>}/> - <WordAffix root={'короо'} affix={'лор'}/>
          </td>
          <td>
            двор - дворы
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            <WordAffix root={'то'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'той'} affix={'лор'}/>
          </td>
          <td>
            пиршество - пиршества
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
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
            <AffixItem value={'дор'}/>
          </td>
          <td>
            <WordAffix root={'ко'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'кол'} affix={'дор'}/>
          </td>
          <td>
            рука - руки
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тор'}/>
          </td>
          <td>
            <WordAffix root={'коно'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'конок'} affix={'тор'}/>
          </td>
          <td>
            гость - гости
          </td>
        </tr>
        <tr>
          <td rowSpan={5}>у ю</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лар'}/>
          </td>
          <td>
            <WordAffix root={'окууч'} affix={<Letter value={'у'}/>}/> - <WordAffix root={'окуучу'} affix={'лар'}/>
          </td>
          <td>
            ученик - ученики
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
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
            <Letter value={'р'}/>
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
            <AffixItem value={'дар'}/>
          </td>
          <td>
            <WordAffix root={'буй'} affix={<Letter value={'м'}/>}/> - <WordAffix root={'буйм'} affix={'дар'}/>
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тар'}/>
          </td>
          <td>
            <WordAffix root={'жоолу'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'жоолук'} affix={'тар'}/>
          </td>
          <td>
            платок - платки
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Locative