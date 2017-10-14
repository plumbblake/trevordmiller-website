import React from 'react'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export const baseRoutes = {
  courses: {
    path: '/courses',
    title: 'courses',
    description:
      'Video courses about coding, focused on the terminal (Unix, Vim, Git, etc.)',
    visual: 'film',
  },

  blog: {
    path: '/blog',
    title: 'blog',
    description:
      'Articles about coding, focused on the terminal (Unix, Vim, Git, etc.)',
    visual: 'newspaper',
  },

  projects: {
    path: '/projects',
    title: 'projects',
    description: 'Information about my projects',
    visual: 'stack',
  },

  about: {
    path: '/about',
    title: 'about',
    description: 'A bit about me',
    visual: 'profile',
  },

  follow: {
    path: '/follow',
    title: 'follow',
    description:
      'Follow along with my email list and other accounts accross the web',
    visual: 'userPlus',
  },
}

export const baseRouteKeys = Object.keys(baseRoutes)

export default () =>
  <Screen
    mainVisual="/static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="home"
    description="trevordmiller.com"
    sections={baseRouteKeys.map((baseRouteKey, index) => {
      const baseRoute = baseRoutes[baseRouteKey]

      return {
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
      }
    })}
  />
