import Router from "next/router";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { addDecorator, configure } from "@storybook/react";

// Mocks

Router.router = { push: () => {}, prefetch: () => {} };

// Global options

setOptions({
  name: "Style Guide",
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

// Support for feature folder "story.js" files

const req = require.context("../components", true, /.story\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
