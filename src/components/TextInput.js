import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, responsiveStyle } from 'styled-system'


const TextInput = styled.input`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  opacity: ${props => props.opacity};
  border: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export default props => <TextInput bg={`sahara`} { ...props } />
