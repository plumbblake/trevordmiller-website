import React from "react";
import PageWithBlogPost from "../../../components/PageWithBlogPost";
import markdownMap from "../../../utils/markdownMap";
import Content from "./index.md";

const RebuildingMyWebsite = () => (
  <PageWithBlogPost id="rebuilding-my-website">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default RebuildingMyWebsite;
