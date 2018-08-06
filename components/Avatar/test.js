import React from "react";
import { mount } from "enzyme";
import Avatar from ".";

const imageFile = "/static/avatar.jpg";
const placeholder = "<span";

test("has lazy loading", () => {
  const wrapper = mount(
    <Avatar src={imageFile} description="Trevor D. Miller avatar" />
  );
  const html = wrapper.html();

  expect(html).toContain(placeholder);
  expect(html).not.toContain(imageFile);
});
