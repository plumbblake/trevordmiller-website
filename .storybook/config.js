import Router from "next/router";
import { addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

Router.router = { push: () => {}, prefetch: () => {} };

const infoOptions = {
  inline: true,
  source: true,
  header: false
};

addDecorator((story, context) => withInfo(infoOptions)(story)(context));

const req = require.context("../components", true, /.story\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
