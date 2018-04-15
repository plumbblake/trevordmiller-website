import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import { blogPosts, blogPostKeys } from '../../pages/blog'

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

PageWithBlogPost.propTypes = {
  id: PropTypes.oneOf(blogPostKeys).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
}

export default PageWithBlogPost
