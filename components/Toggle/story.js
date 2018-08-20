import React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from ".";

storiesOf("Toggle", module).add("Default", () => (
  <Toggle>
    {({ isOpen, handleToggle }) => (
      <div>
        <button onClick={handleToggle}>Tap to toggle</button>
        <div>{isOpen ? "open" : "closed"}</div>
      </div>
    )}
  </Toggle>
));
