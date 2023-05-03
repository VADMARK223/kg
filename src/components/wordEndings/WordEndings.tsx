/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 11.03.2023
 */
import React from 'react'
import './WordEndings.css'

const WordEndings = (): JSX.Element => {
  return (
    <>
      <div>
        <h1>Вопросительные аффиксы</h1>
        <table>
          <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Последняя гласная буква корня:</td>
            <td colSpan={2}><b>ы, а, я</b></td>
            <td colSpan={2}><b>и, э, е</b></td>
            <td colSpan={2}><b>ү, ө</b></td>
            <td colSpan={2}><b>у, о, ё, ю</b></td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Последняя буква корня:</td>
            <td>Глас. или звон согл.</td>
            <td>Глухая согл.</td>
            <td>Глас. или звон согл.</td>
            <td>Глухая согл.</td>
            <td>Глас. или звон согл.</td>
            <td>Глухая согл.</td>
            <td>Глас. или звон согл.</td>
            <td>Глухая согл.</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Аффикс:</td>
            <td><b>-бы</b></td>
            <td><b>-пы</b></td>
            <td><b>-би</b></td>
            <td><b>-пи</b></td>
            <td><b>-бү</b></td>
            <td><b>-пү</b></td>
            <td><b>-бу</b></td>
            <td><b>-пу</b></td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Примеры:</td>
            <td>
              <p>Бар<b>бы</b>? (Есть?)</p>
            </td>
            <td>
              <p>Кызык<b>пы</b>? (Интересный?)</p>
            </td>
            <td></td>
            <td>
              <p>Китеп<b>пи</b>? (Книга?)</p>
            </td>
            <td></td>
            <td><p>Төрт<b>пү</b>? (Четыре?)</p></td>
            <td></td>
            <td><p>Чоголуш<b>пү</b>? (Собрание?)</p></td>
          </tr>
          </tbody>
        </table>
      </div>
      <></>
    </>
  )
}

export default WordEndings
