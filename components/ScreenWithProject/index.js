import React from 'react'
import Screen from '../Screen'
import { projects } from '../../pages/projects'

const ScreenWithProject = ({ id, sections }) =>
  <Screen
    baseRouteKey="projects"
    mainVisual={projects[id].mainVisual}
    pathname={`https://trevordmiller.com/projects/${id}`}
    title={projects[id].title}
    description={projects[id].description}
    sections={sections}
  />

export default ScreenWithProject
