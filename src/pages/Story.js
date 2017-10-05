import React from 'react'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import Avatar from '../components/Avatar'
import Markdown from '../components/Markdown'

import CallToAction from '../components/CallToAction'
import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import typewriter from '../assets/images/typewriter-801921_1920.jpg'
import text from '../data/texts'


export default () => (
  <Box width={1}>

    <Visual image={typewriter} height={'400px'} width={1}>
      <MaxBox width={1200}>
        <Box px={3}>
          <Heading thin element={`h3`} mt={250} mb={50} fontSize={[6,6,6,8]} color={`bleech`}>{ text.about.heading }</Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Box mb={4} px={3}>
        <Markdown>{text.about.body}</Markdown>
      </Box>
    </MaxBox>

    <CallToAction />
    <Products />
    <Philosophy />

  </Box>
)
