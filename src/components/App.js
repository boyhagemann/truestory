import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import MaxBox from './MaxBox'
import Box from './Box'
import Link from './Link'
import Heading from './Heading'
import Text from './Text'
import Button from './Button'
import Avatar from './Avatar'
import defaultTheme from '../themes/default'

import Home from '../pages/Home'
import About from '../pages/About'
import What from '../pages/What'
import How from '../pages/How'
import Stories from '../pages/Stories'
import Story from '../pages/Story'
import Contact from '../pages/Contact'

import TrueStoryLogo from '../assets/images/true story communicatie logo 01.png'
import text from '../data/texts'

const baseUrl = process.env.PUBLIC_URL

injectGlobal([`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`])

const Content = Box.extend`
  padding-top: 58px;
  min-height: 500px;
`

const Navbar = Box.extend`
  position: fixed;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 58px;
`

const Logo = styled.img`
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
`
const LogoContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`

const links = [
  { label: 'Home', to: `/`},
  { label: 'Wat doen we?', to: `/wat-we-doen`},
  { label: 'Hoe dan?', to: `/hoe-wij-het-doen`},
  { label: 'True stories', to: `/true-stories`},
  { label: 'Over ons', to: `/over-ons`},
  { label: 'Contact', to: `/contact`},
]


const showcases = ['strategy', 'ghostwriting', 'writing', 'editing']

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <Router>
      <Box width={1}>

        <Navbar width={1} bg={`canvas`}>
          <MaxBox>
            <Box width={[1, 1/8]}>
              <LogoContainer>
                <Box px={3} pt={1}>
                  <Logo size={75} src={TrueStoryLogo} />
                </Box>
              </LogoContainer>
            </Box>
            <Box width={[1, 7/8]} pt={1} textAlign={'right'}>
              { links.map(({ to, label }) => (
                <Link component={NavLink} key={to} to={to} py={1} px={2} activeColor={`ocean`} color={`pencil`} fontSize={2}>{ label }</Link>
              ))}
              <Link component={NavLink} to={'tel:+31 6 287 087 34'} py={0} pl={4} color={`ocean`} fontSize={4}>06-287 087 34</Link>
            </Box>
          </MaxBox>
        </Navbar>

        <Content width={1}>
          <Route exact path={`${baseUrl}`} component={Home} />
          <Route path={`${baseUrl}/over-ons`} component={About} />
          <Route path={`${baseUrl}/wat-we-doen`} component={What} />
          <Route path={`${baseUrl}/hoe-wij-het-doen`} component={How} />
          <Route exact path={`${baseUrl}/true-stories`} component={Stories} />
          <Route path={`${baseUrl}/true-stories/:slug`} component={Story} />
          <Route path={`${baseUrl}/contact`} component={Contact} />

        </Content>

        <Box width={1} bg={`night`} color={`bleech`} py={4}>
          <MaxBox>

            <Box width={[1, 1/4]} px={3}>
              <Heading thin mb={2} element="h5" fontSize={4}>Contact</Heading>
              <Text m={0} fontSize={1} color={`bleech`} opacity={.5}>Your address here</Text>
              <Button primary component={Link} to={`/contact`}>{text.actions.contact}</Button>
            </Box>

            <Box width={[1, 1/4]} px={3}>
              <Heading thin mb={2} element="h5" fontSize={4}>True stories</Heading>
              <Box width={1} pb={1}>
                <Link to={`/`} color={`ocean`}>Een blog link hier</Link>
              </Box>
              <Box width={1} pb={1}>
                <Link to={`/`} color={`ocean`}>En een blog link daar</Link>
              </Box>
            </Box>

          </MaxBox>
        </Box>


      </Box>

    </Router>
  </ThemeProvider>
)
