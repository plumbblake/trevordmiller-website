import React from 'react'
import Screen from '../../components/Screen'

// TODO: Auto build this list from Projects sub folder items
const projects = [
  {
    title: 'Nova',
    href: '/projects/nova',
  },
  {
    title: 'Perfect Particle',
    href: '/projects/perfect-particle',
  },
]

export default () => (
  <Screen
    title='Projects'
    sections={projects.map((project) => ({
      title: 'Nova',
      component: (
        <div>{project.title}</div>
      ),
    }))}
  / >
)
