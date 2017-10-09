import React, { Component } from 'react'
import { getStories } from '../utils/http'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import Avatar from '../components/Avatar'


import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import typewriter from '../assets/images/typewriter-801921_1920.jpg'
import coffee from '../assets/images/coffee-2608864_1920.jpg'
import text from '../data/texts'

const Story = Box.withComponent('article')

const Stories = ({ stories = []}) => (
  <Box width={1}>

    <Box width={1} bg={`sahara`} py={[0,0,4]}>

      <MaxBox width={1200}>
        { stories.map(story => (
            <Story key={story.slug} width={1} px={[2,2,3]} py={2}>
              <Link width={1} to={`/true-stories/${story.slug}`}>
                <Visual image={story.image} width={1} height={['250px', '400px']} textAlign={'center'}>
                  <Heading thin element={`h3`} fontSize={6} color={`bleech`}>{ story.payoff }</Heading>
                </Visual>
              </Link>
              <Box width={1} p={[2,2,3]} bg={`bleech`}>
                <Heading thin level={1} my={2}>{ story.title }</Heading>
                <Text mt={0}>{ story.teaser }</Text>
                <Button large primary component={Link} mt={1} to={`/true-stories/${story.slug}`}>{story.buttonText || text.actions.readMore}</Button>
              </Box>
            </Story>
        ))}
      </MaxBox>
    </Box>

    <Products pt={4} />
    <Philosophy />

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
    getStories().then( stories => {
      this.setState({ stories })
    })
  }

  render() {
    return <Stories { ...this.state } />
  }
}
