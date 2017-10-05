import React from 'react'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Box from './Box'
import Button from './Button'
import Text from './Text'
import Link from './Link'
import Avatar from './Avatar'

import text from '../data/texts'

export default props => (
  <Box width={1} bg={`sahara`} pb={4} { ...props }>
    <MaxBox>
      { text.products.map( product => (
        <Box mt={-3} key={product.name} width={[1, 1/2, 1/2, 1/4]} p={2} textAlign={'center'}>
          <Link to={`/wat-we-doen`}>
            <Avatar size={130} fontSize={6} bg={`sahara--`}>TE</Avatar>
          </Link>
          <Box width={1}>
            <Link to={`/wat-we-doen`}>
              <Heading bold color={`night`} mb={0} element="h2" fontSize={4}>{product.heading}</Heading>
            </Link>
          </Box>
          <Text fontSize={2}>{ product.body }</Text>
        </Box>
      )) }
    </MaxBox>
  </Box>
)