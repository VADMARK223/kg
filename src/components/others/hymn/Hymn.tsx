/**
 * Компонент гимна Кыргызского языка
 *
 * @author Markitanov Vadim
 * @since 03.08.2023
 */
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { fetchDic } from '../../../api/dictionary'
import HymnLine from './HymnLine'
import HymnWord from './HymnWord'
import { ADMIN_MODE } from '../../../api/common'
import { getDic } from '../../../store/dicSlice'
import data from '../../../assets/dictionary.json'
import { DicDto } from '../../../models/dto/DicDto'

const Hymn = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (ADMIN_MODE) {
      fetchDic(dispatch)
    } else {
      dispatch(getDic(data as DicDto))
    }
  }, [])

  return (
    <>
      <HymnLine first={<h3>Кыргызский</h3>}
                second={<h3>Русский</h3>}
                third={<h3>Дословный перевод</h3>}
      />

      <HymnLine first={<span><HymnWord ru={'белый'} kgMode display={'Ак'}/> <HymnWord ru={'горный ледник'} kgMode display={'мөңгүлүү'}/> <HymnWord ru={'неприступная высокая скалистая гора'} kgMode display={'аска'}/> <HymnWord ru={'скала'} kgMode display={'зоолор'}/>, <HymnWord ru={'поле'} kgMode display={'талаалар'}/>,</span>}
                second={<span><HymnWord ru={'неприступная высокая скалистая гора'} display={'Высокие горы'}/>, долины, <HymnWord ru={'поле'} display={'поля'}/> - </span>}
                third={<span><HymnWord ru={'белый'} display={'Белые'}/> оледенелые <HymnWord ru={'скала'} display={'скалы'}/>, <HymnWord ru={'поле'} display={'поля'}/>,</span>}
      />
      <HymnLine first={<span>Элибиздин жаны менен <HymnWord ru={'равно'} kgMode/>.</span>}
                second={<span>Родная, заветная наша земля.</span>}
                third={<span>Она <HymnWord ru={'равно'} display={'равна'}/> душе нашего народа.</span>}
      />

      <HymnLine first={<span>Сансыз кылым Ала-Тоосун мекендеп,</span>}
                second={<span>Отцы наши жили среди Ала-Тоо,</span>}
                third={<span>Жили в Ала-Тоосе бесчисленные века,</span>}
      />

      <HymnLine first={<span>Сактап келди биздин ата-бабалар.</span>}
                second={<span>Всегда свою Родину свято храня.</span>}
                third={<span>Наши предки спасли нас.</span>}
      />

      <br/>

      <HymnLine first={<span><HymnWord ru={'припев'} display={'Кайырма:'} kgMode/></span>}
                second={<span><HymnWord ru={'припев'} display={'Припев:'}/></span>}
                third={<span><HymnWord ru={'припев'} display={'Припев:'}/></span>}
      />

      <HymnLine first={<span>Алгалай <HymnWord ru={'давать'} kgMode/>, кыргыз <HymnWord ru={'народ'} kgMode/>,</span>}
                second={<span>Вперёд кыргызский <HymnWord ru={'народ'}/>,</span>}
                third={<span>Вперед, кыргызы,</span>}
      />

      <HymnLine first={<span><HymnWord ru={'свобода'} kgMode display={'Азаттыктын'}/> <HymnWord ru={'путь'} kgMode display={'жолунда'}/>,</span>}
                second={<span><HymnWord ru={'путь'} display={'Путем'}/> <HymnWord ru={'свобода'} display={'свободы'}/>, вперёд!</span>}
                third={<span>На <HymnWord ru={'путь'} display={'пути'}/> к <HymnWord ru={'свобода'} display={'свободе'}/>,</span>}
      />

      <HymnLine first={<span>Өркүндөй <HymnWord ru={'давать'} kgMode/>, өсө <HymnWord ru={'давать'} kgMode/>,</span>}
                second={<span>Взрастай народ, расцветай,</span>}
                third={<span>Продолжайте расти, продолжайте расти</span>}
      />

      <HymnLine first={<span>Өз <HymnWord ru={'судьба'} kgMode display={'тагдырың'}/> <HymnWord ru={'рука'} kgMode display={'колунда'}/>.</span>}
                second={<span>Свою <HymnWord ru={'судьба'} display={'судьбу'}/> созидай!</span>}
                third={<span>Ваша <HymnWord ru={'судьба'} display={'судьба'}/> в ваших <HymnWord ru={'рука'} display={'руках'}/>.</span>}
      />

      <div style={{ display: 'none' }}>
        <br/>

        <HymnLine first={<span><HymnWord ru={'припев'} display={'Кайырмасы.'} kgMode/></span>}
                  second={<span><HymnWord ru={'припев'} display={'Припев.'}/></span>}
                  third={<span>1</span>}
        />

        <HymnLine first={<span>Аткарылып элдин умут, тилеги,</span>}
                  second={<span>Мечты и надежды отцов сбылись.</span>}
                  third={<span>2</span>}
        />

        <HymnLine first={<span>Желбиреди эркиндиктин желеги.</span>}
                  second={<span>И знамя свободы возносится ввысь.</span>}
                  third={<span>3</span>}
        />

        <HymnLine first={<span>Бизге жеткен ата салтын, мурасын,</span>}
                  second={<span>Наследие отцов наших передадим</span>}
                  third={<span>4</span>}
        />

        <HymnLine first={<span>Ыйык сактап урпактарга берели.</span>}
                  second={<span>На благо народа потомкам своим.</span>}
                  third={<span>5</span>}
        />
      </div>
    </>
  )
}

export default Hymn
