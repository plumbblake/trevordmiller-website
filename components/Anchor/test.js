import React from "react";
import { mount } from "enzyme";
import Link from "next/link";
import Anchor from ".";

test("has Next.js Link with prefetch when a relative link", () => {
  const wrapper = mount(<Anchor href="/blog/example">Some node</Anchor>);
  const link = wrapper.find(Link);

  expect(link.exists()).toBe(true);
  expect(link.prop("prefetch")).toBe(true);
});

test("has normal anchor tag when not a relative link", () => {
  const wrapper = mount(<Anchor href="https://google.com">Some node</Anchor>);
  const html = wrapper.html();

  expect(html).toContain("<a");
  expect(html).not.toContain("prefetch");
});
