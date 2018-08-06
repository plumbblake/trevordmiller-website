import React from "react";
import { mount } from "enzyme";
import Image from ".";

const imageFile = "/static/todoist.jpg";
const placeholder = "<span";

test("has lazy loading", () => {
  const wrapper = mount(
    <Image src={imageFile} description="Screenshot of a task manager" />
  );
  const html = wrapper.html();

  expect(html).toContain(placeholder);
  expect(html).not.toContain(imageFile);
});
