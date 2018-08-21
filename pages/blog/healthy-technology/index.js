import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./index.md";

const TaskList = () => (
  <PageWithBlogPost id="healthy-technology">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default TaskList;