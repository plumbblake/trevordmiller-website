import Router from "next/router";
import { setOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";
import { addDecorator, configure } from "@storybook/react";

// Mock Next.js router

Router.router = { push: () => {}, prefetch: () => {} };

// Customize storybook options

setOptions({
  name: "Style Guide",
  url: "https://trevordmiller.com",
  showAddonPanel: false
});

// Globally decorate storybooks

addDecorator((story, context) =>
  withInfo({
    inline: true,
    source: true,
    header: false
  })(story)(context)
);

// Use all story.js files in feature folders

const req = require.context("../components", true, /.story\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
