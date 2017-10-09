import React from 'react'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
// import Avatar from '../components/Avatar'

import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import CallToAction from '../components/CallToAction'
import typewriter from '../assets/images/typewriter-801921_1920.jpg'
// import write from '../assets/images/write-593333_1920.jpg'
import text from '../data/texts'

const blocks = ['strategy', 'ghostwriting', 'writing', 'editing']

export default () => (
  <Box width={1}>

    <Visual image={typewriter} textAlign={'center'} position={['center', 'top']}>
      <Heading thin fontSize={[40, 70]} mt={[200, 300, 300, 490]} mb={60} element={'h1'} color={`bleech`}>{text.payoffs.visual}</Heading>
    </Visual>

    <MaxBox width={1200}>
      <Box px={3} py={2}>
        <Text fontSize={4}>{text.intro}</Text>
      </Box>
    </MaxBox>

    <CallToAction />

    <Products />
    <Philosophy />

  </Box>
)
