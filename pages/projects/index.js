import React from 'react'
import tags from '../../utils/tags'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const projects = {

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

  'cortex': {
    tags: [tags.react, tags.node, tags.graphQl],
    mainVisual: '/static/cortex.png',
    title: `Cortex`,
    description: `A proof of concept for rendering the same set of React components across targets (web, native mobile, native desktop, and email). This was primarily a learning experience for me, rather than a real application to be used by others; I wanted to see if I could use a single set of GraphQL connected React components across multiple platforms. This project has a GraphQL API using Node connected to dummy data, an npm component library using Relay Modern to connect component data to the API, and a set of clients that consume the component library with some wrapping platform-specific code; the clients include web (using React DOM with Next.js), native mobile (using React Native with Expo), and native desktop (using Electron with Next.js).`,
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

  'dog-bathroom-button': {
    tags: [tags.unix, tags.node, tags.hardware],
    mainVisual: '/static/dog-bathroom-button.jpg',
    title: `Dog Bathroom Button`,
    description: `I attached a physical button to a Raspberry Pi for my dog to press with his paw when he needs to go to the bathroom. The button runs a Node program which sends me a text message saying "I need to go to the bathroom!" from my dog.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/dog-bathroom-button',
      },
      {
        description: 'Blog post',
        href: '/blog/raspberry-pi-button',
      },
    ],
  },

  'dotfiles': {
    tags: [tags.unix, tags.git],
    mainVisual: '/static/github.png',
    title: `Dotfiles`,
    description: `I organize my tooling settings in dotfiles.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/dotfiles',
      },
    ],
  },

  'shell-scripts': {
    tags: [tags.unix, tags.git],
    mainVisual: '/static/github.png',
    title: `Shell Scripts`,
    description: `I write shell scripts for repetitive tasks.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/shell-scripts',
      },
    ],
  },

  'device-setup': {
    tags: [tags.unix, tags.git],
    mainVisual: '/static/github.png',
    title: `Device Setup`,
    description: `I use this repo to aggregate and automate as much of my settings as possible, and document the rest.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/device-setup',
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
      {
        description: 'Blog post',
        href: '/blog/color-scheme-building',
      },
    ],
  },

  'egghead-instructor-center': {
    tags: [tags.react],
    mainVisual: '/static/egghead-instructor-center.png',
    title: `egghead Instructor Center`,
    description: `I built the initial production egghead Instructor Center. It was a React web app. It was for egghead instructors to get onboarded, submit lessons, view their royalties etc.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/eggheadio/egghead-instructor-center',
      },
    ],
  },

  'egghead-ui': {
    tags: [tags.npm, tags.react],
    mainVisual: '/static/egghead-ui.png',
    title: `egghead component library`,
    description: `I built the initial production egghead.io React component library which is used across egghead apps. It contains React components, pages of composed components, and general JavaScript utilities. It outputs an npm library as well as a living stle guide / documentation app from the library source. The app lets you randomize component and utility input to ensure data input is flexible. It also lets you add padding and other "side effects" to see how the components work when placed in different situations.`,
    links: [
      {
        description: 'Web app',
        href: 'https://styleguide.egghead.io',
      },
      {
        description: 'Code',
        href: 'https://github.com/eggheadio/egghead-ui',
      },
    ],
  },


  'egghead-practical-git': {
    tags: [tags.unix, tags.git],
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
    tags: [tags.unix, tags.npm, tags.node],
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
    tags: [tags.react, tags.node],
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

  'trevordmiller-website': {
    tags: [tags.react],
    mainVisual: '/static/trevordmiller-website.jpg',
    title: `This website`,
    description: `I built this website using React rendered with Next.js. It is hosted on now. I try to update it often and use it as an example  of my current technology choices.`,
    links: [
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
      {
        description: 'Blog post',
        href: '/blog/rebuilding-my-website',
      },
    ],
  },

  'guitar-lessons': {
    tags: [tags.react],
    mainVisual: '/static/guitar-lessons.png',
    title: `Guitar Lessons`,
    description: `A collection of guitar lessons using the way I understand music. Designed to help guitarists go beyond tabs and memorizing songs to really understanding how everything works together.`,
    links: [
      {
        description: 'Web app',
        href: '/projects/guitar-lessons',
      },
      {
        description: 'Code',
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
    ],
  },

  'domo-mobile-web': {
    tags: [tags.react, tags.node],
    mainVisual: '/static/domo.png',
    title: `Domo Mobile Web`,
    description: `I helped create the initial production mobile web app for Domo. It was built with React, Redux, complex data transformation, realtime chat, Node scripts, many other features and tools.`,
  },

  'church-history': {
    tags: [tags.node],
    mainVisual: '/static/church-history.png',
    title: `LDS Church History`,
    description: `I helped create the LDS Church History web app, which at the time included some new complex challenges like using Node for our API, server side rendering, interactive maps, and mobile first immersive visual effects.`,
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

}

const projectKeys = Object.keys(projects)

export default () => (
  <Screen
    baseRouteTitle='Projects'
    mainVisual={projects[projectKeys[0]].mainVisual}
    pathname='https://trevordmiller.com/projects'
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
