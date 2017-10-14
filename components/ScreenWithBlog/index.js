import React from 'react'
import Screen from '../Screen'
import { posts } from '../../pages/blog'

const ScreenWithBlog = ({ id, sections }) =>
  <Screen
    baseRouteTitle="blog"
    mainVisual={posts[id].mainVisual}
    pathname={`https://trevordmiller.com/blog/${id}`}
    title={posts[id].title}
    description={posts[id].description}
    showDescription
    sections={sections}
  />

export default ScreenWithBlog
