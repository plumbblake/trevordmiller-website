import React from "react";
import { storiesOf } from "@storybook/react";
import Image from ".";

storiesOf("Image", module).add("Default", () => (
  <Image
    src="https://trevordmiller.com/static/todoist.jpg"
    description="Screenshot of a task manager"
  />
));
