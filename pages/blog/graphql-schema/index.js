import React from 'react'
import PageWithBlogPost from 'components/PageWithBlogPost'
import markdownMap from 'utils/markdownMap'
import Content from './_index.md'

const GraphQlSchema = () => (
  <PageWithBlogPost id="graphql-schema">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default GraphQlSchema
