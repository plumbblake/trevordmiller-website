import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Content from './index.md'

const GraphQlSchema = () => (
  <PageWithBlogPost
    id="graphql-schema"
    sections={[
      {
        title: 'TODO break up sections',
        component: <Content />,
      },
    ]}
  />
)

export default GraphQlSchema
