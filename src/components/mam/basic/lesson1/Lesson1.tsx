/**
 * Компонент "Выражение вопроса"
 *
 * @author Markitanov Vadim
 * @since 26.05.2023
 */
import React from 'react'
import { RoutePath } from '../../../../service/router'
import { Link } from 'react-router-dom'

const Lesson1 = (): JSX.Element => {
  return (
    <>
      <p>
        1. Вопросительные предложения с вопросительными словами называются <b>специальными</b>.
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>-Бул <u>ким?</u></b></td>
          <td>-Кто это?</td>
        </tr>
        <tr>
          <td><b>-Бул Сергей.</b></td>
          <td>-Это Сергей.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>-Бул <u>эмне?</u></b></td>
          <td>Что это?</td>
        </tr>
        <tr>
          <td><b>-Бул музей.</b></td>
          <td>Это музей.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>-Бул <u>кандай</u> университет?</b></td>
          <td>-Это какой университет?</td>
        </tr>
        <tr>
          <td><b>-Бул жаңы университет.</b></td>
          <td>-Это новый университет.</td>
        </tr>
        </tbody>
      </table>
      <p>
        Вопросительное слово <b>ким</b> относится к именам существительным, обозначающим только человека.
      </p>
      <p>
        <b>В кыргызском языке отсутствуют категории рода.</b>
      </p>
      <p>
        <b>Имя прилагательное не изменяется по числам и падежам.</b>
      </p>
      <p>
        2. В вопросительных предложениях к словам, которые выражают предмет интереса присоединяется вопросительных аффикс <b>-бы?</b> (см. <Link to={RoutePath.AFFIXES}>Аффиксы (вопросительные)</Link>, а также <Link to={RoutePath.INTRODUCTORY_PHONETIC}>Вводно-фонетический курс</Link>)
      </p>
      <p>
        Такие вопросительные предложения называются <b>общими.</b> Они требуют ответа <b>&quot;ооба&rdquo;</b> (да) или <b>&quot;жок&rdquo;</b> (нет).
      </p>
      <p>
        Отрицательный ответ на вопрос содержит отрицание <b>&quot;эмес&rdquo;</b> (не). В предложении оно находится после слова, которое отрицается.
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>-Сергей студент<u>пи?</u></b></td>
          <td>-Сергей студент?</td>
        </tr>
        <tr>
          <td><b>-Ооба, ал студент.</b></td>
          <td>-Да, он студент.</td>
        </tr>
        <tr>
          <td><b>(-Жок, студент <u>эмес</u>.)</b></td>
          <td>-Нет, не студент.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>-Бул журнал кызыктуу<u>бу?</u></b></td>
          <td>-Этот журнал интересный?</td>
        </tr>
        <tr>
          <td><b>-Ооба, кызыктуу.</b></td>
          <td>-Да, интересный.</td>
        </tr>
        <tr>
          <td><b>(-Жок, кызыктуу <u>эмес</u>.)</b></td>
          <td>-Нет, неинтересный.</td>
        </tr>
        </tbody>
      </table>
      <p>
        В альтернативных вопросительных предложениях используется союз <b>же</b> (или)
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>-Бул китеппи <u>же</u> дептерби?</b></td>
          <td>-Это книга или тетрадь?</td>
        </tr>
        <tr>
          <td><b>-Бул газета жаңыбы <u>же</u> эскиби?</b></td>
          <td>-Это газета новая или старая?</td>
        </tr>
        </tbody>
      </table>
      <p>
        4. Иногда, обычно в коротких вопросительных предложениях (одно - два слова), употребляется вопросительный аффикс <b>-чы</b>, который в данном случае переводится на русский язык как частица <b>а</b>:
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>-Бул эмне?</b></td>
          <td>-Что это?</td>
        </tr>
        <tr>
          <td><b>-Бул театр.</b></td>
          <td>-Это театр.</td>
        </tr>
        <tr>
          <td><b>-Тиги<u>чи</u>?</b></td>
          <td>-А то?</td>
        </tr>
        <tr>
          <td><b>-Тиги музей.</b></td>
          <td>-То музей.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>-Бул журнал кызыктуубу?</b></td>
          <td>-Этот журнал интересный?</td>
        </tr>
        <tr>
          <td><b>-Ооба, кызыктуу.</b></td>
          <td>-Да, интересный.</td>
        </tr>
        <tr>
          <td><b>Бул газета<u>чи</u>?..</b></td>
          <td>-А эта газета?..</td>
        </tr>
        </tbody>
      </table>
      <div className={'center-block'}>Образование словоформ с аффиксом -чы</div>
      <table>
        <tbody>
        <tr>
          <td>а, я, ы</td>
          <td>э, е, и</td>
          <td>ө, ү</td>
          <td>о, ё, у, ю</td>
        </tr>
        <tr>
          <td><b>-чы</b></td>
          <td><b>-чи</b></td>
          <td><b>-чү</b></td>
          <td><b>-чу</b></td>
        </tr>
        <tr>
          <td><b>Газета<u>чы</u>?</b><br/>А газета?</td>
          <td><b>Китеп<u>чи</u>?</b><br/>А книга?</td>
          <td><b>Сүт<u>чү</u>?</b><br/>А молоко?</td>
          <td><b>Стол<u>чу</u>?</b><br/>А стол?</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson1
