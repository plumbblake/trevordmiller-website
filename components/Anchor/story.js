import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from ".";

storiesOf("Anchor", module).add("default", () => (
  <Anchor href="https://google.com">Some children</Anchor>
));
