import React from 'react'
import styled from 'styled-components'
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
import text from '../data/texts'
import Rick from '../assets/images/Rick-van-Leeuwen-1_10.jpg'

const blocks = ['strategy', 'ghostwriting', 'writing', 'editing']

const Avatar = styled(Visual)`
  border-radius: 100%;
  border: 2px solid white;
`

export default () => (
  <Box width={1}>

    <Visual image={typewriter} textAlign={'center'} position={['center', 'center']}>
      <Heading thin fontSize={70} mt={250} mb={30} element={'h1'} color={`bleech`}>{text.payoffs.visual}</Heading>
      <Box width={400} mb={50} textAlign={'left'}>
        <Box width={200}>
          <Avatar image={Rick} textAlign={'center'} width={150} height={'150px'} position={['center', 'center']} />
        </Box>
        <Box width={200}>
          <Heading element="h5" mt={4} mb={0} fontSize={4} color={'ocean'}>Rick van Leeuwen</Heading>
          <Text m={0} fontSize={3} color={'bleech'}>Eigenaar</Text>
        </Box>
      </Box>
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
