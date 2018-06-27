# Contributing

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Run `npm run upgrade` to upgrade dependencies
- Run `npm run storybook` and open `localhost:9001` to develop isolated components
- Run `npm run dev` and open `localhost:3000` to develop the full application
- When you commit, `npm run precommit` runs automatically to ensure things are working as expected with your changes
- Submit a pull request to `master`
  - Continuous Integration runs `npm run verify` automatically to ensure things are working as expected with the entire codebase
  - Continuous Deployment runs automatically to deploy a unique URL for your pull request for review
- An admin releases your changes
  - Merges your pull request into `master`
  - Stages changes with `npm run deploy` to make sure everything looks good for production
  - Links https://trevordmiller.com to this ^ latest deployment with `npm run alias`

---

## Guidelines

### Feature folders

All items in `utils`, `components`, and `pages` should be feature folders. A feature folder looks like this:

```
someThing/
  index.js
  test.js
  story.js
  utils/
  components/
```

- The only required file is `index.js`, all others can optionally be added when they provide value
- `index.js` is the source code
- `test.js` can be added to write tests for `index.js`
- `story.js` can be added to write UI component stories for `index.js`
- `utils/` can be added to break up utility module logic into smaller pieces (each as a feature folder as well)
- `components/` can be added to break up UI components into smaller pieces (each as a feature folder as well)

### Testing

Unit tests and end-to-end tests should be added where they provide value.

---

## Integrations

- Work tracking: [GitHub Issues](https://github.com/trevordmiller/trevordmiller-website/issues)
- Continuous Integration: [Travis CI GitHub app](https://github.com/settings/installations/220480)
- Continuous Deployment: [Zeit Now GitHub app](https://github.com/settings/installations/220458)
- Hosting: [Zeit Now](https://zeit.co)
- Error tracking: [Sentry](https://sentry.io/trevordmiller/trevordmiller-website-1b/)
- Analytics: [Google Analytics](https://analytics.google.com)
- Domain: [Hover](https://www.hover.com/control_panel/domain/trevordmiller.com)
