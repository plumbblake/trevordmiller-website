import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from ".";

storiesOf("Avatar", module).add("Default", () => (
  <div style={{ maxWidth: 100 }}>
    <Avatar src="/static/avatar.jpg" description="Trevor D. Miller avatar" />
  </div>
));
