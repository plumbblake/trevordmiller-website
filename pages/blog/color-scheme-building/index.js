import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import markdownMap from '../../../utils/markdownMap'
import Content from './index.md'

const ColorSchemeBuilding = () => (
  <PageWithBlogPost id="color-scheme-building">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default ColorSchemeBuilding
