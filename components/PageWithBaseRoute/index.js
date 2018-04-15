import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import { baseRoutes, baseRouteKeys } from '../../pages'

const PageWithBaseRoute = ({ id, sections, footer = true }) => (
  <Page
    baseRouteKey={id}
    mainVisual="/static/trevordmiller-website.png"
    pathname={`https://trevordmiller.com/${id}`}
    title={baseRoutes[id].title}
    description={baseRoutes[id].description}
    info={baseRoutes[id].info}
    sections={sections}
    footer={footer}
  />
)

PageWithBaseRoute.propTypes = {
  id: PropTypes.oneOf(baseRouteKeys).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
  footer: PropTypes.bool,
}

export default PageWithBaseRoute
