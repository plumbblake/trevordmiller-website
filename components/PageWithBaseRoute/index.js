import React from 'react'
import Page from '../Page'
import { baseRoutes } from '../../pages'

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

export default PageWithBaseRoute
