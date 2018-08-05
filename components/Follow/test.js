import React from "react";
import { mount } from "enzyme";
import Follow from ".";

test("omits email list signup form by default", () => {
  const wrapper = mount(<Follow />);
  const joinInput = wrapper.find('[data-testid="joinEmailListInput"]');
  expect(joinInput.exists()).toBe(false);
});
