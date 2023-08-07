/**
 * Компонент аффиксов с пояснениями
 *
 * @author Markitanov Vadim
 * @since 07.08.2023
 */
import React from 'react';
import { Tooltip, Popover } from 'antd'

interface HymnAffixProps {
  tooltip: React.ReactNode
  display: string
}

const HymnAffix = (props: HymnAffixProps): JSX.Element => {
  const { tooltip, display } = props

  const style: React.CSSProperties = {
    cursor: 'pointer',
    color: 'gray'
  }

  return (
    // <Tooltip
    //   title={tooltip}
    // >
    //   <u style={style}>
    //     {display}
    //   </u>
    // </Tooltip>

  <Popover
      title={tooltip}
    >
      <u style={style}>
        {display}
      </u>
    </Popover>
  )
}

export default HymnAffix