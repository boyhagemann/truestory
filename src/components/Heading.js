import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'


const Heading = ({ element: Component = 'h1', ...props }) => <Component { ...props } />

const StyledHeading = styled(Heading)`
  font-weight: ${ props => props.bold ? 'bold' : 'normal' };
  font-family: ${ props => props.thin ? 'Roboto' : 'Open Sans' };
  line-height: 1.2em;
  ${space}
  ${fontSize}
  ${color}
  text-shadow: ${ props => props.shadow ? '0 0 10px rgba(0, 0, 0, 0.3)' : ''};
`

export default ({ level, ...props }) => {
  switch(level) {
    case 1:
      return <StyledHeading thin element={`h1`} mt={4} fontSize={[5,6,7]} { ...props } />
    case 2:
      return <StyledHeading thin element={`h2`} mt={4} fontSize={[5,5,6]} { ...props } />
    case 3:
      return <StyledHeading element={`h3`} mt={3} mb={2} fontSize={[4,4,5]} { ...props } />
    case 4:
      return <StyledHeading element={`h4`} fontSize={4} { ...props } />
    default:
      return <StyledHeading element={`h5`} fontSize={3} { ...props } />
  }
}
