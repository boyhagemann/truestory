import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color, responsiveStyle } from 'styled-system'

const textAlign = responsiveStyle('text-align', 'textAlign')

const Text = styled.p`
  ${space}
  ${fontSize}
  ${color}
  ${textAlign}
  font-family: 'Open Sans', 'sans';
  opacity: ${ props => props.opacity || 1};
  line-height: 1.6em;
`

export default props => <Text color={`pencil`} fontSize={4} { ...props } />
