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
import coffee from '../assets/images/coffee-2608864_1920.jpg'
import blur from '../assets/images/blur-2178780_1920.jpg'
import text from '../data/texts'

const blocks = ['strategy', 'ghostwriting', 'writing', 'editing']


export default () => (
  <Box width={1}>

    <Visual image={coffee} height={'400px'}>
      <MaxBox width={1200}>
        <Box px={3}>
          <Heading thin fontSize={8} mt={250} element={'h1'} color={`bleech`}>{text.contact.visual}</Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Box px={3} py={2}>
        <Text fontSize={4}>{text.intro}</Text>
      </Box>
    </MaxBox>

    <Philosophy />

  </Box>
)
