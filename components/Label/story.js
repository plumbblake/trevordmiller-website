import React from "react";
import { storiesOf } from "@storybook/react";
import Label from ".";

storiesOf("Label", module).add("Default", () => <Label>Some string</Label>);
