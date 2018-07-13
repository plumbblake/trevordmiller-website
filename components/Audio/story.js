import React from "react";
import { storiesOf } from "@storybook/react";
import Audio from ".";

storiesOf("Audio", module).add("Default", () => (
  <div style={{ maxWidth: 500 }}>
    <Audio src="/static/spectrum-sample.mp3" />
  </div>
));
