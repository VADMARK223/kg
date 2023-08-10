/**
 * Компонент "Образование категории принадлежности единственного числа"
 *
 * @author Markitanov Vadim
 * @since 01.06.2023
 */
import React from 'react'
import AffixItem from '../common/AffixItem'
import WordAffix from '../common/WordAffix'
import Letter from '../common/Letter'
import LettersPanel from '../common/LettersPanel'

const BelongingSingle = (): JSX.Element => {
  return (
    <>
      <h3>№3 Образование категории принадлежности единственного числа</h3>
      <LettersPanel/><br/>
      <table>
        <thead>
        <tr>
          <td>Последняя гласная<br/> буква корня</td>
          <td>Последняя<br/> буква корня</td>
          <td>Лицо</td>
          <td>Аффикс</td>
          <td>Пример</td>
          <td>Перевод</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowSpan={8}>а, я, ы</td>
          <td rowSpan={4}>Гласная</td>
          <td>1л.</td>
          <td><AffixItem value={'м'}/></td>
          <td><WordAffix root={(<span>аг<Letter value={'а'}/></span>)} affix={'м'}/></td>
          <td><i>мой брат</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'ң'}/></td>
          <td><WordAffix root={(<span>аг<Letter value={'а'}/></span>)} affix={'ң'}/></td>
          <td><i>твой брат</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'ңыз'}/></td>
          <td><WordAffix root={(<span>аг<Letter value={'а'}/></span>)} affix={'ңыз'}/></td>
          <td><i>ваш брат</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'сы'}/></td>
          <td><WordAffix root={(<span>аг<Letter value={'а'}/></span>)} affix={'сы'}/></td>
          <td><i>его брат</i></td>
        </tr>
        <tr>
          <td rowSpan={4}>Согласная</td>
          <td>1л.</td>
          <td><AffixItem value={'ым'}/></td>
          <td><WordAffix root={(<span>шаа<Letter value={'р'}/></span>)} affix={'ым'}/></td>
          <td><i>мой город</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'ың'}/></td>
          <td><WordAffix root={(<span>шаа<Letter value={'р'}/></span>)} affix={'ың'}/></td>
          <td><i>твой город</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'ыңыз'}/></td>
          <td><WordAffix root={(<span>шаа<Letter value={'р'}/></span>)} affix={'ыңыз'}/></td>
          <td><i>ваш город</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'ы'}/></td>
          <td><WordAffix root={(<span>шаа<Letter value={'р'}/></span>)} affix={'ы'}/></td>
          <td><i>его город</i></td>
        </tr>
        <tr>
          <td rowSpan={8}>э, е, и</td>
          <td rowSpan={4}>Гласная</td>
          <td>1л.</td>
          <td><AffixItem value={'м'}/></td>
          <td><WordAffix root={(<span>эж<Letter value={'е'}/></span>)} affix={'м'}/></td>
          <td><i>моя сестра</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'ң'}/></td>
          <td><WordAffix root={(<span>эж<Letter value={'е'}/></span>)} affix={'ң'}/></td>
          <td><i>твоя сестра</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'ңиз'}/></td>
          <td><WordAffix root={(<span>эж<Letter value={'е'}/></span>)} affix={'ңиз'}/></td>
          <td><i>ваша сестра</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'си'}/></td>
          <td><WordAffix root={(<span>эж<Letter value={'е'}/></span>)} affix={'си'}/></td>
          <td><i>его сестра</i></td>
        </tr>
        <tr>
          <td rowSpan={4}>Согласная</td>
          <td>1л.</td>
          <td><AffixItem value={'им'}/></td>
          <td><WordAffix root={(<span>же<Letter value={'р'}/></span>)} affix={'им'}/></td>
          <td><i>моя земля</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'иң'}/></td>
          <td><WordAffix root={(<span>же<Letter value={'р'}/></span>)} affix={'иң'}/></td>
          <td><i>твоя земля</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'иңиз'}/></td>
          <td><WordAffix root={(<span>же<Letter value={'р'}/></span>)} affix={'иңиз'}/></td>
          <td><i>ваша земля</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'и'}/></td>
          <td><WordAffix root={(<span>же<Letter value={'р'}/></span>)} affix={'и'}/></td>
          <td><i>его земля</i></td>
        </tr>
        <tr>
          <td rowSpan={8}>ө, ү</td>
          <td rowSpan={4}>Гласная</td>
          <td>1л.</td>
          <td><AffixItem value={'м'}/></td>
          <td><WordAffix root={(<span>өлк<Letter value={'ө'}/></span>)} affix={'м'}/></td>
          <td><i>моя страна</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'ң'}/></td>
          <td><WordAffix root={(<span>өлк<Letter value={'ө'}/></span>)} affix={'ң'}/></td>
          <td><i>твоя страна</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'ңүз'}/></td>
          <td><WordAffix root={(<span>өлк<Letter value={'ө'}/></span>)} affix={'ңүз'}/></td>
          <td><i>ваша страна</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'сү'}/></td>
          <td><WordAffix root={(<span>өлк<Letter value={'ө'}/></span>)} affix={'сү'}/></td>
          <td><i>его страна</i></td>
        </tr>
        <tr>
          <td rowSpan={4}>Согласная</td>
          <td>1л.</td>
          <td><AffixItem value={'үм'}/></td>
          <td><WordAffix root={(<span>кө<Letter value={'л'}/></span>)} affix={'үм'}/></td>
          <td><i>моё озеро</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'үң'}/></td>
          <td><WordAffix root={(<span>кө<Letter value={'л'}/></span>)} affix={'үң'}/></td>
          <td><i>твоё озеро</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'үңүз'}/></td>
          <td><WordAffix root={(<span>кө<Letter value={'л'}/></span>)} affix={'үңүз'}/></td>
          <td><i>ваше озеро</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'ү'}/></td>
          <td><WordAffix root={(<span>кө<Letter value={'л'}/></span>)} affix={'ү'}/></td>
          <td><i>его (её) озеро</i></td>
        </tr>
        <tr>
          <td rowSpan={8}>о, ё, у, ю</td>
          <td rowSpan={4}>Гласная</td>
          <td>1л.</td>
          <td><AffixItem value={'м'}/></td>
          <td><WordAffix root={(<span>то<Letter value={'о'}/></span>)} affix={'м'}/></td>
          <td><i>моя гора</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'ң'}/></td>
          <td><WordAffix root={(<span>то<Letter value={'о'}/></span>)} affix={'ң'}/></td>
          <td><i>твоя гора</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'ңуз'}/></td>
          <td><WordAffix root={(<span>то<Letter value={'о'}/></span>)} affix={'ңуз'}/></td>
          <td><i>ваша гора</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'су'}/></td>
          <td><WordAffix root={(<span>то<Letter value={'о'}/></span>)} affix={'су'}/></td>
          <td><i>его гора</i></td>
        </tr>
        <tr>
          <td rowSpan={4}>Согласная</td>
          <td>1л.</td>
          <td><AffixItem value={'ум'}/></td>
          <td><WordAffix root={(<span>ко<Letter value={'л'}/></span>)} affix={'ум'}/></td>
          <td><i>моё рука</i></td>
        </tr>
        <tr>
          <td>2л.</td>
          <td><AffixItem value={'уң'}/></td>
          <td><WordAffix root={(<span>ко<Letter value={'л'}/></span>)} affix={'уң'}/></td>
          <td><i>твоё рука</i></td>
        </tr>
        <tr>
          <td>2л.,в.ф.</td>
          <td><AffixItem value={'уңуз'}/></td>
          <td><WordAffix root={(<span>ко<Letter value={'л'}/></span>)} affix={'уңуз'}/></td>
          <td><i>ваше рука</i></td>
        </tr>
        <tr>
          <td>3л.</td>
          <td><AffixItem value={'у'}/></td>
          <td><WordAffix root={(<span>ко<Letter value={'л'}/></span>)} affix={'у'}/></td>
          <td><i>его (её) рука</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default BelongingSingle
