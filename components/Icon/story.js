import React from "react";
import { storiesOf } from "@storybook/react";
import { colorValues, fontSizes, spacing } from "utils/theme";
import Icon, { icons } from ".";

storiesOf("Icon", module)
  .add("Default", () => (
    <div style={{ maxWidth: 100 }}>
      <Icon type="terminal" />
    </div>
  ))
  .add("Fill", () => (
    <div style={{ maxWidth: 100 }}>
      <Icon type="terminal" fill={colorValues.colors.blue} />
    </div>
  ))
  .add("Size", () => <Icon type="terminal" size={fontSizes.xxxlarge} />)
  .add("Types", () =>
    Object.keys(icons).map(iconKey => (
      <div
        key={iconKey}
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Icon type={iconKey} size={fontSizes.xlarge} />
        <p style={{ marginLeft: spacing.medium }}>{iconKey}</p>
      </div>
    ))
  );
