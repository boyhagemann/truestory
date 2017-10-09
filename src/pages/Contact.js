import React from 'react'
import styled from 'styled-components'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import Avatar from '../components/Avatar'

import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import coffee from '../assets/images/coffee-2608864_1920.jpg'
import text from '../data/texts'


const Name = props => <TextInput width={1} p={1} fontSize={3} />
const Email = props => <TextInput width={1} p={1} fontSize={3} />
const Message = props => <TextInput width={1} p={1} fontSize={3} />


export default () => (
  <Box width={1}>

    <MaxBox width={1200}>
      <Box width={[1, 1/2]} px={2} py={2}>
        <Heading level={1}>Contact</Heading>
        <Text>{text.intro}</Text>
      </Box>
      <Box width={[1, 1/2]} mt={[0, 4]} mb={4} px={2} py={[0,3]}>
        <Box width={1} py={1}>
          <Label fontSize={3}>Uw naam</Label>
          <Name />
        </Box>
        <Box width={1} py={1}>
          <Label fontSize={3}>Uw e-mail</Label>
          <Email />
        </Box>
        <Box width={1} py={1}>
          <Label fontSize={3}>Uw vraag of opmerking</Label>
          <Message />
        </Box>
        <Box width={1} py={2}>
          <Button primary large icon={'chat'}>{text.actions.send}</Button>
        </Box>
      </Box>
    </MaxBox>

    <Philosophy />

  </Box>
)
