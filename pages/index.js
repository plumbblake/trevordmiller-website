import React from 'react'
import baseRoutes from '../utils/baseRoutes'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export default () =>
  <Screen
    mainVisual="/static/trevordmiller-website.jpg"
    pathname={`https://trevordmiller.com`}
    title="home"
    description="trevordmiller.com"
    sections={[
      ...baseRoutes.map((baseRoute, index) => ({
        title: baseRoute.title,
        component: (
          <Teaser
            key={index}
            visual={baseRoute.visual}
            description={baseRoute.description}
            links={[
              {
                description: `View ${baseRoute.title} page`,
                href: baseRoute.path,
              },
            ]}
          />
        ),
      })),
    ]}
  />
