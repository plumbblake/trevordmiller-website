import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from ".";

storiesOf("Anchor", module)
  .add("Default", () => (
    <Anchor href="https://google.com">Some children</Anchor>
  ))
  .add("Relative with prefetch", () => (
    <Anchor href="/blog/example">Some children</Anchor>
  ));
