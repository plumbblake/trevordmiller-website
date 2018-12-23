import React from "react";
import { mount } from "enzyme";
import tags from "../../utils/tags";
import Tags from "../Tags";
import Icon from "../Icon";
import Image from "../Image";
import Button from "../Button";
import Teaser from ".";

const imageFile = "/static/real-world-git.png";

test("has tags when there are tags", () => {
  const wrapper = mount(<Teaser body="Some string" tags={[tags.inProgress]} />);
  const tagsNode = wrapper.find(Tags);

  expect(tagsNode.exists()).toBe(true);
});

test("has icon when visual is an icon name", () => {
  const wrapper = mount(<Teaser body="Some string" visual="suit" />);
  const icon = wrapper.find(Icon);

  expect(icon.exists()).toBe(true);
});

test("has image when visual is an image file", () => {
  const wrapper = mount(<Teaser body="Some string" visual={imageFile} />);
  const image = wrapper.find(Image);

  expect(image.exists()).toBe(true);
});

test("has button when there are links", () => {
  const wrapper = mount(
    <Teaser
      body="Some string"
      links={[
        {
          description: "Some string",
          href: `/example`
        }
      ]}
    />
  );
  const button = wrapper.find(Button);

  expect(button.exists()).toBe(true);
});
