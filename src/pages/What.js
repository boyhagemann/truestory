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
import Icon from '../components/Icon'


import CallToAction from '../components/CallToAction'
import Philosophy from '../components/Philosophy'
import notepad from '../assets/images/notepad-691250_1920.jpg'
import text from '../data/texts'

export default () => (
  <Box width={1}>

    <Visual image={notepad} height={400} textAlign={['center', 'left']}>
      <MaxBox width={1200}>
        <Box px={3}>
          <Heading thin fontSize={[6,7,8]} mt={250} element={'h1'} color={`bleech`}>{text.what.heading}</Heading>
        </Box>
      </MaxBox>
    </Visual>

    <MaxBox width={1200}>
      <Box px={3} py={2}>
        <Text textAlign={['center', 'left']}>{text.what.intro}</Text>
      </Box>

      { text.products.map(product => (
        <Box width={1} mb={4} px={3} textAlign={['center', 'left']}>
          <Box width={[1, 1/3, 1/4, 1/5]} mt={[0, 3, 2]}>
            <Avatar fontSize={0} size={180} p={30} color={`sahara`}>
              <Icon name={product.icon} size={120} />
            </Avatar>
          </Box>
          <Box width={[1, 2/3, 3/4, 4/5]}>
            <Heading element={`h2`} fontSize={5} mt={3} mb={0}>{ product.heading }</Heading>
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
