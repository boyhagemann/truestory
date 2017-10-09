import React from 'react'
import MaxBox from './MaxBox'
import Box from './Box'
import Link from './Link'
import Button from './Button'
import Icon from './Icon'

export default () => (
  <MaxBox>
    <Box width={1} textAlign={'center'} pb={4} mt={2} mb={4}>
      <Button component={Link} to={`/contact`} huge primary icon="chat">Neem contact op</Button>
    </Box>
  </MaxBox>
)
