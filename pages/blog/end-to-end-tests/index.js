import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import markdownMap from '../../../utils/markdownMap'
import Content from './index.md'

const EndToEndTests = () => (
  <PageWithBlogPost id="end-to-end-tests">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default EndToEndTests
