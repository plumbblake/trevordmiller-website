import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./_index.md";

const RaspberryPiButton = () => (
  <PageWithBlogPost id="raspberry-pi-button">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default RaspberryPiButton;
