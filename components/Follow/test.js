import React from "react";
import { mount } from "enzyme";
import Follow from ".";

test("omits email list signup form at first", () => {
  const wrapper = mount(<Follow />);
  const joinInput = wrapper.find('[data-testid="joinEmailListInput"]');
  expect(joinInput.exists()).toBe(false);
});

test("has email list signup form after join button tap", () => {
  const wrapper = mount(<Follow />);
  const joinButton = wrapper.find('[data-testid="joinEmailListButton"]');
  joinButton.simulate("click");

  const joinInput = wrapper.find('[data-testid="joinEmailListInput"]');
  expect(joinInput.exists()).toBe(true);
});
