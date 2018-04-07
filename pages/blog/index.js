import React from 'react'
import tags from '../../utils/tags'
import ScreenWithBaseRoute from '../../components/ScreenWithBaseRoute'
import Teaser from '../../components/Teaser'

export const blogPosts = {
  'windows-on-mac': {
    tags: [tags.hardware],
    mainVisual: '/static/macbook.jpg',
    title: `Running Windows on Mac`,
    description: `How to set up Windows on a Mac legally, for free, with native performance.`,
    date: 'April 6, 2018',
  },

  'brittle-css': {
    tags: [tags.css],
    mainVisual: '/static/brittle-css.jpg',
    title: `How to find and fix brittle CSS`,
    description: `This article shows examples of making CSS easier to maintain with Flexbox, fluid values, additive media queries etc.`,
    date: 'March 12, 2018',
    links: [
      {
        description: 'Read the blog post',
        href: 'https://ropig.com/blog/find-fix-brittle-css/',
      },
    ],
  },

  'graphql-schema': {
    tags: [tags.graphQl],
    mainVisual: '/static/graphql-schema.jpg',
    title: `Using a GraphQL schema to supercharge team collaboration`,
    description: `Examples of using a GraphQL schema to automate data pieces across back-end and front-end.`,
    date: 'December 13, 2017',
    links: [
      {
        description: 'Read the blog post',
        href:
          'https://ropig.com/blog/using-graphql-schema-supercharge-team-collaboration/',
      },
    ],
  },

  'end-to-end-tests': {
    tags: [tags.node],
    mainVisual: '/static/end-to-end-tests.png',
    title: `End-to-end Tests that Don’t Suck with Puppeteer`,
    description: `How you can write simple, lightweight end-to-end tests that aren't slow and brittle.`,
    date: 'October 16, 2017',
    links: [
      {
        description: 'Read the blog post',
        href: 'https://ropig.com/blog/end-end-tests-dont-suck-puppeteer/',
      },
    ],
  },

  dotfiles: {
    tags: [tags.terminal, tags.vim, tags.git],
    mainVisual: '/static/dotfiles.png',
    title: `Organizing tooling settings using dotfiles`,
    description: `Examples of using dotfiles to manage and back-up the config for git, shells, editors, etc.`,
    date: 'July 23, 2017',
  },

  'react-render-callback-components': {
    tags: [tags.react],
    mainVisual: '/static/react-render-callback-components.png',
    title: `Sharing stateful UI logic in React apps using Render Callback components`,
    description: `A few examples of abstracting shared logic across multiple components using the Render Callback pattern (aka Render Props or Function as Child components).`,
    date: 'July 15, 2017',
  },

  'raspberry-pi-button': {
    tags: [tags.terminal, tags.hardware, tags.node],
    mainVisual: '/static/dog-bathroom-button.jpg',
    title: `Running a server on a Raspberry Pi with a physical button`,
    description: `All the pieces needed to set up a Raspberry Pi with a physical button. Covers buying hardware, running a Raspberry Pi, wiring up a physical button, and creating a server to send a text message when the button is pressed.`,
    date: 'June 1, 2017',
  },

  'color-scheme-building': {
    tags: [tags.terminal, tags.vim, tags.git, tags.node],
    mainVisual: '/static/nova-example-code-screenshot.png',
    title: `Building the Nova color scheme`,
    description: `By using an module for color values, we were able to generate color schemes for multiple editors and tools from one source.`,
    date: 'May 1, 2017',
  },

  'task-list': {
    tags: [tags.general],
    mainVisual: '/static/todoist.jpg',
    title: `Using my task list as my single source of truth`,
    description: `I like to stay organized with an automated task list so that I don’t forget to do the things I want and need to do, and so I can keep my brain free from remembering it all.`,
    date: 'April 1, 2017',
  },

  'minimal-office': {
    tags: [tags.general],
    mainVisual: '/static/minimal-office-first-person.jpg',
    title: `My minimal office set up`,
    description: `I set up my dream office and I'm ecstatic with how it turned out.`,
    date: 'March 1, 2017',
  },

  'spaced-repetition-software': {
    tags: [tags.general],
    mainVisual: '/static/anki-card-question.jpg',
    title: `Retaining what I learn through Spaced Repetition Software (SRS)`,
    description: `When I learn something new, I add it to my SRS. Then, each morning I review what my SRS suggests I'm about to forget, to ingrain it in my long-term memory.`,
    date: 'February 1, 2017',
  },

  'wholesome-media': {
    tags: [tags.general],
    mainVisual: '/static/common-sense-media.png',
    title: `Configuring devices for wholesome media`,
    description: `How I use a combination of filters and settings to help keep media in my home wholesome.`,
    date: 'January 1, 2017',
  },

  'rebuilding-my-website': {
    tags: [tags.general],
    mainVisual: '/static/trevordmiller-website.png',
    title: `Rebuilding my website to aggregate all my stuff`,
    description: `How I consolidated all of my code projects under one website.`,
    date: 'December 1, 2016',
  },
}

const blogPostKeys = Object.keys(blogPosts)

export default () => (
  <ScreenWithBaseRoute
    id="blog"
    sections={blogPostKeys.map(blogPostKey => {
      const blogPost = blogPosts[blogPostKey]
      return {
        title: blogPost.title,
        component: (
          <Teaser
            tags={blogPost.tags}
            visual={blogPost.mainVisual}
            description={blogPost.description}
            links={
              blogPost.links || [
                {
                  description: 'Read the blog post',
                  href: `/blog/${blogPostKey}`,
                },
              ]
            }
          />
        ),
      }
    })}
  />
)
