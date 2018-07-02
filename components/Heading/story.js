import React from "react";
import { storiesOf } from "@storybook/react";
import Heading, { levels } from ".";

const stories = storiesOf("Heading", module);

levels.forEach(level => {
  stories.add(`Level ${level}`, () => (
    <Heading level={parseInt(level, 10)}>Some text</Heading>
  ));
});
