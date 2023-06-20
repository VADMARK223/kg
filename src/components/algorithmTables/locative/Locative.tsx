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
          <td rowSpan={6}>о ё у ю</td>
          <td rowSpan={3}>о ё</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'до'}/>
          </td>
          <td>
            <WordAffix root={'то'} affix={<Letter value={'о'}/>}/> - <WordAffix root={'тоо'} affix={'до'}/>
          </td>
          <td>
            гора - в горах
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'телефо'} affix={<Letter value={'н'}/>}/> - <WordAffix root={'телефон'} affix={'до'}/>
          </td>
          <td>
            телефон - на телефоне
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'то'}/>
          </td>
          <td>
            <WordAffix root={'аэропор'} affix={<Letter value={'т'}/>}/> - <WordAffix root={'аэропорт'} affix={'то'}/>
          </td>
          <td>
            аэропорт - в аэропорту
          </td>
        </tr>
        <tr>
          <td rowSpan={3}>у ю</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={2}>
            <AffixItem value={'да'}/>
          </td>
          <td>
            <WordAffix root={'су'} affix={<Letter value={'у'}/>}/> - <WordAffix root={'уу'} affix={'да'}/>
          </td>
          <td>
            вода - в воде
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <WordAffix root={'клу'} affix={<Letter value={'б'}/>}/> - <WordAffix root={'клуб'} affix={'да'}/>
          </td>
          <td>
            клуб - в клубе
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
            <WordAffix root={'автобу'} affix={<Letter value={'с'}/>}/> - <WordAffix root={'автобус'} affix={'та'}/>
          </td>
          <td>
            автобус - в автобусе
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Locative