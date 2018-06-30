# Contributing

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Run `npm run upgrade` to upgrade dependencies
- Run `npm run storybook` and open `localhost:9001` to develop components in an isolated environment
- Run `npm run dev` and open `localhost:3000` to develop the full application
- When you commit, `npm run precommit` runs automatically to ensure things are working as expected with your changes
- Submit a pull request to `master`
  - Continuous Integration runs `npm run verify` automatically to ensure things are working as expected with the entire codebase
  - Continuous Deployment runs automatically to deploy a unique URL for your pull request for review
- An admin releases your changes
  - Merges your pull request into `master`
  - Stages changes with `npm run stage` to make sure everything looks good for production
  - Points the production `https://trevordmiller.com` domain to the latest staged deployment with `npm run alias`

## Organization

The project is organized into feature folders. A feature folder has items in it:

- `index.js`: entry point source code
- `test.js`: unit tests
- `story.js`: isolated UI rendering
- `readme.md`: usage documentation
- `contributing.md`: contributing documentation
- `utils/`: utility modules
- `components/`: UI components

The only required item in a feature folder is `index.js`. All others can optionally be added when they provide value.

This feature folder pattern is recursive. Meaning each `utils/` and `components/` is also a feature folder, all the way up to the root.

The root is also a feature folder, but has some differences:

- ~~`index.js`~~: omitted since `pages/index.js` is the root entry point
- `test.js`: end-to-end tests instead of unit tests
- `pages/`: route-level components
- `static/`: static assets like images, videos, audio etc.
- Other: Tooling

## Stack

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Packages: [npm](https://www.npmjs.com)
- Framework: [Next.js](https://nextjs.org)
- UI: [React](https://reactjs.org)
- UI dev environment: [Storybook](https://storybook.js.org)
- Linting: [ESLint](https://eslint.org)
- Testing: [Jest](http://jestjs.io) + [Enzyme](http://airbnb.io/enzyme) + [Puppeteer](https://pptr.dev)
- Types: [PropTypes](https://www.npmjs.com/package/prop-types)
- Formatting: [Prettier](https://prettier.io)
- Colors: [Nova](https://trevordmiller.com/projects/nova)

## Integrations

- Work tracking: [GitHub Issues](https://github.com/trevordmiller/trevordmiller-website/issues)
- Continuous Integration: [Travis CI](https://travis-ci.com) + [GitHub app](https://github.com/settings/installations)
- Continuous Deployment + Hosting: [Zeit Now](https://zeit.co/dashboard) + [GitHub app](https://github.com/settings/installations)
- Error tracking: [Sentry](https://sentry.io)
- Domain: [Hover](https://www.hover.com)
- Analytics: [Google Analytics](https://analytics.google.com)
