import Router from "next/router";
import { injectGlobal, ServerStyleSheet } from "styled-components";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { addDecorator, configure } from "@storybook/react";
import globalStyles from "utils/globalStyles";
import { spacing } from "utils/theme";

// Mocks

Router.router = { push: () => {}, prefetch: () => {} };

window.ga = () => {};

// Global styles

injectGlobal`
  ${globalStyles}
`;

// Global options

setOptions({
  name: "trevordmiller.com",
  url: "https://trevordmiller.com",
  showAddonPanel: false
});

// Global decorators

addDecorator((story, context) =>
  withInfo({
    inline: true,
    source: true,
    header: false
  })(story)(context)
);

addDecorator(story => (
  <section style={{ padding: spacing.large }}>{story()}</section>
));

// Support for feature folder "story.js" files

const req = require.context("../components", true, /.story\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
