import React from 'react'
import styled from 'styled-components'
import { spacing, fontSize, color } from 'styled-system'
import Box from './Box'

const StyledAvatar = Box.extend`
  border-radius: 100%;
  text-align: center;
  vertical-align: center;
  ${ props => console.log(props)}
  line-height: ${ props => props.size - (props.fs / 2) }px;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
`

const Content = styled.span`
`

export default ({ size = 30, children, ...props }) => {

  const bg = color(props).color
  const fs = parseInt(fontSize(props).fontSize.replace('px', ''))

  return <StyledAvatar p={1} bg={bg} fs={fs} { ...props } size={size} color={`bleech`}>
    <Content>{children}</Content>
  </StyledAvatar>
}
