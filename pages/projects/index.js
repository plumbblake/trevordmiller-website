import React from 'react'
import Screen from '../../components/Screen'
import Teaser from '../../components/Teaser'

export const projects = {

  'egghead-practical-git': {
    mainVisual: '/static/egghead-practical-git.png',
    title: `Practical Git for Everyday Professional Use`,
    description: `Many coders struggle with the command line. Over the years, the command line has become increasingly important in my workflow and it is absolutely amazing. I created this video course to help developers feel confident with using Git from the command line.`,
    href: 'https://egghead.io/courses/practical-git-for-everyday-professional-use',
  },

  'egghead-publish-npm': {
    mainVisual: '/static/egghead-publish-npm.png',
    title: `Publish JavaScript packages on npm`,
    description: `I made this 20 minute long video course to help programmers learn how to share their own code on npm. It can seem scary at first, but learning how to do this can open up a world of new possibilities for you and your team.`,
    href: 'https://egghead.io/courses/publish-javascript-packages-on-npm',
  },

  'egghead-react-testing': {
    mainVisual: '/static/egghead-react-testing.png',
    title: `React Testing Cookbook`,
    description: `I've grown to like testing, especially for creating pure modules that just transform data or render something. I taught this video course to show some of the ways I test my web apps.`,
    href: 'https://egghead.io/courses/react-testing-cookbook',
  },

  'nova': {
    mainVisual: '/static/nova-colors.png',
    title: `Nova`,
    description: `I enjoy things that are simple, beautiful, and easy to use. I always wanted to create a custom color scheme to use with my different tools and projects, so I teamed up with a designer and created it. We built it as a stand-alone library that I could use across my code editor, terminal, and even personal websites and apps - like this one! It includes my favorite colors in my favorite flat/pastel style. Although I built it primarily for myself, I made it open source so anyone can use it if they also happen to like the style.`,
  },

  'settings': {
    mainVisual: '/static/github.png',
    title: `Settings`,
    description: `I like to stay organized. I use this settings repo to automate as much of my settings as possible, and document the rest. I also write shell scripts for repetitive tasks and keep them here.`,
    href: 'https://github.com/trevordmiller/settings',
  },

  'egghead-record-screencasts': {
    mainVisual: '/static/egghead-record-screencasts.png',
    title: `Record programming screencasts`,
    description: `I created this video course to teach programmers how to make code screencasts to help them share their knowledge with other developers.`,
    href: 'https://egghead.io/courses/record-badass-screencasts-for-egghead-io',
  },

  'perfect-particle': {
    mainVisual: '/static/spectrum-artwork.jpg',
    title: `Perfect Particle`,
    description: `I love music. I also enjoy composing. Perfect Particle is the name I use to release my recordings. I mainly create instrumental music that blends multiple styles like post rock, math rock, modern jazz, and ambient. I'm a guitarist at heart. I primarily compose with and play guitar, but I layer bits of synth and other instruments together.`,
  },

  'guitar-lessons': {
    mainVisual: '/static/guitar-lessons.png',
    title: `Guitar Lessons`,
    description: `A collection of guitar lessons using the way I understand music. Designed to help guitarists go beyond tabs and memorizing songs to really understanding how everything works together.`,
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
            links={[
              {
                description: 'View',
                href: project.href || `/projects/${projectKey}`,
              },
            ]}
          />
        ),
      })
    })}
  />
)
