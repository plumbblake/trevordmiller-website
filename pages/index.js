import React from 'react'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export const baseRoutes = {
  courses: {
    path: '/courses',
    title: 'Courses',
    description: `Some free tutorial videos I've recorded for software developers`,
    visual: 'film',
  },

  blog: {
    path: '/blog',
    title: 'Blog',
    description: `Some articles I've written for software developers`,
    visual: 'newspaper',
  },

  projects: {
    path: '/projects',
    title: 'Projects',
    description: 'My work and open source projects',
    visual: 'stack',
  },

  about: {
    path: '/about',
    title: 'About',
    description: 'A bit about me',
    visual: 'profile',
  },

  follow: {
    path: '/follow',
    title: 'Follow',
    description: 'My email list and social media accounts',
    visual: 'userPlus',
  },
}

export const baseRouteKeys = Object.keys(baseRoutes)

export default () => (
  <Screen
    mainVisual="/static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="Home"
    description="Links to my video courses, blog posts, code projects, and whatnot"
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
                description: `View ${baseRoute.title}`,
                href: baseRoute.path,
              },
            ]}
          />
        ),
      }
    })}
  />
)
