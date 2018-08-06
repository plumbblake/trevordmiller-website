import React from "react";
import { mount } from "enzyme";
import Audio from ".";

const audioFile = "/static/spectrum-sample.mp3";
const placeholder = "<span";

test("has lazy loading", () => {
  const wrapper = mount(<Audio src={audioFile} />);
  const html = wrapper.html();

  expect(html).toContain(placeholder);
  expect(html).not.toContain(audioFile);
});
