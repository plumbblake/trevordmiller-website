import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Content from './index.md'

const EndToEndTests = () => (
  <PageWithBlogPost
    id="end-to-end-tests"
    sections={[
      {
        title: 'TODO break up sections',
        component: <Content />,
      },
    ]}
  />
)

export default EndToEndTests
