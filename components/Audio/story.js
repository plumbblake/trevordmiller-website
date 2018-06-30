import React from "react";
import { storiesOf } from "@storybook/react";
import Audio from ".";

const exampleFilePath = "https://trevordmiller.com/static/spectrum-sample.mp3";

storiesOf("Audio", module).add("Default", () => (
  <Audio src={exampleFilePath} />
));
