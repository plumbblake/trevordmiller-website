import React from "react";
import { storiesOf } from "@storybook/react";
import tags from "utils/tags";
import Teaser from ".";

storiesOf("Teaser", module).add("Default", () => (
  <Teaser
    tags={[tags.inProgress, tags.terminal, tags.vim, tags.git, tags.node]}
    visual="suit"
    body="Some string"
    links={[
      {
        description: "Some string",
        href: `/example`
      }
    ]}
  />
));
