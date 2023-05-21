/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React from 'react'

const Multiplicity = (): JSX.Element => {
  return (
    <>
      1. Форма множественного числа образуется путем присоединения к корню слова аффикса множественного числа <b>-лар</b>
      <table>
        <thead>
        <tr>
          <td>Последняя гласная буква корня</td>
          <td>Последняя буква корня</td>
          <td>Аффикс</td>
          <td>Примеры</td>
          <td>Перевод</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowSpan={3}>а, я, ы</td>
          <td>
            гл., й, р
          </td>
          <td>
            -лар<br/>
          </td>
          <td>
            библиотека - библиотеки
          </td>
          <td>
            библиотека - библиотеки
          </td>
        </tr>
        <tr>
          <td>
            зв. согл.
          </td>
          <td>
            -дар<br/>
          </td>
          <td>
            дар1
          </td>
          <td>
            дар2
          </td>
        </tr>
        <tr>
          <td>
            глух. согл.
          </td>
          <td>
            -тар<br/>
          </td>
          <td>
            тар1
          </td>
          <td>
            человек - люди
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Multiplicity
