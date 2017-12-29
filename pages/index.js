import React from 'react'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export const baseRoutes = {
  courses: {
    path: '/courses',
    title: 'Courses',
    description: 'Timeless courses for coders',
    info: `Across the web, you'll find loads of programming courses covering languages, frameworks, and libraries. While these are valuable for learning skills specific to your current job, the courses here on trevordmiller.com are unique because they only cover timeless topics. Each course you complete through trevordmiller.com gives you timeless skills you can use throughout your career!`,
    visual: 'film',
  },

  blog: {
    path: '/blog',
    title: 'Blog',
    description: 'Articles for coders',
    visual: 'newspaper',
  },

  projects: {
    path: '/projects',
    title: 'Projects',
    description: 'My own code projects',
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

export default () =>
  <Screen
    mainVisual="/static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="Home"
    description="Courses, articles, and other goodies for coders"
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
