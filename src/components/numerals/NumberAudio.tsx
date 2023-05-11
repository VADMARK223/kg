/**
 * Компонент воспроизведения звука
 *
 * @author Markitanov Vadim
 * @since 11.05.2023
 */
import React, { useState } from 'react'
import { Space, Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

interface AudioControlProps {
  src: string
  kg: string
  ru: string
}

const NumberAudio = (props: AudioControlProps): JSX.Element => {
  const { src, kg, ru } = props
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  return (
    <Space direction={'horizontal'}>
      <Button type={'primary'}
              icon={<PlayCircleOutlined/>}
              onClick={() => {
                setIsPlaying(!isPlaying)
              }}>Прослушать</Button>
      {kg} - {ru}
      {isPlaying && <audio style={{ display: 'none' }} controls autoPlay src={src}
                           onEnded={() => {
                             setIsPlaying(false)
                           }}/>}
    </Space>
  )
}

export default NumberAudio
