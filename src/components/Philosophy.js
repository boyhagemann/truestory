import React from 'react'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Box from './Box'
import Text from './Text'

import text from '../data/texts'

export default () => (
    <Box width={1} bg={`ocean`} color={`bleech`}>
      <MaxBox>
        <Box px={3} py={4}>
          <Heading fontSize={5} color={`bleech`}>{ text.philosophy.heading }</Heading>
          <Text fontSize={3} color={`bleech`} opacity={.5}>{ text.philosophy.body }</Text>
        </Box>
      </MaxBox>
    </Box>
)
