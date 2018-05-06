import React from 'react'
import PropTypes from 'prop-types'
import Page from 'components/Page'
import { baseRoutes, baseRouteKeys } from 'pages'

const PageWithBaseRoute = ({ id, sections }) => (
  <Page
    baseRouteKey={id}
    mainVisual="/static/trevordmiller-website.png"
    pathname={`https://trevordmiller.com/${id}`}
    title={baseRoutes[id].title}
    description={baseRoutes[id].description}
    info={baseRoutes[id].info}
    sections={sections}
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
}

export default PageWithBaseRoute
