/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 21.05.2023
 */
import React, { useEffect, useState } from 'react'
import WordAffix from '../common/WordAffix'
import AffixItem from '../common/AffixItem'
import Letter, { VOWELS_NAME, VOICED_CONSONANTS_NAME, VOICELESS_CONSONANTS_NAME } from '../common/Letter'
import Letters from './Letters'
import PhraseItem from '../common/PhraseItem'
import MultiplicityAffixPractice from './MultiplicityAffixPractice'
import { CaretUpOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'

const Multiplicity = (): JSX.Element => {
  const [isAtTop, setIsAtTop] = useState(true)

  const scrollUpHandler = (): void => {
    scroll(0, 0)
  }

  useEffect(() => {
    const handleScroll = (): void => {
      const isTop = window.scrollY === 0
      setIsAtTop(isTop)
    }

    window.addEventListener('scroll', handleScroll)

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getIsTop = (): string | undefined => {
    if (isAtTop) {
      return 'none'
    } else {
      return undefined
    }
  }

  return (
    <>
      <Letters/><br/>
      1. Форма множественного числа образуется путем присоединения к корню слова аффикса множественного числа <b>-лар</b>
      <table>
        <thead>
        <tr>
          <td colSpan={2}>Последняя гласная буква корня</td>
          <td>Последняя буква корня</td>
          <td>Аффикс</td>
          <td>Пример</td>
          <td>Перевод</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowSpan={5} colSpan={2}>а, я, ы</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лар'}/>
          </td>
          <td>
            <WordAffix root={'китепкан'} affix={<Letter value={'а'}/>}/> - <WordAffix root={'китепкана'} affix={'лар'}/>
          </td>
          <td>
            библиотека - библиотеки
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
          </td>
          <td>
            <WordAffix root={'шаа'} affix={<Letter value={'р'}/>}/> - <WordAffix root={'шаар'} affix={'лар'}/>
          </td>
          <td>
            город - города
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дар'}/>
          </td>
          <td>
            <WordAffix root={'ада'} affix={<Letter value={'м'}/>}/> - <WordAffix root={'адам'} affix={'дар'}/>
          </td>
          <td>
            человек - люди
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тар'}/>
          </td>
          <td>
            <WordAffix root={'мышы'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'мышык'} affix={'тар'}/>
          </td>
          <td>
            кот - коты
          </td>
        </tr>
        <tr>
          <td rowSpan={5} colSpan={2}>э, е, и</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лер'}/>
          </td>
          <td>
            <WordAffix root={'кем'} affix={<Letter value={'е'}/>}/> - <WordAffix root={'кеме'} affix={'лер'}/><br/>
          </td>
          <td>
            корабль - корабли
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            <WordAffix root={'музе'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'музей'} affix={'лер'}/>
          </td>
          <td>
            музей - музеи
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дер'}/>
          </td>
          <td>
            <WordAffix root={'мугали'} affix={<Letter value={'м'}/>}/> - <WordAffix root={'мугалим'} affix={'дер'}/>
          </td>
          <td>
            учитель - учителя
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тер'}/>
          </td>
          <td>
            <WordAffix root={'ките'} affix={<Letter value={'п'}/>}/> - <WordAffix root={'китеп'} affix={'тер'}/>
          </td>
          <td>
            книга - книги
          </td>
        </tr>
        <tr>
          <td rowSpan={5} colSpan={2}>ө ү</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лөр'}/>
          </td>
          <td>
            <WordAffix root={'сүрөтч'} affix={<Letter value={'ү'}/>}/> - <WordAffix root={'сүрөтчү'} affix={'лөр'}/>
          </td>
          <td>
            художник - художники
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            <WordAffix root={'ү'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'үй'} affix={'лөр'}/>
          </td>
          <td>
            дом - дома
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дөр'}/>
          </td>
          <td>
            <WordAffix root={'кө'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'көл'} affix={'дөр'}/>
          </td>
          <td>
            озеро - озера
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'төр'}/>
          </td>
          <td>
            <WordAffix root={'көйнө'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'көйнөк'} affix={'төр'}/>
          </td>
          <td>
            платье - платья
          </td>
        </tr>
        <tr>
          <td rowSpan={10}>о ё у ю</td>
          <td rowSpan={5}>о ё</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лор'}/>
          </td>
          <td>
            <WordAffix root={'коро'} affix={<Letter value={'о'}/>}/> - <WordAffix root={'короо'} affix={'лор'}/>
          </td>
          <td>
            двор - дворы
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            <WordAffix root={'то'} affix={<Letter value={'й'}/>}/> - <WordAffix root={'той'} affix={'лор'}/>
          </td>
          <td>
            пиршество - пиршества
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дор'}/>
          </td>
          <td>
            <WordAffix root={'ко'} affix={<Letter value={'л'}/>}/> - <WordAffix root={'кол'} affix={'дор'}/>
          </td>
          <td>
            рука - руки
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тор'}/>
          </td>
          <td>
            <WordAffix root={'коно'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'конок'} affix={'тор'}/>
          </td>
          <td>
            гость - гости
          </td>
        </tr>
        <tr>
          <td rowSpan={5}>у ю</td>
          <td>
            {VOWELS_NAME}
          </td>
          <td rowSpan={3}>
            <AffixItem value={'лар'}/>
          </td>
          <td>
            <WordAffix root={'окууч'} affix={<Letter value={'у'}/>}/> - <WordAffix root={'окуучу'} affix={'лар'}/>
          </td>
          <td>
            ученик - ученики
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'й'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            <Letter value={'р'}/>
          </td>
          <td>
            -
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICED_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'дар'}/>
          </td>
          <td>
            <WordAffix root={'буй'} affix={<Letter value={'м'}/>}/> - <WordAffix root={'буйм'} affix={'дар'}/>
          </td>
          <td>
            -
          </td>
        </tr>
        <tr>
          <td>
            {VOICELESS_CONSONANTS_NAME}
          </td>
          <td>
            <AffixItem value={'тар'}/>
          </td>
          <td>
            <WordAffix root={'жоолу'} affix={<Letter value={'к'}/>}/> - <WordAffix root={'жоолук'} affix={'тар'}/>
          </td>
          <td>
            платок - платки
          </td>
        </tr>
        </tbody>
      </table>
      Место аффикса множественного числа - всегда после корня.<br/>
      Аффиксы множественного числа универсальны, обслуживают не только имена существительные:
      <table>
        <tbody>
        <tr>
          <td><WordAffix root={'чоң'} affix={'дор'}/></td>
          <td>большие; взрослые</td>
        </tr>
        <tr>
          <td><WordAffix root={'жар'} affix={'таш'}/></td>
          <td>молодые</td>
        </tr>
        <tr>
          <td><WordAffix root={'кичинекей'} affix={'лер'}/></td>
          <td>маленькие, малыши</td>
        </tr>
        <tr>
          <td><WordAffix root={'тиги'} affix={'лер'}/></td>
          <td>те</td>
        </tr>
        <tr>
          <td><WordAffix root={'бу'} affix={'лар'}/></td>
          <td>эти</td>
        </tr>
        <tr>
          <td><WordAffix root={'булар ким'} affix={'дер'}/></td>
          <td>кто это? (по отношению к группе лиц)</td>
        </tr>
        </tbody>
      </table>
      <br/>
      2. В роли подлежащего, сказуемого или дополнения в предложениях иногда выступают <b>собирательные</b> числительные, которые отвечают на вопрос <b>канчоо?</b> (сколько?). <br/>
      Из всего семь: <br/>
      бирөө, экөө (двое), үчөө (трое), төртөө (четверо), бешөө (пятеро), алтоо (шестеро), жетөө (семеро). <br/>
      <PhraseItem kg={'Китепканада он адам:'} ru={'В библиотеке десять человек:'}/>
      <PhraseItem kg={'бирөө - окутуучу,'} ru={'один - преподователь,'}/>
      <PhraseItem kg={'үчөө - аспирант,'} ru={'трое - аспиранты,'}/>
      <PhraseItem kg={'алтоо - студент,'} ru={'шестеро - студенты.'}/>
      <div className={'center-block'}>УПРАЖНЕНИЯ</div>
      <MultiplicityAffixPractice word={'кошуна'}/><br/>
      <MultiplicityAffixPractice word={'театр'}/><br/>
      <MultiplicityAffixPractice word={'адам'}/><br/>
      <MultiplicityAffixPractice word={'бак'}/><br/>
      <MultiplicityAffixPractice word={'текче'}/><br/>
      <MultiplicityAffixPractice word={'батир'}/><br/>
      <MultiplicityAffixPractice word={'көкчө'}/><br/>
      <MultiplicityAffixPractice word={'тил'}/><br/>
      <MultiplicityAffixPractice word={'адис'}/><br/>
      <MultiplicityAffixPractice word={'күзгү'}/><br/>
      <MultiplicityAffixPractice word={'күн'}/><br/>
      <MultiplicityAffixPractice word={'сөз'}/><br/>
      <MultiplicityAffixPractice word={'чөнтөк'}/><br/>
      <MultiplicityAffixPractice word={'пальто'}/><br/>
      <MultiplicityAffixPractice word={'кол'}/><br/>
      <MultiplicityAffixPractice word={'стадион'}/><br/>
      <MultiplicityAffixPractice word={'дос'}/><br/>
      <MultiplicityAffixPractice word={'курбу'}/><br/>
      <MultiplicityAffixPractice word={'комуз'}/><br/>
      <MultiplicityAffixPractice word={'жоолук'}/><br/>
      <FloatButton icon={<CaretUpOutlined/>} type="primary" style={{ right: 20, display: getIsTop() }} onClick={scrollUpHandler}/>
    </>
  )
}

export default Multiplicity
