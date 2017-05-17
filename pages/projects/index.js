import React from 'react'
import {uiGroups} from '../../utils/styleGuide'
import tags from '../../utils/tags'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const projects = {

  'cortex': {
    tags: [tags.inProgress, tags.react, tags.node, tags.graphQl],
    mainVisual: '/static/cortex.png',
    title: `Cortex`,
    description: `I'm working on building a free, open souce, lightweight, "Spaced Repetition Software" to help you remember the things you learn. I hope the final production app is useful, but this is primarily a learning experience for me; I want to see if I can use a single set of GraphQL connected React components across multiple platforms. This project has a Mongo database, GraphQL API using Node, npm component library using Relay Modern, and a set of clients that consume the component library with some wrapping platform-specific code; the clients include web (using React DOM with Next.js), native mobile (using React Native with Expo), and native desktop (using Electron with Next.js).`,
    links: [
      {
        description: 'Code for GraphQL API',
        href: 'https://github.com/trevordmiller/cortex-api',
      },
      {
        description: 'Code for component library',
        href: 'https://github.com/trevordmiller/cortex-components',
      },
      {
        description: 'Code for clients',
        href: 'https://github.com/trevordmiller/cortex-clients',
      },
    ],
  },

  'hideaway': {
    tags: [tags.inProgress, tags.react, tags.node],
    mainVisual: '/static/hideaway.png',
    title: `Hideaway`,
    description: `When trying to focus on a task there are often a lot of distractions. I'm building a Mac app to escape distractions for a set amount of time. You start the timer to "hideaway" from the distractions. This closes extra apps, turns on do not disturb, hides the dock, and lets you run any other scripts you'd like. Then, when the timer is done, it resets your Mac back to the state it was in before the hideaway session. I'm building it with Node (Electron) and React (Next.js).`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/hideaway',
      },
    ],
  },

  'nova': {
    tags: [tags.npm],
    mainVisual: '/static/nova-colors.png',
    title: `Nova`,
    description: `I enjoy things that are simple, beautiful, and easy to use. I always wanted to create a custom color scheme to use with my different tools and projects, so I teamed up with a designer and created it. I built it as a stand-alone npm library that I could use across my code editor, terminal, and even personal websites and apps - like this one! It includes my favorite colors in my favorite flat/pastel style. Although I built it primarily for myself, I made it open source so anyone can use it if they also happen to like the style.`,
    links: [
      {
        description: 'Project website',
        href: '/projects/nova',
      },
      {
        description: 'Code for color library',
        href: 'https://github.com/trevordmiller/nova-colors',
      },
      {
        description: 'Code for editor plugins and tools',
        href: 'https://github.com/trevordmiller?tab=repositories&q=nova',
      },
    ],
  },

  'settings': {
    tags: [tags.shell, tags.unix],
    mainVisual: '/static/github.png',
    title: `Settings`,
    description: `I like to stay organized. I use this settings repo to automate as much of my settings as possible, and document the rest. I also write shell scripts for repetitive tasks and keep them here.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/settings',
      },
    ],
  },

  'egghead-practical-git': {
    tags: [tags.git, tags.unix],
    mainVisual: '/static/egghead-practical-git.png',
    title: `Practical Git for Everyday Professional Use`,
    description: `Many coders struggle with the command line. Over the years, the command line has become increasingly important in my workflow and it is absolutely amazing. I created this video course to help developers feel confident with using Git from the command line.`,
    links: [
      {
        description: 'Videos',
        href: 'https://egghead.io/courses/practical-git-for-everyday-professional-use',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/example-utility-functions',
      },
    ],
  },

  'egghead-publish-npm': {
    tags: [tags.npm, tags.unix],
    mainVisual: '/static/egghead-publish-npm.png',
    title: `Publish JavaScript packages on npm`,
    description: `I made this 20 minute long video course to help programmers learn how to share their own code on npm. It can seem scary at first, but learning how to do this can open up a world of new possibilities for you and your team.`,
    links: [
      {
        description: 'Videos',
        href: 'https://egghead.io/courses/publish-javascript-packages-on-npm',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/sensitive-words',
      },
    ],
  },

  'egghead-react-testing': {
    tags: [tags.react],
    mainVisual: '/static/egghead-react-testing.png',
    title: `React Testing Cookbook`,
    description: `I've grown to like testing, especially for creating "pure" modules that just transform data or render something. I taught this video course to show some of the ways I test my web apps.`,
    links: [
      {
        description: 'Videos',
        href: 'https://egghead.io/courses/react-testing-cookbook',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/example-favorite-quotes',
      },
    ],
  },

  'egghead-record-screencasts': {
    tags: [tags.general],
    mainVisual: '/static/egghead-record-screencasts.png',
    title: `Record programming screencasts`,
    description: `I created this video course to teach programmers how to make code screencasts to help them share their knowledge with other developers.`,
    links: [
      {
        description: 'Videos',
        href: 'https://egghead.io/courses/record-badass-screencasts-for-egghead-io',
      },
    ],
  },

  'perfect-particle': {
    tags: [tags.react],
    mainVisual: '/static/spectrum-artwork.jpg',
    title: `Perfect Particle`,
    description: `I love music. I also enjoy composing. Perfect Particle is the name I use to release my recordings. I mainly create instrumental music that blends multiple styles like post rock, math rock, modern jazz, and ambient. I'm a guitarist at heart. I primarily compose with and play guitar, but I layer bits of synth and other instruments together.`,
    links: [
      {
        description: 'Project website',
        href: '/projects/perfect-particle',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
    ],
  },

  'guitar-lessons': {
    tags: [
      {
        label: 'React',
        color: uiGroups.userCurrentState,
      },
    ],
    mainVisual: '/static/guitar-lessons.png',
    title: `Guitar Lessons`,
    description: `A collection of guitar lessons using the way I understand music. Designed to help guitarists go beyond tabs and memorizing songs to really understanding how everything works together.`,
    links: [
      {
        description: 'Project website',
        href: '/projects/guitar-lessons',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
    ],
  },

}

const projectKeys = Object.keys(projects)

export default () => (
  <Screen
    baseRouteTitle='Projects'
    mainVisual={projects[projectKeys[0]].mainVisual}
    pathname={`https://trevordmiller.com/projects`}
    title='Projects'
    description='Info and links to some of my projects'
    showDescription
    sections={projectKeys.map(projectKey => {
      const project = projects[projectKey]
      return ({
        title: project.title,
        component: (
          <Teaser 
            visual={project.mainVisual}
            description={project.description}
            links={project.links}
            tags={project.tags}
          />
        ),
      })
    })}
  />
)
