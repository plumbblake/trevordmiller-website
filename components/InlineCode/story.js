import React from "react";
import { storiesOf } from "@storybook/react";
import InlineCode from ".";

storiesOf("InlineCode", module).add("Default", () => (
  <InlineCode>{`const answer = 42;`}</InlineCode>
));
