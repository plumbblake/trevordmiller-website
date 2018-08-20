import React from "react";
import { storiesOf } from "@storybook/react";
import Accordian from ".";

storiesOf("Accordian", module).add("Default", () => (
  <Accordian summary="Some summary node">Some children node</Accordian>
));
