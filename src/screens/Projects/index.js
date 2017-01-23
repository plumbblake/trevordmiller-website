import React from 'react'
import {spacing} from '../../utils/styleGuide'
import Screen from '../../components/Screen'
import List from '../../components/List'
import Anchor from '../../components/Anchor'

// TODO: Auto build this list from Projects sub folder items
const projects = [
  {
    title: 'Settings',
    description: 'I like to stay organized. I use this settings repo to automate as much of my settings as possible, and document the rest. I also write scripts for repetative tasks and keep them here.',
    href: 'https://github.com/trevordmiller/settings',
  },
  {
    title: 'Nova',
    description: 'I\'m not much of a designer, but I enjoy great design. I enjoy things that are simple, beautiful, and easy to use. I always wanted to create a custom color scheme to use with my different tools and projects, so I teamed up with a designer and created it. We built it as a stand-alone library that I could use across my code editor, terminal, and even personal websites and apps - like this one! It includes my favorite colors in my favorite flat/pastel style. Although I built it primarily for myself, I made it open source so anyone can use it if they also happen to like the style.',
    href: '/projects/nova',
  },
  {
    title: 'Record Badass Screencasts for egghead.io',
    description: 'I love egghead.io. They help people learn how to code through consise screencasts. My favorite thing about them is that they respect the student\'s time - they keeep everything short and to the point, with a high quantity of high quality examples. I use egghead to keep my own skills sharp. I also teach through egghead. I created this course to teach programmers everything they need to know to become an egghead instructor.',
    href: 'https://egghead.io/courses/record-badass-screencasts-for-egghead-io',
  },
  {
    title: 'Practical Git for Everyday Professional Use',
    description: 'Many coders struggle with the command line. Over the years, the command line has become increasingly important in my workflow and it is absolutly amazing. I created this course to help developers feel confident with using Git from the command line.',
    href: 'https://egghead.io/courses/practical-git-for-everyday-professional-use',
  },
  {
    title: 'React Testing Cookbook',
    description: 'I\'ve grown to like testing, especially for creating pure modules that just transform data or render something. I taught this course to show some of the ways I test my web apps.',
    href: 'https://egghead.io/courses/react-testing-cookbook',
  },
  {
    title: 'Perfect Particle',
    description: 'I love music. I also enjoy composing. Perfect Particle is the name I use to release my recordings. I mainly create instrumental music that blends multiple styles like post rock, math rock, modern jazz, and ambient. I\'m a guitarist at heart. I primarily compose with and play guitar, but I layer bits of synth and other instruments together.',
    href: '/projects/perfect-particle',
  },
]

export default () => (
  <Screen
    title='Projects'
    description='Info and links to some of my projects'
    sections={projects.map((project) => ({
      title: project.title,
      component: (
        <div>
          <div>
            {project.description}
          </div>
          <div style={{
            marginTop: spacing.small,
          }}>
            <List
              items={[
                <Anchor href={project.href}>
                  View
                </Anchor>
              ]}
              type='link'
            />
          </div>
        </div>
      ),
    }))}
  / >
)
