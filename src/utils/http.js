import { createClient } from 'contentful'

const client = createClient({
  space: 'hai60dzgdclm',
  accessToken: 'a499b465b7c7f12d505ce297a662de05838762e3da6838211dd451c85d53dd67',
})

const mapToStory = item => ({
  ...item.fields,
  image: item.fields.image.fields.file.url,
  createdAt: item.sys.createdAt,
})

export const getStories = filters => client
  .getEntries({    
    content_type: 'blog',
    ...filters,
  })
  .then( response => response.items.map(mapToStory))

export const getStory = slug => client
  .getEntries({
    order: '-sys.createdAt',
    content_type: 'blog',
    'fields.slug': slug
  })
  .then( response => response.items.map(mapToStory))
  .then( stories => stories.find(story => true) )
