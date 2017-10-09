import React from 'react'
import styled from 'styled-components'
import TrueStoryLogo from '../assets/images/true story communicatie logo 01.png'

const Logo = styled.img`
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
`

export default ({ size = 50, ...props }) => (
  <Logo size={size} src={TrueStoryLogo} { ...props } />
)
