import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module)
  .add("Default", () => <Button>Some text</Button>)
  .add("Secondary", () => <Button type="secondary">Some text</Button>)
  .add("Small", () => <Button size="small">Some text</Button>);
