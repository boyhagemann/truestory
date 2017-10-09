import React from 'react'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import AvatarImage from '../components/AvatarImage'
import Markdown from '../components/Markdown'

import CallToAction from '../components/CallToAction'
import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import typewriter from '../assets/images/typewriter-801921_1920.jpg'
import text from '../data/texts'
import Rick from '../assets/images/Rick-van-Leeuwen-1_10.jpg'

    // <MaxBox width={1200}>
    //   <Box width={1} px={3} mb={4} textAlign={'center'}>
    //     <AvatarImage image={Rick} textAlign={'center'} width={150} height={'150px'} position={['center', 'center']} />
    //     <Heading element="h5" mt={2} mb={0} fontSize={4} color={'ocean'}>Rick van Leeuwen</Heading>
    //     <Text m={0} fontSize={3}>Tekstschrijver</Text>
    //   </Box>
    // </MaxBox>

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
