import React from "react";
import { mount } from "enzyme";
import Link from "next/link";
import Anchor from ".";

test("uses Next.js Link with prefetch when a relative link", () => {
  const wrapper = mount(<Anchor href="/blog/example">Some children</Anchor>);

  const children = wrapper.children();

  expect(children.type()).toBe(Link);
  expect(children.prop("prefetch")).toBe(true);
});

test("uses a normal anchor tag when not a relative link", () => {
  const wrapper = mount(
    <Anchor href="https://google.com">Some children</Anchor>
  );

  const children = wrapper.children();

  expect(children.type()).toBe("a");
  expect(children.prop("prefetch")).toBe(undefined);
});
