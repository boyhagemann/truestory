import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, responsiveStyle } from 'styled-system'


const Label = styled.label`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  opacity: ${props => props.opacity};
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export default props => <Label color={`pencil`} mt={1} mb={1} { ...props } />
