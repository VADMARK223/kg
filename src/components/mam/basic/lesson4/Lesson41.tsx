/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 24.06.2023
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutePath } from '../../../../service/router'
import AffixItem from '../../../common/AffixItem'

const Lesson41 = (): JSX.Element => {
  return (
    <>
      <div className={'center-block'}>I</div>
      <p>
        Принадлежность выражается также <b>родительным падежом</b> имени существительного (см. <Link to={RoutePath.GENITIVE_TABLE}>Образование родительного падежа</Link>)
      </p>
      <span>
        Родительный падеж, обозначая принадлежность, выражает следующие конкретные значения:
      </span>
      <ol>
        <li><i>обладатель предмета: </i>Нурбек<b>тин</b> телефон<b>у</b> (телефон Нурбека);</li>
        <li><i>родственные отношения: </i>эжем<b>дин</b> балас<b>ы</b> (сын моей старшей сестры);</li>
        <li><i>часть предмета: </i>бөлмө<b>нүн</b> терезес<b>и</b> (окно комнаты); шкаф<b>тын</b> текче<b>си</b> (полка шкафа);</li>
        <li><i>место или время: </i>Кыргызстан<b>дын</b> шаар<b>ы</b> (город Кыргызстана); жаз<b>дын</b> күн<b>ү</b> (весенний день).</li>
      </ol>
      <p>
        В описываемой грамматической конструкции первое имя существительное (определение) стоит в родительном падеже, а второе (определяемое) присоединяет к себе аффикс принадлежности третьего лица.
      </p>
      <p>
        На русском языке данные пары существительных переводятся в обратной последовательности.<br/>
        <i>Например:</i> Сергейдин машинасы - машина Сергея; шкафтын текчеси - полка шкафа.
      </p>
      <p>
        В структуре слова падежный аффикс всегда стоит после аффиксов принадлежности.<br/>
        <i>Например:</i><br/>
        байке<b>м<u>дин</u></b> иши - работа моего брата<br/>
        ата<b>сы<u>нын</u></b> машинасы - машина его (её, их) отца<br/>
        сиңди<b>ң<u>дин</u></b> мектеби - школа твоей сестры<br/>
      </p>
      <p>
        <b>Вопросы родительного падежа:</b> <i>кимдин?, эмненин? (чей? чья? чьё? чьи?).</i> <i>Например:</i>
      </p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>- Бул <b>кимдин</b> машинасы?</td>
          <td><i>- Чья эта машина?</i></td>
        </tr>
        <tr>
          <td>- Бул Сергейдин машинасы.</td>
          <td><i>- Это машина Сергея.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>- Бул <b>эмненин</b> ачкычы?</td>
          <td><i>- От чего этот ключ?</i></td>
        </tr>
        <tr>
          <td>- Бул чоң атамдын столунун ачкычы.</td>
          <td><i>- Это ключ от стола дедушки.</i></td>
        </tr>
        </tbody>
      </table>

      <div className={'center-block'}>II</div>
      <p>
        Склонения слов с аффиксами принадлежности <b>третье лица</b> отличается от склонения слов без ни во всех падежах, кроме родительного.
      </p>
      <p>
        См. таблицу <b>Второе склонение</b> для слов в категории принадлежности.
      </p>
      <p>
        Варианты аффикса местного падежа для слов с аффиксами принадлежности 3 лица:
      </p>
      <table>
        <tbody>
        <tr>
          <td>а, я, ы / о, ё, у, ю</td>
          <td>э, е, и</td>
          <td>ө, ү</td>
        </tr>
        <tr>
          <td><AffixItem value={'нда'}/></td>
          <td><AffixItem value={'нде'}/></td>
          <td><AffixItem value={'ндө'}/></td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left' }}>
            <b>ата</b> - отец<br/>
            <b>атасы</b> - его (её, их) отец<br/>
            <b>атасы<u>нда</u></b> - у его (её, их) отца
            <hr/>
            <b>стол</b> - стол<br/>
            <b>столу</b> - его (её, их) стол<br/>
            <b>столу<u>нда</u></b> - на его (её, их) столе
          </td>
          <td style={{ textAlign: 'left', verticalAlign: 'top' }}>
            <b>эже</b> - сестра<br/>
            <b>эжеси</b> - его (её, их) сестра<br/>
            <b>эжеси<u>нде</u></b> - у его (её, их) сестры
          </td>
          <td style={{ textAlign: 'left', verticalAlign: 'top' }}>
            <b>жүрөк</b> - сердце<br/>
            <b>жүрөгү</b> - его (её, их) сердце<br/>
            <b>жүрөгү<u>ндө</u></b> - в его (её, их) сердце
          </td>
        </tr>
        </tbody>
      </table>
      <p>
        <b><i>Чтобы легче было запомнить!</i></b>
      </p>
      <p>
        Аффиксы местного падежа для слов в категории принадлежности отличаются от аффиксов местного падежа для слов без аффиксов принадлежности только наличием начального <AffixItem value={'н'}/>
      </p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>Темир азыр ишкана<b>да</b>.</td>
          <td><i>Темир сейчас на предприятии.</i></td>
        </tr>
        <tr>
          <td>Темир азыр ишкана<b>нда</b>.</td>
          <td><i>Темир сейчас на своём предприятии.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>Болоттун ноутбугу азыр офис<b>те</b>.</td>
          <td><i>Ноутбук Болота сейчас в офисе.</i></td>
        </tr>
        <tr>
          <td>Болоттун ноутбугу азыр офис<b>нде</b>.</td>
          <td><i>Ноутбук Болота сейчас в его офисе.</i></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson41
