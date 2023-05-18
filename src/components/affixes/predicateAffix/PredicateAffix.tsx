/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 18.05.2023
 */
import React from 'react';
import { Row, Col, Space } from 'antd'

const PredicateAffix = (): JSX.Element => {
  return (
    <>
      <h2>Аффиксы сказуемости</h2>
      <Row>
        <Col span={6} className={'center-content-border'}/>
        <Col span={9} className={'center-content-border'}>Ед. ч.</Col>
        <Col span={9} className={'center-content-border'}>Мн. ч.</Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}>1-е лицо</Col>
        <Col span={9} className={'center-content-border'}><b>мен</b> -мын (-мин, -мун, -мүн)</Col>
        <Col span={9} className={'center-content-border'}><b>биз</b> -быз (-биз, -буз, -бүз)</Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}>2-е лицо</Col>
        <Col span={9} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              <b>сен</b> -сын (-сиң, -суң, -сүң)
            </span>
            <span>
              <b>Сиз</b> -сыз (-сиз, -суз, -сүз)
            </span>
          </Space>
        </Col>
        <Col span={9} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              <b>силер</b> -сыңар (-сиңер, -суңар, -сүңөр)
            </span>
            <span>
              <b>Сиздер</b> -сыздар (-сиздер, -суздар, -сүздөр)
            </span>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}>3-е лицо</Col>
        <Col span={9} className={'center-content-border'}><b>ал</b> (нулевой аффикс)</Col>
        <Col span={9} className={'center-content-border'}><b>алар</b> (нулевой аффикс)</Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}/>
        <Col span={9} className={'center-content-border'}>Ед. ч.</Col>
        <Col span={9} className={'center-content-border'}>Мн. ч.</Col>
      </Row>
      <h3>Примеры:</h3>
      <Row>
        <Col span={6} className={'center-content-border'}>1-е лицо</Col>
        <Col span={9} className={'center-content-border'}>Мен окуучу<u>мун</u>. <i>Я ученик.</i></Col>
        <Col span={9} className={'center-content-border'}>Биз окуучу<u>буз</u>. <i>Мы ученики.</i></Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}>2-е лицо</Col>
        <Col span={9} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              Cен окуучу<u>cуң</u>. <i>Ты ученик.</i>
            </span>
            <span>
              Cиз окуучу<u>cуз</u>. <i>Вы ученик.</i>
            </span>
          </Space>
        </Col>
        <Col span={9} className={'center-content-border'}>
          <Space direction={'vertical'}>
            <span>
              Силер окуучу<u>суңар</u>. <i>Вы ученики.</i>
            </span>
            <span>
              Сиздер окуучу<u>суздар</u>. <i>Вы ученики.</i>
            </span>
          </Space>
        </Col>
      </Row>
      <Row>
        <Col span={6} className={'center-content-border'}>3-е лицо</Col>
        <Col span={9} className={'center-content-border'}>Ал окуучу. <i> Он ученик.</i></Col>
        <Col span={9} className={'center-content-border'}>Алар окуучу. <i> Они ученики.</i></Col>
      </Row>

      <br/>
    </>
  );
}

export default PredicateAffix