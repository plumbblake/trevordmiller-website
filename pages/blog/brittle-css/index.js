import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./_index.md";

const BrittleCss = () => (
  <PageWithBlogPost id="brittle-css">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default BrittleCss;
