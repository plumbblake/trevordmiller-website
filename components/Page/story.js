import React from "react";
import { storiesOf } from "@storybook/react";
import Page from ".";

storiesOf("Page", module).add("Default", () => (
  <Page
    mainVisual="https://static/trevordmiller-website.png"
    pathname="https://trevordmiller.com"
    title="Some string"
    description="Some string"
    sections={[
      {
        title: "Some string",
        component: <div>Some node</div>
      }
    ]}
  />
));
