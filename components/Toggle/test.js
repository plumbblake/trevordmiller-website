import React from "react";
import { mount } from "enzyme";
import Toggle from ".";

const wrapper = mount(
  <Toggle>
    {({ isOpen, handleToggle }) => (
      <div>
        <button onClick={handleToggle}>Tap to toggle</button>
        <div>{isOpen ? "open" : "closed"}</div>
      </div>
    )}
  </Toggle>
);

test("is closed by default", () => {
  const text = wrapper.text();
  expect(text).toContain("closed");
});

test("is open after a toggle", () => {
  const button = wrapper.find("button");
  button.simulate("click");
  const text = wrapper.text();
  expect(text).toContain("open");
});
