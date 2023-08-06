/**
 * Компонент иконки со подсказкой
 *
 * @author Markitanov Vadim
 * @since 06.08.2023
 */
import React from 'react'
import { InfoCircleTwoTone } from '@ant-design/icons'
import { Tooltip } from 'antd'

interface InfoIconProps {
  tooltip: string
}

const InfoIcon = (props: InfoIconProps): JSX.Element => {
  const { tooltip } = props

  return (
    <Tooltip title={tooltip}>
      <InfoCircleTwoTone twoToneColor={'blue'}/>
    </Tooltip>
  )
}

export default InfoIcon
