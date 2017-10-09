import React from 'react'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Box from './Box'
import Text from './Text'

import text from '../data/texts'

export default () => (
    <Box width={1} bg={`ocean`} color={`bleech`}>
      <MaxBox>
        <Box px={3} py={[2,4]}>
          <Heading level={3} mt={2} color={`bleech`}>{ text.philosophy.heading }</Heading>
          <Text color={`bleech`} opacity={.5}>{ text.philosophy.body }</Text>
        </Box>
      </MaxBox>
    </Box>
)
