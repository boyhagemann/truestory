import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color, removeProps, responsiveStyle } from 'styled-system'
import Icon from './Icon'

const Component = ({ component: Component = 'button', primary, positive, negative, large, huge, borderColor, ...props}) => {
  const cleanProps = removeProps(props)
  return <Component {...cleanProps} />
}

const borderColor = props => color({ ...props, color: props.borderColor }).color

const Button = styled(Component)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  border: 1px solid ${borderColor};
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:focus {
    outline:0;
  }
`

export default styled(({ icon, children, ...props }) => {

  let buttonProps = {
    p: 1,
    fontSize: 1,
    bg: 'sahara-',
    color: 'pencil',
    borderColor: 'none',
  }

  let iconProps = {
    size: 20,
    mr: 1,
  }

  if(props.large) {
      buttonProps.py = 1
      buttonProps.px = 2
      buttonProps.fontSize = [2,3]
      iconProps.mr = 2
      iconProps.size = 20
  }

  if(props.huge) {
      buttonProps.p = 2
      buttonProps.fontSize = [3,4,5]
      iconProps.mr = 2
      iconProps.size = 30
  }

  if(props.primary) {
    buttonProps.bg = 'ocean'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.positive) {
    buttonProps.bg = 'grass'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.negative) {
    buttonProps.bg = 'heart'
    buttonProps.color = 'bleech'
    buttonProps.borderColor = 'transparent'
  }

  if(props.disabled) {
    buttonProps.opacity = 0.5
  }

  return <Button { ...buttonProps } { ...props}>
    { icon && <Icon name={icon} color={`bleech`} opacity={.5} { ...iconProps } /> }
    { children }
  </Button>

})`

`
