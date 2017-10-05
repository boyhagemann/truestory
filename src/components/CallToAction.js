import React from 'react'
import MaxBox from './MaxBox'
import Box from './Box'
import Link from './Link'
import Button from './Button'

export default () => (
  <MaxBox>
    <Box width={1} textAlign={'center'} pb={4} mb={2}>
      <Button component={Link} to={`/contact`} huge primary>Neem contact op</Button>
    </Box>
  </MaxBox>
)
