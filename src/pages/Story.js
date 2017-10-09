import React, { Component } from 'react'
import { getStory } from '../utils/http'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import AvatarImage from '../components/AvatarImage'
import Markdown from '../components/Markdown'
import Moment from 'react-moment'

import CallToAction from '../components/CallToAction'
import Products from '../components/Products'
import Philosophy from '../components/Philosophy'

import Rick from '../assets/images/Rick-van-Leeuwen-1_10.jpg'

const Story = ({ title, body, image, createdAt }) => (
  <Box width={1}>

    <Visual image={image} height={'400px'} width={1}>
      <MaxBox width={1200}>
        <Box px={3}>
          <Heading thin element={`h3`} mt={250} mb={50} fontSize={[6,6,6,8]} color={`bleech`}></Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Box width={1} px={3} mt={-4} textAlign={['center', 'left']} >
        <AvatarImage image={Rick} width={150} height={'150px'} position={['center', 'center']} />
        <Box mt={[1, 4]} ml={2}>
          <Heading element="h5" mt={2} mb={0} fontSize={4} color={'ocean'}>Rick van Leeuwen</Heading>
          <Text m={0} fontSize={1} color={`pencil+++`}>Oprichter True Story | <Moment fromNow>{createdAt}</Moment></Text>
        </Box>
      </Box>
    </MaxBox>

    <MaxBox width={1200}>
      <Box mb={4} px={3}>
        <Markdown>{body}</Markdown>
      </Box>
    </MaxBox>

    <CallToAction />
    <Products />
    <Philosophy />

  </Box>
)


export default class extends Component {

    constructor() {
      super()
      this.state = {}
    }

    componentDidMount() {
      getStory(this.props.match.params.slug).then( story => {
        this.setState({ ...story })
      })
    }

    render() {
      return <Story { ...this.state } />
    }
}
