import React from "react";
import PageWithBlogPost from "components/PageWithBlogPost";
import markdownMap from "utils/markdownMap";
import Content from "./index.md";

const SpacedRepetitionSoftware = () => (
  <PageWithBlogPost id="spaced-repetition-software">
    <Content components={markdownMap} />
  </PageWithBlogPost>
);

export default SpacedRepetitionSoftware;
