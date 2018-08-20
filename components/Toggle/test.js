import React from "react";
import { mount } from "enzyme";
import Toggle from ".";

test("toggles when toggle handler is called", () => {
  const wrapper = mount(
    <Toggle>
      {({ isOpen, handleToggle }) => (
        <div>
          <button onClick={handleToggle} data-testid="toggle">
            Tap to toggle
          </button>
          <div>{isOpen ? "open" : "closed"}</div>
        </div>
      )}
    </Toggle>
  );

  const text = wrapper.text();
  expect(text).toContain("closed");

  const toggle = wrapper.find('[data-testid="toggle"]');

  toggle.simulate("click");
  const text2 = wrapper.text();
  expect(text2).toContain("open");

  toggle.simulate("click");
  const text3 = wrapper.text();
  expect(text3).toContain("closed");
});
