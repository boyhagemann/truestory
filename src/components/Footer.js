import React, { Component } from 'react'
import { getStories } from '../utils/http'
import Box from './Box'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Link from './Link'
import Text from './Text'
import Button from './Button'
import Logo from './Logo'
import HtmlLink from './HtmlLink'
import Icon from './Icon'

import text from '../data/texts'

const Footer = ({ stories = [] }) => (
  <Box width={1} bg={`night`} color={`bleech`} pt={2} pb={4} textAlign={'center'}>
    <MaxBox>

      <Box width={[1, 1/2, 1/6]} mt={3} px={2} textAlign={['center', 'center', 'left']}>
        <Heading thin mb={2} element="h5" fontSize={4}>Contact</Heading>
        <Text m={0} fontSize={3} color={`pencil`}>
          <Icon name="telephone" size={20} mr={1} color={`ocean`} />
          <HtmlLink href={`tel:${text.contact.telephone.full}`} color={`pencil`} hoverColor={`bleech`}>{ text.contact.telephone.display }</HtmlLink>
        </Text>
        <Text m={0} fontSize={1} color={`pencil`}>
          <Icon name="email" size={20} mr={1} color={`ocean`} />
          <HtmlLink href={`mailto:${text.contact.email.display}`} color={`pencil`} hoverColor={`bleech`}>{ text.contact.email.display }</HtmlLink>
        </Text>
        <Button primary component={Link} to={`/contact`} bg={`ocean`} mt={2} icon="chat">{text.actions.contact}</Button>
      </Box>

      <Box width={[1, 1/2, 1/6]} mt={3} px={2} textAlign={['center', 'center', 'left']}>
        <Heading thin mb={2} element="h5" fontSize={4}>True stories</Heading>
        { stories.map( story => (
          <Box key={story.slug} width={1} pb={1}>
            <Link to={`/true-stories/${story.slug}`} color={`pencil`} hoverColor={`bleech`}>{ story.title }</Link>
          </Box>
        )) }
      </Box>

      <Box width={[1, 1/2, 1/6]} mt={3} px={2} textAlign={['center', 'center', 'left']}>
        <Heading thin mb={2} element="h5" fontSize={4}>Wat wij doen</Heading>
        { text.products.map( product => (
          <Box key={product.name} width={1} pb={1}>
            <Link to={`/wat-we-doen#${product.name}`} color={`pencil`} hoverColor={`bleech`}>{ product.heading }</Link>
          </Box>
        )) }
      </Box>

      <Box width={[1, 1, 1/6]} mt={3} px={2} textAlign={['center', 'center', 'left']}>
        <Logo size={150} />
      </Box>

    </MaxBox>
  </Box>

)


export default class extends Component {

  constructor() {
    super()
    this.state = {
      stories: []
    }
  }

  componentDidMount() {
    getStories({
      'fields.inFooter': true
    }).then( stories => {
      this.setState({ stories })
    })
  }

  render() {
    return <Footer { ...this.state } />
  }
}
