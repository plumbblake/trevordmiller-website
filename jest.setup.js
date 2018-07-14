import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Router from "next/router";

configure({ adapter: new Adapter() });

Router.router = { push: () => {}, prefetch: () => {} };

global.console.warning = message => {
  throw new Error(message);
};

global.console.error = message => {
  throw new Error(message);
};
