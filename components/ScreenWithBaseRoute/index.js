import React from 'react'
import Screen from '../Screen'
import { baseRoutes } from '../../pages'

const ScreenWithBaseRoute = ({ id, sections, footer = true }) =>
  <Screen
    baseRouteKey={id}
    mainVisual="/static/trevordmiller-website.jpg"
    pathname={`https://trevordmiller.com/${id}`}
    title={baseRoutes[id].title}
    description={baseRoutes[id].description}
    showDescription
    sections={sections}
    footer={footer}
  />

export default ScreenWithBaseRoute
