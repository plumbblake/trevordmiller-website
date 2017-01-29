import React from 'react'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const posts = {
  'spaced-repetition-software': {
    title: `Retaining what I learn through Spaced Repetition Software (SRS)`,
    description: `When I learn something new, I add it to my SRS. Then, each morning I review what my SRS suggests I\'m about to forget, to ingrain it in my long-term memory.`,
  },
}

export default () => (
  <Screen
    title='Blog'
    description='Thoughts to share'
    sections={Object.keys(posts).map(key => ({
      title: posts[key].title,
      component: (
        <Teaser 
          description={posts[key].description}
          href={`/blog/${key}`}
        />
      ),
    }))}
  />
)
