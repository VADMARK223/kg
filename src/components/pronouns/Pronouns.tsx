/**
 * Компонент местоимений
 *
 * @author Markitanov Vadim
 * @since 18.05.2023
 */
import React from 'react';
import { Col, Row, Space } from 'antd'

const Pronouns = (): JSX.Element => {
  return (
    <>
      <h3>Личные местоимения</h3>
      <Row>
        <Col span={8} className={'center-content-border'}/>
        <Col span={8} className={'center-content-border'}>Ед. ч.</Col>
        <Col span={8} className={'center-content-border'}>Мн. ч.</Col>
      </Row>
      <Row>
        <Col span={8} className={'center-content-border'}>1-е лицо</Col>
        <Col span={8} className={'center-content-border'}><b>мен</b>(я)</Col>
        <Col span={8} className={'center-content-border'}><b>биз</b>(мы)</Col>
      </Row>
      <Row>
        <Col span={8} className={'center-content-border'}>2-е лицо</Col>
        <Col span={8} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              <b>сен</b>(ты)
            </span>
            <span>
              <b>Сиз</b>(Вы)
            </span>
          </Space>
        </Col>
        <Col span={8} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              <b>силер</b>(вы, простая форма)
            </span>
            <span>
              <b>Сиздер</b>(Вы, уважительная форма)
            </span>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={8} className={'center-content-border'}>3-е лицо</Col>
        <Col span={8} className={'center-content-border'}><b>ал</b>(он, она, оно)</Col>
        <Col span={8} className={'center-content-border'}><b>алар</b>(они)</Col>
      </Row>
    </>
  );
}

export default Pronouns