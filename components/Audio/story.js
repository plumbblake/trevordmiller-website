import React from "react";
import { storiesOf } from "@storybook/react";
import Audio from ".";

storiesOf("Audio", module).add("Default", () => (
  <Audio src="https://trevordmiller.com/static/spectrum-sample.mp3" />
));
