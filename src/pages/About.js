import React from 'react'
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
import CallToAction from '../components/CallToAction'
import notes from '../assets/images/notes-514998_1920.jpg'
import text from '../data/texts'

const blocks = ['strategy', 'ghostwriting', 'writing', 'editing']


export default () => (
  <Box width={1}>

    <Visual image={notes} height={400} textAlign={'center'}>
    </Visual>

    <MaxBox width={1200}>
      <Box px={3} py={2}>
        <Heading thin fontSize={7}>Over ons</Heading>
        <Text fontSize={4}>{text.intro}</Text>
      </Box>
    </MaxBox>

    <CallToAction />
    <Products />
    <Philosophy />

  </Box>
)
