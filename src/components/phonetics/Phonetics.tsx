/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 03.05.2023
 */
import React from 'react'
import { Row, Col } from 'antd'
import './Phonetics.css'

const Phonetics = (): JSX.Element => {
  return (
    <>
      <h1>Вводно-фонетический курс</h1>
      В кыргызском языке 12 (4 пассивных) гласных букв, которые делятся на четыре сингармоничные группы:
      <br/>
      <br/>
      <Row justify={'center'}>
        <Col span={8} className={'center-content-border'}/>
        <Col span={8} className={'center-content-border'}>Мягкие (переднерядные)</Col>
        <Col span={8} className={'center-content-border'}>Твёрдые (непереднерядные)</Col>
      </Row>
      <Row justify={'center'}>
        <Col span={8} className={'center-content-border'}>Негубные</Col>
        <Col span={8} className={'center-content-border'}>э e и</Col>
        <Col span={8} className={'center-content-border'}>а ы я</Col>
      </Row>
      <Row justify={'center'}>
        <Col span={8} className={'center-content-border'}>Губные</Col>
        <Col span={8} className={'center-content-border'}>ө ү</Col>
        <Col span={8} className={'center-content-border'}>о у (ё ю)</Col>
      </Row>

      <br/>
      По закону созвучия гласных (сингармонизма), любое слово в большинстве случаев содержит гласные только одной
      группы:
      <br/>
      <br/>

      <Row justify={'center'}>
        <Col span={12} className={'center-content'}><b><u>А</u>лт<u>ы</u>н</b> - золото</Col>
        <Col span={12} className={'center-content'}><b>Б<u>а</u>л<u>а</u></b> - ребёнок</Col>
      </Row>
      <Row justify={'center'}>
        <Col span={12} className={'center-content'}><b>С<u>ү</u>р<u>е</u>тч<u>ү</u></b> - художник</Col>
        <Col span={12} className={'center-content'}><b><u>О</u>к<u>у</u>м<u>у</u>шт<u>уу</u></b> - учёный</Col>
      </Row>
      <Row justify={'center'}>
        <Col span={12} className={'center-content'}><b>Т<u>е</u>м<u>и</u>р</b> - железо</Col>
        <Col span={12} className={'center-content'}><b><u>О</u>т<u>у</u>р</b> - садись</Col>
      </Row>
      <br/>
      В некоторых словах (заимствованных зачастую) бывают исключения: <b>П<u>ия</u>з</b> -
      лук; <b><u>У</u>б<u>а</u>д<u>а</u></b> - обещание.<br/>
      Из этих 12 гласных букв четыре являются пассивными, употребляющимися в языке крайне редко.<br/>
      Это <b>я, э, ё</b> и <b>ю</b>. Эти гласные не участвуют в образовании грамматических форм.<br/>
      Ударение к Кыргызском языке как правило падает на последний слог.
      <br/>
    </>
  )
}

export default Phonetics
