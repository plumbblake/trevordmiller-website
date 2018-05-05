import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import markdownMap from '../../../utils/markdownMap'
import Content from './_index.md'

const WindowsOnMac = () => (
  <PageWithBlogPost id="windows-on-mac">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default WindowsOnMac
