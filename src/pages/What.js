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
import Philosophy from '../components/Philosophy'
import notepad from '../assets/images/notepad-691250_1920.jpg'
import text from '../data/texts'

export default () => (
  <Box width={1}>

    <Visual image={notepad} height={400} textAlign={'left'}>
      <MaxBox width={1200}>
        <Box px={3}>
          <Heading thin fontSize={8} mt={250} element={'h1'} color={`bleech`}>{text.what.heading}</Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Box px={3} py={2}>
        <Text>{text.what.intro}</Text>
      </Box>

      { text.products.map(product => (
        <Box width={1} mb={4} px={3} textAlign={['center', 'left']}>
          <Box width={[1, 1/6]} mt={2}>
            <Avatar fontSize={7} size={150} color={`sahara`}>TAfff</Avatar>
          </Box>
          <Box width={[1, 5/6]}>
            <Heading element={`h2`} fontSize={4}>{ product.heading }</Heading>
            <Text fontSize={3}>{ product.body }</Text>
          </Box>
        </Box>
      ))}
    </MaxBox>

    <MaxBox>
      <Box px={3} py={2}>
        <Markdown>{text.what.body}</Markdown>
      </Box>
    </MaxBox>

    <CallToAction />
    <Philosophy />

  </Box>
)
