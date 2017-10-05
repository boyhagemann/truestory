import React from 'react'
import MaxBox from '../components/MaxBox'
import Heading from '../components/Heading'
import Visual from '../components/Visual'
import Box from '../components/Box'
import Button from '../components/Button'
import Link from '../components/Link'
import Text from '../components/Text'
import Avatar from '../components/Avatar'

import Products from '../components/Products'
import Philosophy from '../components/Philosophy'
import typewriter from '../assets/images/typewriter-801921_1920.jpg'
import coffee from '../assets/images/coffee-2608864_1920.jpg'
import text from '../data/texts'

const blocks = ['strategy', 'ghostwriting', 'writing', 'editing']

const stories = [
  {
    image: typewriter,
    heading: 'Some first blog post',
    teaser: 'Some teaser text',
    slug: 'some-slug',
  },
  {
    image: coffee,
    payoff: 'Trek in een bakkie?',
    heading: 'Some first blog post',
    teaser: 'Some teaser text',
    slug: 'some-slug',
  },
]


export default () => (
  <Box width={1}>

    <Box width={1} bg={`sahara`} py={4}>
      <MaxBox width={1200}>
        { stories.map(story => (
            <Box width={1} px={3} py={2}>
              <Link width={1} to={`/true-stories/${story.slug}`}>
                <Visual image={story.image} width={1} height={['250px', '400px']} textAlign={'center'}>
                  <Heading thin element={`h3`} fontSize={6} color={`bleech`}>{ story.payoff }</Heading>
                </Visual>
              </Link>
              <Box width={1} p={3} bg={`bleech`}>
                <Heading thin element={'h2'} mt={2} fontSize={6}>{ story.heading }</Heading>
                <Text fontSize={3}>{ story.heading }</Text>
                <Button large primary component={Link} to={`/true-stories/${story.slug}`}>Lees verder</Button>
              </Box>
            </Box>
        ))}
      </MaxBox>
    </Box>

    <Products />
    <Philosophy />

  </Box>
)
