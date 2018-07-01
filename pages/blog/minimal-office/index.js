import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./index.md";

const MinimalOffice = () => (
  <PageWithBlogPost id="minimal-office">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default MinimalOffice;
