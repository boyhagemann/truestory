import React from 'react'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Box from './Box'
import Button from './Button'
import Text from './Text'
import Link from './Link'
import Avatar from './Avatar'
import Icon from './Icon'

import text from '../data/texts'

export default props => (
  <Box width={1} bg={`sahara`} pb={4} { ...props }>
    <MaxBox>
      <Box width={1} mt={-4}>
        { text.products.map( product => (
          <Box mt={0} mb={3} key={product.name} width={[1, 1/2, 1/2, 1/4]} p={2} textAlign={'center'}>
            <Link to={`/wat-we-doen`}>
              <Avatar size={130} p={25} fontSize={0} bg={`sahara--`}>
                <Icon name={product.icon} size={80} color={`bleech`} />
              </Avatar>
            </Link>
            <Box width={1}>
              <Link to={`/wat-we-doen`}>
                <Heading color={`night`} level={3}>{product.heading}</Heading>
              </Link>
            </Box>
            <Text small mt={0}>{ product.teaser }</Text>
          </Box>
        )) }
      </Box>
    </MaxBox>
  </Box>
)
