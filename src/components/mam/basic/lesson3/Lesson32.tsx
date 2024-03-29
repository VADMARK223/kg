/**
 * Компонент "Притяжательные местоимения I"
 *
 * @author Markitanov Vadim
 * @since 01.06.2023
 */
import React from 'react'

const Lesson32 = (): JSX.Element => {
  return (
    <>
      <p>
        Слова в категории принадлежности могут употребляться с притяжательными местоимениями, которые, как и
        прилагательные, не изменяются по падежам.
      </p>
      <table>
        <thead>
        <tr>
          <td>Единственное число</td>
          <td>Множественное число</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><b>менин</b> - <i>мой, моя, моё, мои</i></td>
          <td><b>биздин</b> - <i>наш, наша, наше, наши</i></td>
        </tr>
        <tr>
          <td><b>сенин</b> - <i>твой, твоя, твоё, твои</i></td>
          <td><b>силердин</b> - <i>ваш, ваша, ваше, ваши (мн. ч.)</i></td>
        </tr>
        <tr>
          <td><b>сиздин</b> - <i>ваш, ваша, ваше, ваши (в. ф.)</i></td>
          <td><b>сиздердин</b> - <i>ваш, ваша, ваше, ваши (в. ф., мн.ч.)</i></td>
        </tr>
        <tr>
          <td><b>анын</b> - <i>его (её)</i></td>
          <td><b>алардын</b> - <i>их</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        Имена существительные с аффиксами принадлежности отвечают на вопрос <b>кимдин?</b> (<i>чей? чья? чье? чьи?</i>).
      </p>
      <p>
        Имена существительные в сочетании с вопросительными словами <b>кимдин</b> стоит в третьем лице.
      </p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>-Бул кимдин телефон<u>у</u>?</b></td>
          <td><i>-Чей это телефон?</i></td>
        </tr>
        <tr>
          <td><b>-Ал менин телефон<u>ум</u>.</b></td>
          <td><i>-Это мой телефон.</i></td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>-Тиги кимдин сөздүг<u>ү</u>?</b></td>
          <td><i>-Чей тот словарь?</i></td>
        </tr>
        <tr>
          <td><b>-Ал менин сөздүг<u>үм</u>.</b></td>
          <td><i>-Это мой словарь.</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        Аффикс принадлежности универсален, может использоваться с разными частями речи, в частности, и с именами
        прилагательными:
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>боорукер<u>им</u></b></td>
          <td><i>добрый мой</i></td>
        </tr>
        <tr>
          <td><b>кичинекей<u>иңер</u> тентек</b></td>
          <td><i>ваш (мн.ч.) маленький - озорник</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        Если последняя буква корня слова - глухая согласная <b>К</b> или <b>П</b>, то, присоединяя к себе аффикс
        принадлежности, который начинается с гласного, она становится звонкой: <b>К</b> переходит в <b>Г</b>,
        а <b>П</b> переходит в <b>Б</b>.
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>көйнө<u>к</u> - көйнө<u>г</u>үм</b></td>
          <td><i>моя рубашка</i></td>
        </tr>
        <tr>
          <td><b>сөздү<u>к</u> - сөздү<u>г</u>үбүз</b></td>
          <td><i>наш словарь</i></td>
        </tr>
        <tr>
          <td><b>мекте<u>п</u> - мекте<u>б</u>иңер</b></td>
          <td><i>ваша (мн.ч.) школа</i></td>
        </tr>
        <tr>
          <td><b>ките<u>п</u> - ките<u>б</u>иң</b></td>
          <td><i>твоя книга</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson32
