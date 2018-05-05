import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Page'
import { blogPosts, blogPostKeys } from '../../pages/blog'

const PageWithBlogPost = ({ id, sections, children }) => (
  <Page
    baseRouteKey="blog"
    mainVisual={blogPosts[id].mainVisual}
    pathname={`https://trevordmiller.com/blog/${id}`}
    title={blogPosts[id].title}
    description={blogPosts[id].description}
    tags={blogPosts[id].tags}
    sections={sections}
  >
    {children}
  </Page>
)

PageWithBlogPost.propTypes = {
  id: PropTypes.oneOf(blogPostKeys).isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node.isRequired,
    }),
  ),
  children: PropTypes.element,
}

export default PageWithBlogPost
