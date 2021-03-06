import React from 'react'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Box from './Box'
import Markdown from './Markdown'

import text from '../data/texts'

export default () => (
    <Box width={1} bg={`ocean`} color={`bleech`}>
      <MaxBox>
        <Box px={2} py={[2,4]}>
          <Heading level={3} mt={2} color={`bleech`}>{ text.philosophy.heading }</Heading>
          <Markdown color={`bleech`} opacity={.7}>{ text.philosophy.body }</Markdown>
        </Box>
      </MaxBox>
    </Box>
)
