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

const Hymn = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchDic(dispatch)
  }, [])

  return (
    <>
      <HymnLine first={<h3>Кыргызский</h3>}
                second={<h3>Русский</h3>}
                third={<h3>Дословный перевод</h3>}
      />

      <HymnLine first={<span>Ак мөңгүлүү аска зоолор, <HymnWord ru={'поле'} kgMode display={'талаалар'}/>,</span>}
                second={<span>Высокие горы, долины, <HymnWord ru={'поле'} display={'поля'}/> - </span>}
                third={<span>Белые оледенелые скалы, поля,</span>}
      />
      <HymnLine first={<span>Элибиздин жаны менен барабар.</span>}
                second={<span>Родная, заветная наша земля.</span>}
                third={<span>Она равна душе нашего народа.</span>}
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

      <HymnLine first={<span>Алгалай бер, кыргыз <HymnWord ru={'народ'} kgMode/>,</span>}
                second={<span>Вперёд кыргызский <HymnWord ru={'народ'}/>,</span>}
                third={<span>Вперед, кыргызы,</span>}
      />

      <HymnLine first={<span>Азаттыктын жолунда,</span>}
                second={<span>Путем свободы, вперёд!</span>}
                third={<span>На пути к свободе,</span>}
      />

      <HymnLine first={<span>Өркүндөй бер, өсө бер,</span>}
                second={<span>Взрастай народ, расцветай,</span>}
                third={<span>Продолжайте расти, продолжайте расти</span>}
      />

      <HymnLine first={<span>Өз <HymnWord ru={'судьба'} kgMode display={'тагдырың'}/> колунда.</span>}
                second={<span>Свою <HymnWord ru={'судьба'} display={'судьбу'}/> созидай!</span>}
                third={<span>Ваша судьба в ваших руках.</span>}
      />

      <div style={{ display: 'none' }}>
        <br/>

        <HymnLine first={<span><HymnWord ru={'припев'} display={'Кайырмасы.'} kgMode/></span>}
                  second={<span><HymnWord ru={'припев'} display={'Припев.'}/></span>}
                  third={<span></span>}
        />

        <HymnLine first={<span>Аткарылып элдин умут, тилеги,</span>}
                  second={<span>Мечты и надежды отцов сбылись.</span>}
                  third={<span></span>}
        />

        <HymnLine first={<span>Желбиреди эркиндиктин желеги.</span>}
                  second={<span>И знамя свободы возносится ввысь.</span>}
                  third={<span></span>}
        />

        <HymnLine first={<span>Бизге жеткен ата салтын, мурасын,</span>}
                  second={<span>Наследие отцов наших передадим</span>}
                  third={<span></span>}
        />

        <HymnLine first={<span>Ыйык сактап урпактарга берели.</span>}
                  second={<span>На благо народа потомкам своим.</span>}
                  third={<span></span>}
        />
      </div>
    </>
  )
}

export default Hymn
