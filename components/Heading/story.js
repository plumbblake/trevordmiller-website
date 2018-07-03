import React from "react";
import { storiesOf } from "@storybook/react";
import Heading, { levels } from ".";

storiesOf("Heading", module)
  .add("Default", () => <Heading level={1}>Some string</Heading>)
  .add("Levels", () =>
    levels.map(level => (
      <Heading key={level} level={parseInt(level, 10)}>
        Some string
      </Heading>
    ))
  );
