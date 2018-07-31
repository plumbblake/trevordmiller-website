import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./_index.md";

const WholesomeMedia = () => (
  <PageWithBlogPost id="wholesome-media">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default WholesomeMedia;
