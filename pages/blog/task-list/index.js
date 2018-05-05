import React from 'react'
import PageWithBlogPost from '../../../components/PageWithBlogPost'
import markdownMap from '../../../utils/markdownMap'
import Content from './index.md'

const TaskList = () => (
  <PageWithBlogPost id="task-list">
    <Content components={markdownMap} />
  </PageWithBlogPost>
)

export default TaskList
