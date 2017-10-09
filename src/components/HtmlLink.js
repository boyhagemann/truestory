import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { space, width, fontSize, color, removeProps } from 'styled-system'

const colorHover = props => color({ ...props, color: props.hoverColor })

const HtmlLink = styled.a`
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  text-decoration: none;
  opacity: ${props => props.opacity};
  ${space}
  ${width}
  ${fontSize}
  ${color}

  &:hover {
    ${colorHover}
    opacity: 1;
  }
`

export default props => <HtmlLink color={`ocean`} { ...props } />
