import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import { projects, projectKeys } from '../../pages/projects'

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

PageWithProject.propTypes = {
  id: PropTypes.oneOf(projectKeys).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
}

export default PageWithProject
