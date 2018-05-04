import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import Content from './index.md'

const TaskList = () => (
  <PageWithBlogPost
    id="test-behavior"
    sections={[
      {
        title: 'TODO break up sections',
        component: <Content />,
      },
    ]}
  />
)

export default TaskList
