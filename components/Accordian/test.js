import React from "react";
import { mount } from "enzyme";
import Accordian from ".";

test("has summary", () => {
  const wrapper = mount(
    <Accordian summary="Some summary node">Some children node</Accordian>
  );
  const text = wrapper.text();

  expect(text).toContain("Some summary node");
});

test("toggles children on summary taps", () => {
  const wrapper = mount(
    <Accordian summary="Some summary node">Some children node</Accordian>
  );

  const text = wrapper.text();
  expect(text).not.toContain("Some children node");

  const summary = wrapper.find('[data-testid="accordianSummary"]');

  summary.simulate("click");
  const text2 = wrapper.text();
  expect(text2).toContain("Some children node");

  summary.simulate("click");
  const text3 = wrapper.text();
  expect(text3).not.toContain("Some children node");
});
