/**
 * Компонент гимна Кыргызского языка
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { fetchDic } from '../../../api/dictionary'
import HymnLine from './HymnLine'
import HymnWord from './HymnWord'
import { ADMIN_MODE } from '../../../api/common'
import { getDic } from '../../../store/dicSlice'
import data from '../../../assets/dictionary.json'
import { DicDto } from '../../../models/dto/DicDto'
import { Skeleton } from 'antd'
import InfoIcon from '../../common/InfoIcon'

const Hymn = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const dic: DicDto = useAppSelector(state => state.dic)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (ADMIN_MODE) {
      fetchDic(dispatch)
    } else {
      dispatch(getDic(data as DicDto))
    }
  }, [])

  useEffect(() => {
    if (dic.words.length > 0) {
      setLoading(false)
    }
  }, [dic.words])

  const Chorus = (): JSX.Element => (
    <>
      <HymnLine first={<span><HymnWord ru={'припев'} display={'Кайырма:'} kgMode/></span>}
                second={<span><HymnWord ru={'припев'} display={'Припев:'}/></span>}
                third={<span><HymnWord ru={'припев'} display={'Припев:'}/></span>}
      />

      <HymnLine first={<span><HymnWord ru={'двигаться вперёд'} kgMode display={'Алгала'}/>й <HymnWord ru={'давать'} kgMode display={'бер'}/>, кыргыз <HymnWord ru={'народ'} kgMode display={'эл'}/>,</span>}
                second={<span><HymnWord ru={'двигаться вперёд'} display={'Вперёд'}/> кыргызский <HymnWord ru={'народ'} display={'народ'}/>,</span>}
                third={<span><HymnWord ru={'двигаться вперёд'} display={'Вперёд'}/> кыргызский <HymnWord ru={'народ'} display={'народ'}/>,</span>}
      />

      <HymnLine first={<span><HymnWord ru={'свобода'} kgMode display={'Азаттык'}/>тын <HymnWord ru={'путь'} kgMode display={'жол'}/>унда,</span>}
                second={<span><HymnWord ru={'путь'} display={'Путем'}/> <HymnWord ru={'свобода'} display={'свободы'}/>, вперёд!</span>}
                third={<span>В <HymnWord ru={'путь'} display={'путь'}/> к <HymnWord ru={'свобода'} display={'свободе'}/>,</span>}
      />

      <HymnLine first={<span><HymnWord ru={'развиваться, прогрессировать'} kgMode display={'Өркүндө'}/>й <HymnWord ru={'давать'} kgMode display={'бер'}/>, өсө <HymnWord ru={'давать'} kgMode display={'бер'}/>,</span>}
                second={<span>Взрастай народ, расцветай,</span>}
                third={<span>Продолжай <HymnWord ru={'развиваться, прогрессировать'} display={'прогрессировать'}/>, продолжай процветать,</span>}
      />

      <HymnLine first={<span><HymnWord ru={'свой'} kgMode display={'Өз'}/> <HymnWord ru={'судьба'} kgMode display={'тагдыр'}/>ың <HymnWord ru={'рука'} kgMode display={'кол'}/>унда.</span>}
                second={<span><HymnWord ru={'свой'} display={'Свою'}/> <HymnWord ru={'судьба'} display={'судьбу'}/> созидай!</span>}
                third={<span>Ваша <HymnWord ru={'судьба'} display={'судьба'}/> в ваших <HymnWord ru={'рука'} display={'руках'}/>.</span>}
      />
    </>
  )

  return (
    <>
      <h1> Гимн Кыргызстана <InfoIcon tooltip={'Гимн утверждён постановлением Верховного Совета Республики Кыргызстан от 18 декабря 1992 года.'}/></h1>
      <HymnLine first={<h3> Кыргызский <InfoIcon tooltip={'Слова: Ж.Садыкова, Ш.Кулуева Музыка: Н.Давлесова, К.Молдобасанова'}/></h3>}
                second={<h3> Русский (официальный) <InfoIcon tooltip={'К.Акматов и М.А.Рудов'}/></h3>}
                third={<h3> Русский (моя интерпретация) <InfoIcon tooltip={'В.В.Маркитанов =)'}/></h3>}
      />

      <Skeleton loading={loading} active>
        <HymnLine first={<span><HymnWord ru={'белый'} kgMode display={'Ак'}/> <HymnWord ru={'горный ледник'} kgMode display={'мөңгү'}/>лүү <HymnWord ru={'неприступная высокая скалистая гора'} kgMode display={'аска'}/> <HymnWord ru={'скала'} kgMode display={'зоо'}/>лор, <HymnWord ru={'поле'} kgMode
                                                                                                                                                                                                                                                                                        display={'талаа'}/>лар,</span>}
                  second={<span><HymnWord ru={'неприступная высокая скалистая гора'} display={'Высокие горы'}/>, долины, <HymnWord ru={'поле'} display={'поля'}/> - </span>}
                  third={<span><HymnWord ru={'белый'} display={'Белые'}/> <HymnWord ru={'горный ледник'} display={'горные ледники'}/>, <HymnWord ru={'неприступная высокая скалистая гора'} display={'высокие'}/> <HymnWord ru={'скала'} display={'скалы'}/>, <HymnWord ru={'поле'}
                                                                                                                                                                                                                                                                        display={'поля'}/>,</span>}
        />
        <HymnLine first={<span><HymnWord ru={'народ'} kgMode display={'Эл'}/>ибиздин <HymnWord ru={'душа'} kgMode display={'жан'}/>ы менен <HymnWord ru={'равно'} kgMode display={'барабар'}/>.</span>}
                  second={<span>Родная, заветная наша земля.</span>}
                  third={<span><HymnWord ru={'равно'} display={'Равные'}/> <HymnWord ru={'душа'} display={'душам'}/> нашего <HymnWord ru={'народ'} display={'народа'}/>.</span>}
        />

        <HymnLine first={<span><HymnWord ru={'численность'} kgMode display={'Сан'}/>сыз <HymnWord ru={'век'} kgMode display={'кылым'}/> Ала-Тоосун <HymnWord ru={'обитать, иметь место жительства: обитать где-л.'} kgMode display={'мекенде'}/>п,</span>}
                  second={<span>Отцы наши <HymnWord ru={'обитать, иметь место жительства: обитать где-л.'} display={'жили'}/> среди Ала-Тоо,</span>}
                  third={<span><HymnWord ru={'обитать, иметь место жительства: обитать где-л.'} display={'Жили'}/> в Ала-Тоо <HymnWord ru={'численность'} display={'бесчисленные'}/> <HymnWord ru={'век'} display={'века'}/>,</span>}
        />

        <HymnLine first={<span><HymnWord ru={'хранить, оберегать, беречь'} kgMode display={'Сакта'}/>п келди биздин <HymnWord ru={'предки, отцы и деды'} kgMode display={'ата-бабалар'}/>.</span>}
                  second={<span>Всегда свою Родину свято <HymnWord ru={'хранить, оберегать, беречь'} display={'храня'}/>.</span>}
                  third={<span>Наши <HymnWord ru={'предки, отцы и деды'} display={'предки'}/> <HymnWord ru={'хранить, оберегать, беречь'} display={'хранили'}/> нас.</span>}
        />

        <br/>
        <Chorus/>
        <br/>

        <HymnLine first={<span>Аткарылып элдин умут, тилеги,</span>}
                  second={<span>Мечты и надежды отцов сбылись.</span>}
                  third={<span>Наши надежды и стремления выполнены.</span>}
        />

        <HymnLine first={<span>Желбиреди эркиндиктин желеги.</span>}
                  second={<span>И знамя свободы возносится ввысь.</span>}
                  third={<span>Наши люди размахивают флагом свободы.</span>}
        />

        <HymnLine first={<span>Бизге жеткен ата салтын, мурасын,</span>}
                  second={<span>Наследие отцов наших передадим</span>}
                  third={<span>Традиции наших отцов дошли к нас в целости.</span>}
        />

        <HymnLine first={<span>Ыйык сактап урпактарга берели.</span>}
                  second={<span>На благо народа потомкам своим.</span>}
                  third={<span>Пусть поколения сохранят наше святое наследие.</span>}
        />

        <br/>

        <Chorus/>
      </Skeleton>
    </>
  )
}

export default Hymn
