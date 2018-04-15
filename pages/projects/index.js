import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'

export const projects = {
  'dog-bathroom-button': {
    tags: [tags.terminal, tags.node, tags.hardware],
    mainVisual: '/static/dog-bathroom-button.jpg',
    title: `Dog Bathroom Button`,
    description: `A Node server for a Raspberry Pi which sends me a text message saying "I need to go to the bathroom!" from my dog.`,
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

  'shell-scripts': {
    tags: [tags.terminal, tags.vim, tags.git],
    mainVisual: '/static/shell-scripts.jpg',
    title: `Shell Scripts`,
    description: `Shell scripts to automate repetitive tasks on my computer.`,
    links: [
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/shell-scripts',
      },
    ],
  },

  dotfiles: {
    tags: [tags.terminal, tags.vim, tags.git],
    mainVisual: '/static/dotfiles.png',
    title: `Dotfiles`,
    description: `Dotfiles for all my tools and settings.`,
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

  'practice-problems': {
    tags: [tags.typescript, tags.go],
    mainVisual: '/static/code-1.jpg',
    title: `Practice Problems`,
    description: `Coding practice problems.`,
    links: [
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/practice-problems',
      },
    ],
  },

  'egghead-instructor-center': {
    tags: [tags.ruby, tags.react, tags.redux],
    mainVisual: '/static/egghead-instructor-center.png',
    title: `egghead Instructor Center`,
    description: `A web app for egghead.io instructors to submit lessons, view their royalties etc.`,
    links: [
      {
        description: 'See the open source portion of the code',
        href: 'https://github.com/eggheadio/egghead-instructor-center',
      },
    ],
  },

  'egghead-ui': {
    tags: [tags.react],
    mainVisual: '/static/egghead-ui.png',
    title: `egghead component library`,
    description: `An npm component library and living style guide for egghead.io.`,
    links: [
      {
        description: `Go to the project's website`,
        href: 'https://styleguide.egghead.io',
      },
      {
        description: 'See the open source portion of the code',
        href: 'https://github.com/eggheadio/egghead-ui',
      },
    ],
  },

  cortex: {
    tags: [tags.graphQl, tags.node, tags.react, tags.electron],
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

  'trevordmiller-website': {
    tags: [tags.inProgress, tags.node, tags.react],
    mainVisual: '/static/trevordmiller-website.png',
    title: `trevordmiller.com`,
    description: `A website (this website) to aggregate all my stuff.`,
    links: [
      {
        description: 'Read the blog post on how I built it',
        href: '/blog/rebuilding-my-website',
      },
      {
        description: `See the code`,
        href: 'https://github.com/trevordmiller/trevordmiller-website',
      },
    ],
  },

  nova: {
    tags: [tags.inProgress, tags.terminal, tags.vim, tags.git, tags.node],
    mainVisual: '/static/nova-colors.png',
    title: `Nova`,
    description:
      'A coding color scheme where each color has a dedicated purpose.',
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

  hideaway: {
    tags: [tags.node, tags.react, tags.electron],
    mainVisual: '/static/hideaway.png',
    title: `Hideaway`,
    description:
      'A native Mac app to escape distractions for a set amount of time.',
    links: [
      {
        description: `View the app's website`,
        href: '/projects/hideaway',
      },
      {
        description: 'See the code',
        href: 'https://github.com/trevordmiller/hideaway',
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
      {
        description: 'See the code',
        href: 'https://github.com/trevordmiller/hideaway',
      },
    ],
  },

  'perfect-particle': {
    tags: [tags.react],
    mainVisual: '/static/spectrum-artwork.jpg',
    title: `Perfect Particle`,
    description: `Instrumental music that blends multiple styles like post rock, math rock, modern jazz, and ambient.`,
    links: [
      {
        description: `View the website`,
        href: '/projects/perfect-particle',
      },
      {
        description: 'See the code',
        href: 'https://github.com/trevordmiller/hideaway',
      },
    ],
  },
}

const projectKeys = Object.keys(projects)

const Projects = () => (
  <ScreenWithBaseRoute
    id="projects"
    sections={projectKeys.map(projectKey => {
      const project = projects[projectKey]
      return {
        title: project.title,
        component: (
          <Teaser
            tags={project.tags}
            visual={project.mainVisual}
            body={project.description}
            links={project.links}
          />
        ),
      }
    })}
  />
)

export default Projects
