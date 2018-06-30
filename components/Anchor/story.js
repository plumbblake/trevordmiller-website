import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from ".";

storiesOf("Anchor", module)
  .add("Relative with prefetch", () => (
    <Anchor href="/blog/example">Some children</Anchor>
  ))
  .add("Absolute", () => (
    <Anchor href="https://google.com">Some children</Anchor>
  ));
