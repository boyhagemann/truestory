import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const Heading = ({ element: Component = 'h1', ...props }) => <Component { ...props } />

export default styled(Heading)`
  font-weight: ${ props => props.bold ? 'bold' : 'normal' };
  font-family: ${ props => props.thin ? 'Roboto' : 'Open Sans' };
  line-height: 1em;
  ${space}
  ${fontSize}
  ${color}
  text-shadow: ${ props => props.shadow ? '0 0 10px rgba(0, 0, 0, 0.3)' : ''};
`
