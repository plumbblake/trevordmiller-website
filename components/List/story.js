import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem from "components/ListItem";
import List from ".";

storiesOf("List", module)
  .add("Default", () => (
    <List>
      <ListItem>Some node</ListItem>
      <ListItem>Some node</ListItem>
    </List>
  ))
  .add("Number", () => (
    <List kind="number">
      <ListItem>Some node</ListItem>
      <ListItem>Some node</ListItem>
    </List>
  ));
