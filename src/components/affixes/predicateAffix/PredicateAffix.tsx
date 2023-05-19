/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 18.05.2023
 */
import React from 'react'

const PredicateAffix = (): JSX.Element => {
  return (
    <>
      <h2>Аффиксы сказуемости</h2>
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
          <td><b>мен</b> -мын (-мин, -мун, -мүн)</td>
          <td><b>биз</b> -быз (-биз, -буз, -бүз)</td>
        </tr>
        <tr>
          <td>2-е лицо</td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>сен</b> -сын (-сиң, -суң, -сүң)</td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>Сиз</b> -сыз (-сиз, -суз, -сүз)</td>
              </tr>
              </tbody>
            </table>
          </td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>силер</b> -сыңар (-сиңер, -суңар, -сүңөр)</td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>Сиздер</b> -сыздар (-сиздер, -суздар, -сүздөр)</td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>3-е лицо</td>
          <td><b>ал</b> (нулевой аффикс)</td>
          <td><b>алар</b> (нулевой аффикс)</td>
        </tr>
        </tbody>
      </table>
      <h3>Примеры:</h3>
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
          <td>Мен окуучу<u>мун</u>. <i>Я ученик.</i></td>
          <td>Биз окуучу<u>буз</u>. <i>Мы ученики.</i></td>
        </tr>
        <tr>
          <td>2-е лицо</td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td>Cен окуучу<u>cуң</u>. <i>Ты ученик.</i></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td>Cиз окуучу<u>cуз</u>. <i>Вы ученик.</i></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td>Силер окуучу<u>суңар</u>. <i>Вы ученики.</i></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td>Сиздер окуучу<u>суздар</u>. <i>Вы ученики.</i></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>3-е лицо</td>
          <td>Ал окуучу. <i> Он ученик.</i></td>
          <td>Алар окуучу. <i> Они ученики.</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default PredicateAffix
