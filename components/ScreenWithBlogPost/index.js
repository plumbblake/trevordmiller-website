import React from 'react'
import Screen from '../Screen'
import { posts } from '../../pages/blog'

const ScreenWithBlogPost = ({ id, sections }) =>
  <Screen
    baseRouteKey="blog"
    mainVisual={posts[id].mainVisual}
    pathname={`https://trevordmiller.com/blog/${id}`}
    title={posts[id].title}
    description={posts[id].description}
    showDescription
    sections={sections}
  />

export default ScreenWithBlogPost
