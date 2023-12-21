/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 21.12.2023
 */
import React, { LegacyRef, useEffect, useRef } from 'react'
import { dicFetchFx } from '../../store/dic'
import * as d3 from 'd3'

const Interactive = (): JSX.Element => {
  const svgRef: LegacyRef<SVGSVGElement> = useRef<SVGSVGElement>(null)
  useEffect(() => {
    dicFetchFx()
  }, [])

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    svg.append('rect')
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', 'red')
  }, [svgRef])

  return (
    <svg ref={svgRef}></svg>
  )
}

export default Interactive
