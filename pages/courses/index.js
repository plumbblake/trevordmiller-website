import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'

export const courses = {
  'egghead-practical-git': {
    tags: [tags.terminal, tags.unix, tags.git],
    mainVisual: '/static/egghead-practical-git.png',
    title: `Practical Git for Everyday Professional Use`,
    description: `Many coders struggle with the command line. Over the years, the terminal has become increasingly important in my workflow and it is absolutely amazing. I created this video course to help developers feel confident with using Git from the command line.`,
    href:
      'https://egghead.io/courses/practical-git-for-everyday-professional-use',
  },

  'egghead-publish-npm': {
    tags: [tags.terminal, tags.git, tags.npm, tags.node],
    mainVisual: '/static/egghead-publish-npm.png',
    title: `Publish JavaScript packages on npm`,
    description: `I made this 20 minute long video course to help programmers learn how to share their own code on npm. It can seem scary at first, but learning how to do this can open up a world of new possibilities for you and your team.`,
    href: 'https://egghead.io/courses/publish-javascript-packages-on-npm',
  },

  'egghead-react-testing': {
    tags: [tags.terminal, tags.react],
    mainVisual: '/static/egghead-react-testing.png',
    title: `React Testing Cookbook`,
    description: `I've grown to like testing, especially for creating "pure" modules that just transform data or render something. I taught this video course to show some of the ways I test my web apps.`,
    href: 'https://egghead.io/courses/react-testing-cookbook',
  },
}

const courseKeys = Object.keys(courses)

export default () =>
  <ScreenWithBaseRoute
    id="courses"
    sections={courseKeys.map(courseKey => {
      const course = courses[courseKey]
      return {
        title: course.title,
        component: (
          <Teaser
            visual={course.mainVisual}
            description={course.description}
            tags={course.tags}
            links={[
              {
                description: `Watch the video course`,
                href: course.href,
              },
            ]}
          />
        ),
      }
    })}
  />
