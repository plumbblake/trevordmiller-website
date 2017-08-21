import React from 'react'
import Screen from '../../../components/Screen'
import Subscribe from '../../../components/Subscribe'
import { posts } from '../'

const key = 'most-used-git-commands'

export default () =>
  <Screen
    baseRouteTitle="blog"
    mainVisual={posts[key].mainVisual}
    pathname={`https://trevordmiller.com/blog/${key}`}
    title={posts[key].title}
    description={posts[key].description}
    showDescription
    sections={[
      {
        component: (
          <Subscribe
            contentUpgrade={{
              key: 'essential-git-commands',
              title: 'Essential Git Commands',
              description: 'Download the "Essential Git Commands" cheat sheet',
            }}
          />
        ),
      },
    ]}
  />
