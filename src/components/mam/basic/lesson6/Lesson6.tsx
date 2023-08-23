/**
 * Компонент урока: "Выражение объекта-обладателя"
 *
 * @author Markitanov Vadim
 * @since 23.08.2023
 */
import React from 'react'
import AffixItem from '../../../common/AffixItem'

const Lesson6 = (): JSX.Element => {
  return (
    <>
      <div className={'center-block'}>I</div>
      <p>Значение объекта-обладателя в конструкции наличия выражает местный падеж.</p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>Журнал Айбек<AffixItem value={'те'} inWord/>.</b></td>
          <td><i>Журнал у Айбека.</i></td>
        </tr>
        <tr>
          <td><b>Фатима<AffixItem value={'да'} inWord/> орусча-кыргызча сөздүк бар.</b></td>
          <td><i>У Фатимы есть русско-кыргызский словарь.</i></td>
        </tr>
        </tbody>
      </table>
      <p>Вопрос об объекте обладателе - <b>кимде?</b> <i>(у кого?)</i></p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>- Сөздүк кимде?</b></td>
          <td><i>- У кого словарь?</i></td>
        </tr>
        <tr>
          <td><b>- Руслан<AffixItem value={'да'} inWord/>.</b></td>
          <td><i>- У Руслана.</i></td>
        </tr>
        </tbody>
      </table>
      <p>В грамматической конструкции наличие в значении объекта - обладателя используются имена существительные, а также личные местоимения в местном падеже.</p>
      <div className={'center-block'}>ЛИЧНЫЕ МЕСТОИМЕНИЯ В МЕСТНОМ ПАДЕЖЕ</div>
      <div className={'center-block'}>единственное число</div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>именительный падеж</td>
          <td>местный падеж</td>
        </tr>
        <tr>
          <td><b>1 л.</b></td>
          <td><b>мен</b> я</td>
          <td><b>менде</b> у меня</td>
        </tr>
        <tr>
          <td><b>2 л.</b></td>
          <td><b>сен</b> ты</td>
          <td><b>сенде</b> у тебя</td>
        </tr>
        <tr>
          <td><b>2 л., в. ф.</b></td>
          <td><b>сиз</b> вы (в. ф.)</td>
          <td><b>сизде</b> у вас</td>
        </tr>
        <tr>
          <td><b>3 л.</b></td>
          <td><b>ал</b> он (она, оно)</td>
          <td><b>анда</b> у него (у нее)</td>
        </tr>
        </tbody>
      </table>
      <div className={'center-block'}>множественное число</div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>именительный падеж</td>
          <td>местный падеж</td>
        </tr>
        <tr>
          <td><b>1 л.</b></td>
          <td><b>биз</b> мы</td>
          <td><b>бизде</b> у нас</td>
        </tr>
        <tr>
          <td><b>2 л.</b></td>
          <td><b>силер</b> вы (мн.ч.)</td>
          <td><b>силерде</b> у вас</td>
        </tr>
        <tr>
          <td><b>2 л., в. ф.</b></td>
          <td><b>сиздер</b> вы (в.ф., мн.ч.)</td>
          <td><b>сиздерде</b> у вас</td>
        </tr>
        <tr>
          <td><b>3 л.</b></td>
          <td><b>алар</b> они</td>
          <td><b>аларда</b> у них</td>
        </tr>
        </tbody>
      </table>

      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>- Кимде кызыл калем сап бар?</td>
          <td><i>- У кого есть красная ручка?</i></td>
        </tr>
        <tr>
          <td>- Менде бар.</td>
          <td><i>- У меня есть.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td>- Сенде сөздүк барбы?</td>
          <td><i>- У тебя есть словарь?</i></td>
        </tr>
        <tr>
          <td>- Жок, менде жок. Менимче, Светлана бар.</td>
          <td><i>- Нет, у меня нет. У Светы, по-моему, есть.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <div className={'center-block'}>II</div>
      <p>Часто в языке употребляется другая грамматическая конструкция, выражающая значение наличности. Это конструкция с именем существительным в категории принадлежности.</p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b><u>Менин досум</u> бар.</b></td>
          <td><i>У меня есть друг.</i></td>
        </tr>
        <tr>
          <td><b><u>Сенин телефонуң</u> барбы?</b></td>
          <td><i>У тебя есть телефон?</i></td>
        </tr>
        <tr>
          <td><b><u>Силердин машинаңар</u> барбы?</b></td>
          <td><i>У вас есть машина?</i></td>
        </tr>
        <tr>
          <td><b><u>Тилектин компьютери</u> барбы?</b></td>
          <td><i>У Тилека есть компьютер?</i></td>
        </tr>
        </tbody>
      </table>
      <p>Притяжательные местоимения в таких грамматических конструкциях могут не употребляться.</p>
      <i>Например:</i>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>- Калем сабың барбы?</b></td>
          <td><i>- У тебя (твоя) ручка есть?</i></td>
        </tr>
        <tr>
          <td><b>- Ооба, бар.</b></td>
          <td><i>- Да, есть.</i></td>
        </tr>
        <tr>
          <td><b>- Берчи.</b></td>
          <td><i>- Дай, пожалуйста.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>- Балдарыңар барбы?</b></td>
          <td><i>- У вас есть дети?</i></td>
        </tr>
        <tr>
          <td><b>- Ооба, эки кызыбыз бар.</b></td>
          <td><i>- Да, у нас есть две дочери.</i></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><b>- Сергейдин үй-бүлөсү барбы?</b></td>
          <td><i>- У Сергея есть семья?</i></td>
        </tr>
        <tr>
          <td><b>- Ооба, бар.</b></td>
          <td><i>- Да, есть.</i></td>
        </tr>
        </tbody>
      </table>
      <p>В кыргызском предложении со значением наличия, в отличие от русского языка, глагол <b>есть (бар)</b> используется почти всегда.</p>
      <table className={'table-no-borders'}>
        <tbody>
        <tr>
          <td><i>У вас хороший дом, оказывается.</i></td>
          <td><b>Силердин жакшы үйүңөр бар экен.</b></td>
        </tr>
        <tr>
          <td><i>У меня хорошая работа.</i></td>
          <td><b>Менин жакшы ишим бар.</b></td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default Lesson6
