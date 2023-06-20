/**
 * Компонент множественных аффиксов
 *
 * @author Markitanov Vadim
 * @since 15.05.2023
 */
import React from 'react'
import ReactFlow, { MarkerType, MiniMap, Controls } from 'reactflow'
import 'reactflow/dist/style.css'

const SECOND_Y = 100
const THIRD_Y = 200
const NODE_WIDTH = 70
const MAX_NODE_COUNT = 8
const GAP = 50
const TOTAL_WIDTH = (NODE_WIDTH + GAP) * MAX_NODE_COUNT - GAP

const TOP_WIDTH = 200
const MIDDLE_WIDTH = 2 * NODE_WIDTH + GAP
const MIDDLE_COLOR = 'green'

const S_G = 'Согл(гл)'
const S_Z = 'Согл(зв)'

const initialNodes = [
  {
    id: 'root',
    position: { x: (TOTAL_WIDTH - TOP_WIDTH) * 0.5, y: 0 },
    data: { label: 'Последняя гласная буква' },
    type: 'input',
    connectable: false,
    selectable: false,
    style: { background: 'gray', color: 'white', width: TOP_WIDTH }
  },

  {
    id: 'last_word_0',
    position: { x: 0, y: SECOND_Y },
    data: { label: 'Последняя буква корня' },
    connectable: false,
    selectable: false,
    style: { background: MIDDLE_COLOR, color: 'white', width: MIDDLE_WIDTH }
  },
  {
    id: 'last_word_1',
    position: { x: MIDDLE_WIDTH + GAP, y: SECOND_Y },
    data: { label: 'Последняя буква корня' },
    connectable: false,
    selectable: false,
    style: { background: MIDDLE_COLOR, color: 'white', width: MIDDLE_WIDTH }
  },
  {
    id: 'last_word_2',
    position: { x: (MIDDLE_WIDTH + GAP) * 2, y: SECOND_Y },
    data: { label: 'Последняя буква корня' },
    connectable: false,
    selectable: false,
    style: { background: MIDDLE_COLOR, color: 'white', width: MIDDLE_WIDTH }
  },
  {
    id: 'last_word_3',
    position: { x: (MIDDLE_WIDTH + GAP) * 3, y: SECOND_Y },
    data: { label: 'Последняя буква корня' },
    connectable: false,
    selectable: false,
    style: { background: MIDDLE_COLOR, color: 'white', width: MIDDLE_WIDTH }
  },

  {
    id: 'affix_0',
    position: { x: 0, y: THIRD_Y },
    data: { label: '-бы' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_1',
    position: { x: NODE_WIDTH + GAP, y: THIRD_Y },
    data: { label: '-пы' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_2',
    position: { x: (NODE_WIDTH + GAP) * 2, y: THIRD_Y },
    data: { label: '-би' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_3',
    position: { x: (NODE_WIDTH + GAP) * 3, y: THIRD_Y },
    data: { label: '-пи' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_4',
    position: { x: (NODE_WIDTH + GAP) * 4, y: THIRD_Y },
    data: { label: '-бү' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_5',
    position: { x: (NODE_WIDTH + GAP) * 5, y: THIRD_Y },
    data: { label: '-пү' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_6',
    position: { x: (NODE_WIDTH + GAP) * 6, y: THIRD_Y },
    data: { label: '-бу' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  },
  {
    id: 'affix_7',
    position: { x: (NODE_WIDTH + GAP) * 7, y: THIRD_Y },
    data: { label: '-пу' },
    type: 'output',
    connectable: false,
    selectable: false,
    style: { background: '#63B3ED', color: 'white', width: NODE_WIDTH }
  }
]

const initialEdges = [
  {
    id: 'root-last_word_0',
    source: 'root',
    target: 'last_word_0',
    label: 'а, я, ы',
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'root-last_word_1',
    source: 'root',
    target: 'last_word_1',
    label: 'э, е, и',
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'root-last_word_2',
    source: 'root',
    target: 'last_word_2',
    label: 'ө, ү',
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'root-last_word_3',
    source: 'root',
    target: 'last_word_3',
    label: 'о, ё, у, ю',
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },

  {
    id: 'last_word_0-affix_0',
    source: 'last_word_0',
    target: 'affix_0',
    label: `Глас / ${S_Z}`,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_0-affix_1',
    source: 'last_word_0',
    target: 'affix_1',
    label: S_G,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_1-affix_2',
    source: 'last_word_1',
    target: 'affix_2',
    label: `Глас / ${S_Z}`,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_1-affix_3',
    source: 'last_word_1',
    target: 'affix_3',
    label: S_G,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_2-affix_4',
    source: 'last_word_2',
    target: 'affix_4',
    label: `Глас / ${S_Z}`,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_2-affix_5',
    source: 'last_word_2',
    target: 'affix_5',
    label: S_G,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_3-affix_6',
    source: 'last_word_3',
    target: 'affix_6',
    label: `Глас / ${S_Z}`,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  {
    id: 'last_word_3-affix_7',
    source: 'last_word_3',
    target: 'affix_7',
    label: S_G,
    animated: true,
    selectable: false,
    markerEnd: { type: MarkerType.ArrowClosed }
  }
]

const MultiAffix = (): JSX.Element => {
  return (
    <div style={{ width: `${TOTAL_WIDTH}px`, height: '450px' }}>
      <ReactFlow nodes={initialNodes}
        // nodesDraggable={false}
        // panOnDrag={false}
                 edges={initialEdges}
      >
        <Controls />
        <MiniMap pannable/>
      </ReactFlow>
    </div>
  )
}

export default MultiAffix
