import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import markdownMap from '../../../utils/markdownMap'
import Content from './index.md'

const Dotfiles = () => (
  <PageWithBlogPost id="dotfiles">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default Dotfiles
