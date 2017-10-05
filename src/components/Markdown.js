import React from 'react'
import ReactMarkdown from 'react-markdown'
import Heading from './Heading'
import Text from './Text'
import Box from './Box'

const H1 = ({ level, ...props }) => <Heading element={`h1`} fontSize={7} { ...props } />
const H2 = ({ level, ...props }) => <Heading element={`h2`} fontSize={6} { ...props } />
const H3 = ({ level, ...props }) => <Heading element={`h3`} fontSize={5} { ...props } />
const H4 = ({ level, ...props }) => <Heading element={`h4`} fontSize={4} { ...props } />

const renderHeading = ({ level, ...props }) => {
  switch(level) {
    case 1:
      return <Heading thin element={`h1`} mt={4} fontSize={7} { ...props } />
    case 2:
      return <Heading thin element={`h2`} mt={4} fontSize={6} { ...props } />
    case 3:
      return <Heading element={`h3`} mt={4} mb={0} fontSize={5} { ...props } />
    case 4:
      return <Heading element={`h4`} fontSize={4} { ...props } />
    default:
      return <Heading element={`h5`} fontSize={3} { ...props } />
  }
}

export default ({ children, ...props }) => (
  <Box { ...props }>
    <ReactMarkdown
      source={children}
      renderers={{
        heading: renderHeading,
        paragraph: Text
      }} />
  </Box>
)
