import React from "react";
import { storiesOf } from "@storybook/react";
import Audio from ".";

const audioFile = "/static/spectrum-sample.mp3";

storiesOf("Audio", module).add("Default", () => (
  <div style={{ maxWidth: 500 }}>
    <Audio src={audioFile} />
  </div>
));
