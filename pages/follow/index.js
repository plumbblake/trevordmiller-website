import React from 'react'
import Screen from '../../components/Screen'
import Follow from '../../components/Follow'

export default () =>
  <Screen
    baseRouteTitle="follow"
    mainVisual="/static/trevordmiller-website.jpg"
    pathname="https://trevordmiller.com/follow"
    title="follow"
    description="Follow along with my newsletter, social media, and whatnot"
    sections={[
      {
        component: <Follow />,
      },
    ]}
    footer={false}
  />
