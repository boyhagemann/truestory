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

export default ({ small, ...props }) => {

  const fontSize = small ? [2,2,3] : [3,3,4]

  return <Text color={`pencil`} mt={2} mb={2} fontSize={fontSize} { ...props } />
}
