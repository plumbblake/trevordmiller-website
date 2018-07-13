import React from "react";
import { storiesOf } from "@storybook/react";
import PreformattedText from ".";

storiesOf("PreformattedText", module).add("Default", () => (
  <PreformattedText>
    {`
        Some 
          string
    `}
  </PreformattedText>
));
