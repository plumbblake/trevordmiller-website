import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from ".";

storiesOf("Avatar", module).add("Default", () => (
  <div style={{ maxWidth: 100 }}>
    <Avatar
      src="https://trevordmiller.com/static/avatar.jpg"
      description="Trevor D. Miller avatar"
    />
  </div>
));
