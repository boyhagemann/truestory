import React from 'react'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import Markdown from '../components/Markdown'
import Avatar from '../components/Avatar'

import CallToAction from '../components/CallToAction'
import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import lightBulb from '../assets/images/light-bulb-1246043_1920.jpg'
import text from '../data/texts'


export default () => (
  <Box width={1}>

    <Visual image={lightBulb} height={400} position={[`right`, 'center']}>
      <MaxBox width={1200}>
        <Box width={[1, 4/5]} px={3}>
          <Heading thin fontSize={[5,6,6,8]} mt={[350, 350, 250]} element={'h1'} color={`bleech`}>{text.how.heading}</Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Markdown px={3} mb={4}>{text.how.body}</Markdown>
    </MaxBox>

    <CallToAction />
    <Products />
    <Philosophy />

  </Box>
)
