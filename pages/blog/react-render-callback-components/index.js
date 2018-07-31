import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./index.md";

const ReactRenderCallbackComponents = () => (
  <PageWithBlogPost id="react-render-callback-components">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default ReactRenderCallbackComponents;
