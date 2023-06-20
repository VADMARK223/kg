/**
 * Компонент личных местоимений
 *
 * @author Markitanov Vadim
 * @since 18.05.2023
 */
import React from 'react'

const Pronouns = (): JSX.Element => {
  return (
    <>
      <h3>Личные местоимения</h3>
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
          <td><b>Мен</b> - <i>я</i></td>
          <td><b>Биз</b> - <i>мы</i></td>
        </tr>
        <tr>
          <td>2-е лицо</td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>Сен</b> - <i>ты</i></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>Сиз</b> - <i>вы</i></td>
              </tr>
              </tbody>
            </table>
          </td>
          <td className={'no-padding'}>
            <table className={'inner-table'}>
              <tbody>
              <tr>
                <td>Пр. фр.:</td>
                <td><b>Силер</b> - <i>вы</i></td>
              </tr>
              <tr>
                <td>Ув. фр.:</td>
                <td><b>Сиздер</b> - <i>вы</i></td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>3-е лицо</td>
          <td><b>Ал</b> - <i>он, она, оно</i></td>
          <td><b>Алар</b> - <i>они</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Pronouns
