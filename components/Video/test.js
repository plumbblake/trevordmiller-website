import React from "react";
import { mount } from "enzyme";
import Video from ".";

const videoFile = "/static/hideaway-example.mp4";
const placeholder = "<span";

test("has lazy loading", () => {
  const wrapper = mount(<Video src={videoFile} />);
  const html = wrapper.html();

  expect(html).toContain(placeholder);
  expect(html).not.toContain(videoFile);
});
