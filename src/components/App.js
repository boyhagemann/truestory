import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import MaxBox from './MaxBox'
import Box from './Box'
import Link from './Link'
import Heading from './Heading'
import Text from './Text'
import Icon from './Icon'
import Button from './Button'
import Avatar from './Avatar'
import Logo from './Logo'
import defaultTheme from '../themes/default'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'

import Home from '../pages/Home'
import About from '../pages/About'
import What from '../pages/What'
import How from '../pages/How'
import Stories from '../pages/Stories'
import Story from '../pages/Story'
import Contact from '../pages/Contact'

import text from '../data/texts'

const baseUrl = process.env.PUBLIC_URL + '/preview'

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

const Call = Box.withComponent('a').extend`
  text-decoration: none;
`

const Preview = () => (
  <MaxBox width={600}>
    <Box px={3} py={4}>
      <Heading thin level={1} color={`pencil`}>Nog even geduld...</Heading>
      <Text>De website is bijna klaar.</Text>
      <Heading mt={4} level={3}>True Story Communicatie</Heading>
      <Text color={`ocean`} fontSize={2}>06-28708734 | rick@truestorycommunicatie.nl</Text>
    </Box>
  </MaxBox>
)


export default () => (
  <ThemeProvider theme={defaultTheme}>
    <Router>
      <ScrollToTop>

        <Route exact path={`/`} component={Preview} />
        <Route path={baseUrl} render={ () => (

        <Box width={1}>

          <Navbar width={1} bg={`canvas`}>
            <MaxBox>
              <Box width={[1, 1/8]} display={['none', 'block']}>
                <LogoContainer>
                  <Box px={3} pt={1}>
                    <Logo size={75} />
                  </Box>
                </LogoContainer>
              </Box>
              <Box width={[1, 7/8]} pt={1} px={3} textAlign={'right'}>
                { links.map(({ to, label }) => (
                  <Link component={NavLink} key={to} to={to} py={1} px={2} activeColor={`ocean`} color={`pencil`} fontSize={2}>{ label }</Link>
                ))}
                <Call
                  href={`tel:${ text.contact.telephone.full }`}
                  py={0}
                  pl={4}
                  color={`ocean`}
                  fontSize={4}
                >
                <Icon name="telephone" size={25} mr={1} color={`ocean`} />
                { text.contact.telephone.display }
              </Call>
              </Box>
            </MaxBox>
          </Navbar>

          <Content width={1}>
            <Route exact path={`${baseUrl}/`} component={Home} />
            <Route path={`${baseUrl}/over-ons`} component={About} />
            <Route path={`${baseUrl}/wat-we-doen`} component={What} />
            <Route path={`${baseUrl}/hoe-wij-het-doen`} component={How} />
            <Route exact path={`${baseUrl}/true-stories`} component={Stories} />
            <Route path={`${baseUrl}/true-stories/:slug`} component={Story} />
            <Route path={`${baseUrl}/contact`} component={Contact} />

          </Content>

          <Footer />

        </Box>


      )} />

      </ScrollToTop>
    </Router>
  </ThemeProvider>
)
