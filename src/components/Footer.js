import React from 'react'
import Box from './Box'
import MaxBox from './MaxBox'
import Heading from './Heading'
import Link from './Link'
import Text from './Text'
import Button from './Button'
import Logo from './Logo'
import Icon from './Icon'

import text from '../data/texts'

export default ({ stories = [] }) => (
  <Box width={1} bg={`night`} color={`bleech`} py={4} textAlign={'center'}>
    <MaxBox>

      <Box width={[1, 1/2, 1/6]} mt={2} px={3}>
        <Logo size={150} />
      </Box>

      <Box width={[1, 1/2, 1/6]} px={3} textAlign={['center', 'center', 'left']}>
        <Heading thin mb={2} element="h5" fontSize={4}>Contact</Heading>
        <Text m={0} fontSize={1} color={`bleech`} opacity={.5}>{ text.contact.telephone.display }</Text>
        <Button primary component={Link} to={`/contact`} mt={3}>
          <Icon name="chat" size={20} color={`bleech`} opacity={.5} mt={1} mr={1} />
          {text.actions.contact}
        </Button>
      </Box>

      <Box width={[1, 1/2, 1/6]} px={3} textAlign={['center', 'center', 'left']}>
        <Heading thin mb={2} element="h5" fontSize={4}>True stories</Heading>
        { stories.map( story => (
          <Box key={story.slug} width={1} pb={1}>
            <Link to={`/stories/${story.slug}`} color={`ocean`}>{ story.title }</Link>
          </Box>
        )) }
      </Box>

    </MaxBox>
  </Box>

)
