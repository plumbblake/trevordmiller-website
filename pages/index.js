import React from 'react'
import Screen from '../components/Screen'
import Teaser from '../components/Teaser'

export const baseRoutes = {
  courses: {
    path: '/courses',
    title: 'Courses',
    description: 'Timeless courses for coders',
    info: `Across the web, there are loads of programming courses. They cover all sorts of languages, frameworks, and libraries. These types of courses are valuable for learning short-term skills. But, these courses also lose their value as technology changes. The courses here on trevordmiller.com are different. They only cover timeless topics. Topics that haven't changed much in years. So each course here gives you core skills that should last your entire career.`,
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

export default () => (
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
)
