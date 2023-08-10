/**
 * Компонент алгоритмической таблицы образования вопросительных аффиксов
 *
 * @author Markitanov Vadim
 * @since 10.08.2023
 */
import React from 'react'
import CommonTable from './CommonTable'

const QuestionTable = (): JSX.Element => {
  return (
    <CommonTable title={'№1 Образование словоформ с вопросительным аффиксом -бы'}>
      <table>
        <tbody>
        <tr>
          <td style={{ textAlign: 'left' }}>Последняя гласная буква корня:</td>
          <td colSpan={2}><b>а, я, ы</b></td>
          <td colSpan={2}><b>э, е, и</b></td>
          <td colSpan={2}><b>ө, ү</b></td>
          <td colSpan={2}><b>о, ё, у, ю</b></td>
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
            Бар<b>бы</b>? (Есть?)
          </td>
          <td>
            Кызык<b>пы</b>? (Интересный?)
          </td>
          <td>
            Текшерди<b>би</b>? (Проверено?)
          </td>
          <td>
            Китеп<b>пи</b>? (Книга?)
          </td>
          <td>
            Үйрендүң<b>бү?</b>
          </td>
          <td>
            Төрт<b>пү</b>? (Четыре?)
          </td>
          <td>
            Коңгуроо<b>бу</b>? (Звонок?)
          </td>
          <td>
            Чоголуш<b>пү</b>? (Собрание?)
          </td>
        </tr>
        </tbody>
      </table>
    </CommonTable>
  )
}

export default QuestionTable
