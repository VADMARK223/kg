/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 01.06.2023
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../../../service/router'

const Lesson31 = (): JSX.Element => {
  return (
    <>
      <div className={'center-block'}>I</div>
      <p>
        В кыргызском языке, как и вообще в тюркских языках, принято почти всегда, говоря о родственниках, близких людях, о личных вещах, о доме, об учёбе, о работе и т.д., выражать их принадлежность кому-либо.
      </p>
      <p>
        Это значение реализуется при помощи <b>аффиксов принадлежности.</b> (см. <Link to={RoutePath.BELONGING_SINGLE_TABLE}>Образование категории принадлежности единственного числа</Link>)
      </p>
      <p>
        Слова с аффиксами принадлежности выражают в одном слове и предмете (в широком значении) и указание на лицо, которому он принадлежит, например:
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>бала<u>м</u></b> - <i>мой ребенок</i></td>
          <td><b>шаар<u>ыбыз</u></b> - <i>наш город</i></td>
        </tr>
        <tr>
          <td><b>иш<u>иң</u></b> - <i>твоя работа</i></td>
          <td><b>университет<u>иңер</u></b> - <i>ваш (мн.ч.) университет</i></td>
        </tr>
        <tr>
          <td><b>үй-бүлө<u>ңүз</u></b> - <i>ваша (в. ф.) семья</i></td>
          <td><b>иш<u>иңиздер</u></b> - <i>ваша (в.ф., мн.ч.) работа</i></td>
        </tr>
        <tr>
          <td><b>бөлмө<u>сү</u></b> - <i>его (её, их) комната</i></td>
          <td><b>окуу<u>су</u></b> - <i>его (её, их) ученик</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        1. Категория принадлежности имеет по два варианта аффиксов на каждую группу гласных. Аффиксы принадлежности обслуживающие первый рад гласных.
      </p>
      <table>
        <thead>
        <tr>
          <td/>
          <td>Единственное число</td>
          <td>Множественное число</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1 л.</td>
          <td><b>-м (-ым)</b></td>
          <td><b>-быз (-ыбыз)</b></td>
        </tr>
        <tr>
          <td>2 л.</td>
          <td><b>-ң (-ың)</b></td>
          <td><b>-ңар (-ыңар)</b></td>
        </tr>
        <tr>
          <td>2 л., в. ф.</td>
          <td><b>-ңыз (-ыңыз)</b></td>
          <td><b>-ңыздар (-ыңыздар)</b></td>
        </tr>
        <tr>
          <td>3 л.</td>
          <td><b>-сы (-ы)</b></td>
          <td><b>-сы (-ы)</b></td>
        </tr>
        </tbody>
      </table>
      <p>
        К корням слов с последним гласным звуком присоединяется аффикс, начинающийся с согласного <b>(-м, -ң, -ңыз, -сы, -быз, - ңар, -ңаздар)</b>
      </p>
      <table>
        <tbody>
        <tr>
          <td colSpan={2}><b>апа</b> - <i>мама</i></td>
        </tr>
        <tr>
          <td><b>апа<u>м</u></b> - <i>мой мама</i></td>
          <td><b>апа<u>быз</u></b> - <i>наша мама</i></td>
        </tr>
        <tr>
          <td><b>апа<u>ң</u></b> - <i>твоя мама</i></td>
          <td><b>апа<u>ңар</u></b> - <i>ваша мама</i></td>
        </tr>
        <tr>
          <td><b>апа<u>ңыз</u></b> - <i>ваша мама</i></td>
          <td><b>апа<u>ңыздар</u></b> - <i>ваша мама</i></td>
        </tr>
        <tr>
          <td colSpan={2}><b>апа<u>сы</u></b> - <i>его (её, их) мама</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        К корням слов с последним согласным сначала подставляются гласные первого ряда, а затем аффиксы принадлежности <b>(-<u>ы</u>м, -<u>ы</u>ң, -<u>ы</u>ңыз, -ы, -<u>ы</u>быз, - <u>ы</u>ңар, -<u>ы</u>ңаздар)</b>
      </p>
      <table>
        <tbody>
        <tr>
          <td colSpan={2}><b>ат</b> - <i>имя</i></td>
        </tr>
        <tr>
          <td><b>аты<u>м</u></b> - <i>мой имя</i></td>
          <td><b>аты<u>быз</u></b> - <i>наше имя</i></td>
        </tr>
        <tr>
          <td><b>аты<u>ң</u></b> - <i>твоё имя</i></td>
          <td><b>аты<u>ңар</u></b> - <i>ваше имя</i></td>
        </tr>
        <tr>
          <td><b>аты<u>ңыз</u></b> - <i>ваше имя</i></td>
          <td><b>аты<u>ңыздар</u></b> - <i>ваше имя</i></td>
        </tr>
        <tr>
          <td colSpan={2}><b>аты</b> - <i>его (её, их) имя</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        2. Аффиксы принадлежности третьего лица единственного и множественного числа аналогичны.
      </p>
      <table>
        <tbody>
        <tr>
          <td><b>анын машина<u>сы</u></b> - <i>его (её) машина</i></td>
          <td><b>анын стол<u>у</u></b> - <i>его (её) стол</i></td>
        </tr>
        <tr>
          <td><b>алардын машина<u>сы</u></b> - <i>их машина</i></td>
          <td><b>алардын стол<u>у</u></b> - <i>их стол</i></td>
        </tr>
        <tr>
          <td/>
          <td/>
        </tr>
        <tr>
          <td><b>анын бөлмө<u>сү</u></b> - <i>его (её) комната</i></td>
          <td><b>анын сөздү<u>гү</u></b> - <i>его (её) словарь</i></td>
        </tr>
        <tr>
          <td><b>алардын бөлмө<u>сү</u></b> - <i>их комната</i></td>
          <td><b>алардын сөздү<u>гү</u></b> - <i>их словарь</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        3. В образовании словоформ с аффиксами принадлежности второго лица множественного числа группы гласных <b>о, ё, у, ю</b> есть свои особенности.
      </p>
      <p>
        Если корень слова этой группы гласных заканчивается на гласную <b>о</b> (короо, кресло), то ему соответствует аффикс принадлежности <b>-коң</b>:
      </p>
      <table>
        <tbody>
        <tr>
          <td>короо<b>коң</b> - <i>ваш двор</i></td>
          <td>кресло<b>коң</b> - <i>ваше кресло</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        Но если корень слова с последней гласной <b>-у</b> (окуучу, курбу), то аффикс этих слов <b>-ңар</b>:
      </p>
      <table>
        <tbody>
        <tr>
          <td>окуучу<b>ңар</b> - <i>ваш ученик</i></td>
          <td>курбу<b>ңар</b> - <i>ваша подруга</i></td>
        </tr>
        </tbody>
      </table>
      <p>
        Если же корень слова с последней согласной буквой (телефон, стул, дос, чогулуш), то аффикс образованной словоформы <b>-уңар</b>:
      </p>
      <table>
        <tbody>
        <tr>
          <td>телефон<b>уңар</b> - <i>ваш телефон</i></td>
          <td>стул<b>уңар</b> - <i>ваш стул</i></td>
        </tr>
        <tr>
          <td>дос<b>уңар</b> - <i>ваш друг</i></td>
          <td>чогулуш<b>уңар</b> - <i>ваше собрание</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson31
