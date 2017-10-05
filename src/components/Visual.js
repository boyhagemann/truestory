import React from 'react'
import Box from './Box'
import { responsiveStyle } from 'styled-system'

const height = responsiveStyle('height', 'height')
const position = responsiveStyle('background-position', 'position')

const Visual = Box.extend`
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  ${position}
  ${height}
`

export default props => <Visual position={`center`} width={1} { ...props } />
