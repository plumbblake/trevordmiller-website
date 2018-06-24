import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./_index.md";

const TaskList = () => (
  <PageWithBlogPost id="learning-routine">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default TaskList;
