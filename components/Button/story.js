import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

storiesOf("Button", module)
  .add("Default", () => <Button>Some string</Button>)
  .add("Secondary", () => <Button type="secondary">Some string</Button>)
  .add("Small", () => <Button size="small">Some string</Button>);
