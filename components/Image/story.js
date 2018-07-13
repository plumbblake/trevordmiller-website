import React from "react";
import { storiesOf } from "@storybook/react";
import Image from ".";

storiesOf("Image", module).add("Default", () => (
  <div style={{ maxWidth: 500 }}>
    <Image
      src="/static/todoist.jpg"
      description="Screenshot of a task manager"
    />
  </div>
));
