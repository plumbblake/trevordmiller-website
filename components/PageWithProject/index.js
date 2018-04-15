import React from 'react'
import Page from '../Page'
import { projects } from '../../pages/projects'

const PageWithProject = ({ id, sections }) => (
  <Page
    baseRouteKey="projects"
    mainVisual={projects[id].mainVisual}
    pathname={`https://trevordmiller.com/projects/${id}`}
    title={projects[id].title}
    description={projects[id].description}
    sections={sections}
  />
)

export default PageWithProject
