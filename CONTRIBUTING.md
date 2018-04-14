# Contributing

* Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
* Create a feature branch off of `master`
* Run `npm install` to install libraries
* Run `npm run dev` to develop
* _When you commit, `npm run precommit` runs automatically to ensure things are working as expected with your changes_
* Submit a pull request to `master`
* _In Continuous Integration `npm run verify` runs automatically to ensure things are working as expected with the entire codebase_
* An admin releases your changes
  * Merges your pull request into `master`
  * Stages changes with `npm run stage`
  * Links https://trevordmiller.com to the latest deployment with `npm run release`
