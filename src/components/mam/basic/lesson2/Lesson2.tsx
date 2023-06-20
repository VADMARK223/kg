/**
 * Компонент "Выражение местонахождения"
 *
 * @author Markitanov Vadim
 * @since 26.05.2023
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../../../service/router'

const Lesson2 = (): JSX.Element => {
  return (
    <>
      <p>
        1. Значение местонахождения выражает местный падеж (см. <Link to={RoutePath.LOCATIVE}>Образование местного падежа</Link>)
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>Студент университет<u>те</u>.</b></td>
          <td>Студент в университете.</td>
        </tr>
        <tr>
          <td><b>Дептер стол<u>до</u>.</b></td>
          <td>Тетрадь (в) на столе.</td>
        </tr>
        </tbody>
      </table>
      <p>
        Слова, выражающие значение местонахождения, отвечают на вопросы:
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>Кайда?</b></td>
          <td>Где?</td>
        </tr>
        <tr>
          <td><b>Кайсы жерде? (</b>разг. <b>каерде?)</b></td>
          <td>В каком месте? Где?</td>
        </tr>
        <tr>
          <td><b>Кайсы жакта? (</b>разг. <b>каякта?)</b></td>
          <td>В каком месте? Где?</td>
        </tr>
        <tr>
          <td><b>Эмнеде?</b></td>
          <td>В (на) чем?</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b> - Анара <u>кайда</u>?</b></td>
          <td> - Где Анара?</td>
        </tr>
        <tr>
          <td><b> - Ал мектеп<u>те</u>.</b></td>
          <td> - Она в школе.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b> - Көйнөк <u>кайсы жерде</u>?</b></td>
          <td> - Где рубашка?</td>
        </tr>
        <tr>
          <td><b> - Ал шкаф<u>та</u>.</b></td>
          <td> - Она в шкафу.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b> - Сүт <u>эмнеде</u>?</b></td>
          <td> - Молоко в чем?</td>
        </tr>
        <tr>
          <td><b> - Тетиги пияла<u>да</u>.</b></td>
          <td> - Вон в той пиале.</td>
        </tr>
        </tbody>
      </table>
      <p>
        Вопросительные аффиксы <b>-бы</b> всегда находятся в конце слова, после всех остальных аффиксов.
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>- Сергей үй<u>дө</u>бү?</b></td>
          <td>- Сергей домам?</td>
        </tr>
        <tr>
          <td><b>- Жок, ал азыр университет<u>те</u>.</b></td>
          <td>- Нет, он сейчас в университете.</td>
        </tr>
        <tr>
          <td colSpan={2}/>
        </tr>
        <tr>
          <td><b>- Марат иш<u>те</u>би?</b></td>
          <td>- Марат на работе?</td>
        </tr>
        <tr>
          <td><b>- Ооба, иш<u>те</u>.</b></td>
          <td>- Да, на работе.</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson2
