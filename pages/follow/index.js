import React from 'react'
import Screen from '../../components/Screen'
import Follow from '../../components/Follow'

export default () => (
  <Screen
    baseRouteTitle='Follow'
    mainVisual='/static/trevordmiller-website.jpg'
    pathname='https://trevordmiller.com/follow'
    title='Follow'
    description='Follow along with my newsletter, social media, and whatnot'
    sections={[
      {
        component: (
          <Follow />
        ),
      },
    ]}
    footer={false}
  />
)
