/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'
import WordAffix from '../common/WordAffix'

const VOICED_CONSONANT = 'Звонкая согласная'
const VOICELESS_CONSONANT = 'Глухая согласная'

const Multiplicity = (): JSX.Element => {
  return (
    <>
      1. Форма множественного числа образуется путем присоединения к корню слова аффикса множественного числа <b>-лар</b>
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
          <td rowSpan={5} colSpan={2}>а, я, ы</td>
          <td>
            Гласная
          </td>
          <td rowSpan={3}>
            -лар
          </td>
          <td>
            <WordAffix root={'китепкан'} affix={'а'}/> - <WordAffix root={'китепкана'} affix={'лар'}/>
          </td>
          <td>
            библиотека - библиотеки
          </td>
        </tr>
        <tr>
          <td>
            й
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
            р
          </td>
          <td>
            <WordAffix root={'шаа'} affix={'р'}/> - <WordAffix root={'шаар'} affix={'лар'}/>
          </td>
          <td>
            город - города
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANT}
          </td>
          <td>
            -дар<br/>
          </td>
          <td>
            <WordAffix root={'ада'} affix={'м'}/> - <WordAffix root={'адам'} affix={'дар'}/>
          </td>
          <td>
            человек - люди
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANT}
          </td>
          <td>
            -тар<br/>
          </td>
          <td>
            <WordAffix root={'мышы'} affix={'к'}/> - <WordAffix root={'мышык'} affix={'тар'}/>
          </td>
          <td>
            кот - коты
          </td>
        </tr>
        <tr>
          <td rowSpan={5} colSpan={2}>э, е, и</td>
          <td>
            Гласная
          </td>
          <td rowSpan={3}>
            -лер
          </td>
          <td>
            <WordAffix root={'кем'} affix={'е'}/> - <WordAffix root={'кеме'} affix={'лер'}/><br/>
          </td>
          <td>
            корабль - корабли
          </td>
        </tr>
        <tr>
          <td>
            й
          </td>
          <td>
            <WordAffix root={'музе'} affix={'й'}/> - <WordAffix root={'музей'} affix={'лер'}/>
          </td>
          <td>
            музей - музеи
          </td>
        </tr>
        <tr>
          <td>
            р
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
            {VOICED_CONSONANT}
          </td>
          <td>
            -дер<br/>
          </td>
          <td>
            <WordAffix root={'мугали'} affix={'м'}/> - <WordAffix root={'мугалим'} affix={'дер'}/>
          </td>
          <td>
            учитель - учителя
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANT}
          </td>
          <td>
            -тер<br/>
          </td>
          <td>
            <WordAffix root={'ките'} affix={'п'}/> - <WordAffix root={'китеп'} affix={'тер'}/>
          </td>
          <td>
            книга - книги
          </td>
        </tr>
        <tr>
          <td rowSpan={5} colSpan={2}>ө ү</td>
          <td>
            Гласная
          </td>
          <td rowSpan={3}>
            -лөр
          </td>
          <td>
            <WordAffix root={'сүрөтч'} affix={'ү'}/> - <WordAffix root={'сүрөтчү'} affix={'лөр'}/>
          </td>
          <td>
            художник - художники
          </td>
        </tr>
        <tr>
          <td>
            й
          </td>
          <td>
            <WordAffix root={'ү'} affix={'й'}/> - <WordAffix root={'үй'} affix={'лөр'}/>
          </td>
          <td>
            дом - дома
          </td>
        </tr>
        <tr>
          <td>
            р
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
            {VOICED_CONSONANT}
          </td>
          <td>
            -дөр<br/>
          </td>
          <td>
            <WordAffix root={'кө'} affix={'л'}/> - <WordAffix root={'көл'} affix={'дөр'}/>
          </td>
          <td>
            озеро - озера
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANT}
          </td>
          <td>
            -төр<br/>
          </td>
          <td>
            <WordAffix root={'көйнө'} affix={'к'}/> - <WordAffix root={'көйнөк'} affix={'төр'}/>
          </td>
          <td>
            платье - платья
          </td>
        </tr>
        <tr>
          <td rowSpan={5}>о ё у ю</td>
          <td rowSpan={5}>о ё</td>
          <td>
            Гласная
          </td>
          <td rowSpan={3}>
            -лөр
          </td>
          <td>
            <WordAffix root={'сүрөтч'} affix={'ү'}/> - <WordAffix root={'сүрөтчү'} affix={'лөр'}/>
          </td>
          <td>
            художник - художники
          </td>
        </tr>
        <tr>
          <td>
            й
          </td>
          <td>
            <WordAffix root={'ү'} affix={'й'}/> - <WordAffix root={'үй'} affix={'лөр'}/>
          </td>
          <td>
            дом - дома
          </td>
        </tr>
        <tr>
          <td>
            р
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
            {VOICED_CONSONANT}
          </td>
          <td>
            -дөр<br/>
          </td>
          <td>
            <WordAffix root={'кө'} affix={'л'}/> - <WordAffix root={'көл'} affix={'дөр'}/>
          </td>
          <td>
            озеро - озера
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANT}
          </td>
          <td>
            -төр<br/>
          </td>
          <td>
            <WordAffix root={'көйнө'} affix={'к'}/> - <WordAffix root={'көйнөк'} affix={'төр'}/>
          </td>
          <td>
            платье - платья
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Multiplicity
