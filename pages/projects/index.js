import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'

export const projects = {
  'trevordmiller-website': {
    tags: [
      tags.inProgress,
      tags.terminal,
      tags.unix,
      tags.vim,
      tags.git,
      tags.react,
      tags.npm,
      tags.node,
    ],
    mainVisual: '/static/trevordmiller-website.png',
    title: `trevordmiller.com`,
    description: `I add new courses, blog posts, and projects to my website (this website) regularly.`,
    links: [
      {
        description: 'Read the blog post on how it works',
        href: '/blog/rebuilding-my-website',
      },
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
    ],
  },

  ropig: {
    tags: [tags.inProgress, tags.react, tags.graphQl],
    mainVisual: '/static/github.png',
    title: 'Ropig',
    description: `For my full-time job, I'm currently working on a new product called Ropig. Ropig is a new alert management tool that breaks down the firehose of events from your monitoring apps.`,
    links: [
      {
        description: `Go to the app`,
        href: 'https://ropig.com',
      },
    ],
  },

  dotfiles: {
    tags: [tags.terminal, tags.unix, tags.vim, tags.git],
    mainVisual: '/static/github.png',
    title: `Dotfiles`,
    description: `I organize my tooling settings in dotfiles.`,
    links: [
      {
        description: 'Read the blog post on how I use these dotfiles',
        href: '/blog/dotfiles',
      },
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/dotfiles',
      },
    ],
  },

  'shell-scripts': {
    tags: [tags.terminal, tags.unix, tags.vim, tags.git],
    mainVisual: '/static/github.png',
    title: `Shell Scripts`,
    description: `I write shell scripts to automate repetitive tasks on my computer; this includes things like checking all git repo statuses, starting workflows for different projects, scaffolding a new project, stopping all processes on my computer, setting up a new computer etc.`,
    links: [
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/shell-scripts',
      },
    ],
  },

  nova: {
    tags: [tags.terminal, tags.unix, tags.vim, tags.git, tags.npm],
    mainVisual: '/static/nova-colors.png',
    title: `Nova`,
    description: 'A color scheme for modern web development.',
    links: [
      {
        description: `View the project's website`,
        href: '/projects/nova',
      },
      {
        description: 'Read the blog post on how Nova was built',
        href: '/blog/color-scheme-building',
      },
      {
        description: 'See the code for the color library',
        href: 'https://github.com/trevordmiller/nova-colors',
      },
      {
        description: 'See the code for the plugins',
        href: 'https://github.com/trevordmiller?tab=repositories&q=nova',
      },
    ],
  },

  'dog-bathroom-button': {
    tags: [tags.terminal, tags.unix, tags.node, tags.hardware],
    mainVisual: '/static/dog-bathroom-button.jpg',
    title: `Dog Bathroom Button`,
    description: `I attached a physical button to a Raspberry Pi for my dog to press with his paw when he needs to go to the bathroom. The button runs a Node program which sends me a text message saying "I need to go to the bathroom!" from my dog.`,
    links: [
      {
        description: 'Read the blog post on how it was built',
        href: '/blog/raspberry-pi-button',
      },
      {
        description: 'See the code',
        href: 'https://github.com/trevordmiller/dog-bathroom-button',
      },
    ],
  },

  hideaway: {
    tags: [tags.react, tags.node],
    mainVisual: '/static/hideaway.png',
    title: `Hideaway`,
    description: 'A Mac app to escape distractions for a set amount of time.',
    links: [
      {
        description: `View the app`,
        href: '/projects/hideaway',
      },
      {
        description: 'See the code',
        href: 'https://github.com/trevordmiller/hideaway',
      },
    ],
  },

  cortex: {
    tags: [tags.react, tags.node, tags.graphQl],
    mainVisual: '/static/cortex.png',
    title: `Cortex`,
    description: `A proof of concept for rendering the same set of GraphQL connected React components across targets (web, native mobile, and native desktop).`,
    links: [
      {
        description: 'See the code for the GraphQL API',
        href: 'https://github.com/trevordmiller/cortex-api',
      },
      {
        description: 'See the code for the component library',
        href: 'https://github.com/trevordmiller/cortex-components',
      },
      {
        description: 'See the code for the clients',
        href: 'https://github.com/trevordmiller/cortex-clients',
      },
    ],
  },

  'guitar-lessons': {
    tags: [tags.react],
    mainVisual: '/static/guitar-lessons.png',
    title: `Guitar Lessons`,
    description: `A collection of guitar lessons with the way I understand music. Designed to help guitarists go beyond tabs and memorizing songs to really understanding how everything works together.`,
    links: [
      {
        description: 'View the app',
        href: '/projects/guitar-lessons',
      },
    ],
  },

  'egghead-instructor-center': {
    tags: [tags.react],
    mainVisual: '/static/egghead-instructor-center.png',
    title: `egghead Instructor Center`,
    description: `I built the initial production egghead Instructor Center. It was for egghead instructors to get onboarded, submit lessons, view their royalties etc.`,
    links: [
      {
        description: 'See the code',
        href: 'https://github.com/eggheadio/egghead-instructor-center',
      },
    ],
  },

  'egghead-ui': {
    tags: [tags.npm, tags.react],
    mainVisual: '/static/egghead-ui.png',
    title: `egghead component library`,
    description: `I built the initial production egghead.io component library which is used across egghead apps.  It outputs an npm library as well as a living style guide from the library source. The app lets you randomize component and utility input to ensure data input is flexible. It also lets you add padding and other "side effects" to see how the components work when placed in different situations.`,
    links: [
      {
        description: `Go to the project's website`,
        href: 'https://styleguide.egghead.io',
      },
      {
        description: 'See the code',
        href: 'https://github.com/eggheadio/egghead-ui',
      },
    ],
  },

  'domo-mobile-web': {
    tags: [tags.react, tags.node],
    mainVisual: '/static/domo.png',
    title: `Domo Mobile Web`,
    description: `I helped create the initial production mobile web app for Domo.`,
  },

  'church-history': {
    tags: [tags.node],
    mainVisual: '/static/church-history.png',
    title: `LDS Church History`,
    description: `I helped create the LDS Church History web app. Which at the time included some new complex challenges like using Node for our API, server side rendering, interactive maps, and mobile first immersive visual effects.`,
  },

  'perfect-particle': {
    tags: [tags.react],
    mainVisual: '/static/spectrum-artwork.jpg',
    title: `Perfect Particle`,
    description: `Instrumental music that blends multiple styles like post rock, math rock, modern jazz, and ambient.`,
    links: [
      {
        description: `View the project's website`,
        href: '/projects/perfect-particle',
      },
    ],
  },
}

const projectKeys = Object.keys(projects)

export default () =>
  <ScreenWithBaseRoute
    id="projects"
    sections={projectKeys.map(projectKey => {
      const project = projects[projectKey]
      return {
        title: project.title,
        component: (
          <Teaser
            visual={project.mainVisual}
            description={project.description}
            links={project.links}
            tags={project.tags}
          />
        ),
      }
    })}
  />
