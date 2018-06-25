# Contributing

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Run `npm run upgrade` to upgrade dependencies
- Run `npm run storybook` and open `localhost:9001` to develop isolated components
- Run `npm run dev` and open `localhost:3000` to develop the full application
- _When you commit, `npm run precommit` runs automatically to ensure things are working as expected with your changes_
- Submit a pull request to `master`
- _In Continuous Integration `npm run verify` runs automatically to ensure things are working as expected with the entire codebase_
- An admin releases your changes
  - Merges your pull request into `master`
  - Stages changes with `npm run deploy` to make sure everything looks good for production
  - Links https://trevordmiller.com to the latest deployment with `npm run alias`

## Integrations

- Work tracking: [GitHub Issues](https://github.com/trevordmiller/trevordmiller-website/issues)
- Continuous Integration: [Travis CI](https://travis-ci.org/trevordmiller/trevordmiller-website)
- Error tracking: [Sentry](https://sentry.io/trevordmiller/trevordmiller-website-1b/)
- Analytics: [Google Analytics](https://analytics.google.com)
- Hosting: [Zeit now](https://zeit.co)
- Domain: [Hover](https://www.hover.com/control_panel/domain/trevordmiller.com)
