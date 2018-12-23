import React from "react";
import { mount } from "enzyme";
import ListItem from "../ListItem";
import List from ".";

test("has bullets when kind is bullet", () => {
  const wrapper = mount(
    <List kind="bullet">
      <ListItem>Some node</ListItem>
      <ListItem>Some node</ListItem>
    </List>
  );
  const html = wrapper.html();

  expect(html).toContain("<ul");
});

test("has numbers when kind is number", () => {
  const wrapper = mount(
    <List kind="number">
      <ListItem>Some node</ListItem>
      <ListItem>Some node</ListItem>
    </List>
  );
  const html = wrapper.html();

  expect(html).toContain("<ol");
});
