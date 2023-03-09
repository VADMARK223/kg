/**
 * Компонент левой части опросника
 *
 * @author Markitanov Vadim
 * @since 09.03.2023
 */
import React from 'react'
import { Steps, Layout } from 'antd'

const Left = (): JSX.Element => {
  return (
    <Layout>
      <Steps
        direction={'vertical'}
        current={1}
        items={[
          {
            title: 'Красный',
            description: 'Красный описание'
          }, {
            title: 'Синий',
            description: 'Красный описание'
          }, {
            title: 'Желтый',
            description: 'Красный описание'
          }
        ]}
      />
    </Layout>
  )
}

export default Left
