/**
 * Компонент личных аффиксов
 *
 * @author Markitanov Vadim
 * @since 19.05.2023
 */
import React from 'react'
import Pronouns from '../../pronouns/Pronouns'

const PersonalAffix = (): JSX.Element => {
  return (
    <>
      <Pronouns/>
      <h2>I тип личных аффиксов</h2>
      Участвуют в образовании глаголов простого настоящего
      <table style={{ height: '10px' }}>
        <thead>
        <tr>
          <th/>
          <th>Ед. ч.</th>
          <th>Мн. ч.</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1-е лицо</td>
          <td><b>-мын</b></td>
          <td><b>-быз</b></td>
        </tr>
        <tr>
          <td>2-е лицо</td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>-сың</b></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>-сыз</b></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>-сыңар</b></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>-сыздар</b></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>3-е лицо</td>
          <td><b>-т</b></td>
          <td><b>-шат</b></td>
        </tr>
        </tbody>
      </table>

      <h2>II тип личных аффиксов</h2>
      Это форма прошедшего определенного времени глагола
      <table style={{ height: '10px' }}>
        <thead>
        <tr>
          <th/>
          <th>Ед. ч.</th>
          <th>Мн. ч.</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1-е лицо</td>
          <td><b>-м</b></td>
          <td><b>-к</b></td>
        </tr>
        <tr>
          <td>2-е лицо</td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>-ң</b></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>-ңыз</b></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>-ңар</b></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>-ңыздар</b></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>3-е лицо</td>
          <td><b>-</b></td>
          <td><b>-</b></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default PersonalAffix
