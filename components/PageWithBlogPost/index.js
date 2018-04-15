import React from 'react'
import Page from '../Page'
import { blogPosts } from '../../pages/blog'

const PageWithBlogPost = ({ id, sections }) => (
  <Page
    baseRouteKey="blog"
    mainVisual={blogPosts[id].mainVisual}
    pathname={`https://trevordmiller.com/blog/${id}`}
    title={blogPosts[id].title}
    description={blogPosts[id].description}
    tags={blogPosts[id].tags}
    sections={sections}
  />
)

export default PageWithBlogPost
