import React from "react";
import { storiesOf } from "@storybook/react";
import { fontSizes } from "utils/theme";
import Icon, { icons } from ".";

const stories = storiesOf("Icon", module);

Object.keys(icons).forEach(iconKey => {
  stories.add(`${iconKey}`, () => (
    <Icon type={iconKey} size={fontSizes.xxxlarge} />
  ));
});
