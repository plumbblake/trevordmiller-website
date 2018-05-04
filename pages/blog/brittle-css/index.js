import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Content from './index.md'

const BrittleCss = () => (
  <PageWithBlogPost
    id="brittle-css"
    sections={[
      {
        title: 'TODO break up sections',
        component: <Content />,
      },
    ]}
  />
)

export default BrittleCss
