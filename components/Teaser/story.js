import React from "react";
import { storiesOf } from "@storybook/react";
import tags from "../../utils/tags";
import Teaser from ".";

storiesOf("Teaser", module)
  .add("Default", () => <Teaser body="Some string" />)
  .add("Tags", () => (
    <Teaser
      body="Some string"
      tags={[tags.inProgress, tags.terminal, tags.vim, tags.git, tags.node]}
    />
  ))
  .add("Visual with icon", () => (
    <Teaser body="Some string" visual="terminal" />
  ))
  .add("Visual with image", () => (
    <Teaser body="Some string" visual="/static/real-world-git.png" />
  ))
  .add("Links", () => (
    <Teaser
      body="Some string"
      links={[
        {
          description: "Some string",
          href: `/example`
        }
      ]}
    />
  ))
  .add("Combined", () => (
    <Teaser
      body="Some string"
      tags={[tags.inProgress, tags.terminal, tags.vim, tags.git, tags.node]}
      visual="suit"
      links={[
        {
          description: "Some string",
          href: `/example`
        }
      ]}
    />
  ));
