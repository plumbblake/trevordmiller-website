import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem from ".";

storiesOf("ListItem", module).add("Default", () => (
  <ListItem>Some node</ListItem>
));
