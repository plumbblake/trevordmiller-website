import React from 'react'
import Screen from '../../../components/Screen'
import {posts} from '../'

const key = 'spaced-repetition-software'

export default () => (
  <Screen
    title={posts[key].title}
    description={posts[key].description}
    sections={[
      {
        title: 'some section',
        component: (
          <div>some content</div>
        ),
      },
    ]}
  />
)
