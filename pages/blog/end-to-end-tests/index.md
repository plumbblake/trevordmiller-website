import Video from '../../../components/Video'

# What are end-to-end tests?

Tests written to check software functionality can be grouped into a few categories. Some of the most popular categories include:

* **unit tests** check input => output of self-contained functions.
* **integration tests** check that individual pieces of your app play nicely together.
* **end-to-end tests **check that entire features work from the user's perspective.

This last group of tests is what we are talking about in this post. They are sometimes known as acceptance tests or functional tests. I'll be referring to them as **e2e tests**.

# Why write e2e tests?

The most important thing for any app is that it works for your users. Good e2e tests let you know when at least one piece of a feature (database, API, UI) isn't working as expected. This can be extremely valuable. It removes the need to manually check existing features in a browser whenever you make changes.

# But e2e tests are horrible, disgusting, dreadful pieces of garbage

e2e tests have historically been awful. They tend to be sluggish and brittle. They tend to break easily and eat away at valuable developer time. Most teams either don't write them or write them with distaste, like forcefully taking a pill you think will be good for you. But there is a better way! _cue infomercial music_.

# Using Puppeteer instead of Selenium

One of the most popular tools for e2e testing is Selenium, which is a tool for automating web browsers. Selenium sounds cool in theory: write one set of tests that run on all browsers and devices, woohoo! Jk. In practice, Selenium tests are slow, brittle, and costly. I recommend using headless chrome instead, with the most popular/stable headless Chrome option being [Puppeteer](https://github.com/GoogleChrome/puppeteer) - the official headless Chrome library. A "headless" browser is just a browser that doesn't have a graphical user interface.

## A Puppeteer test looks like this

```javascript
test('can logout', async () => {
  await page.click('[data-testid="userMenuButton"]')
  await page.waitForSelector('[data-testid="userMenuOpen"]')
  await page.click('[data-testid="logoutLink"]')
  await page.waitForSelector('[data-testid="userLoginForm"]')
})
```

In this case, we tap a drop-down menu, wait for it to open, tap a logout link, and wait for the login form to show. If any of these steps don't work, the test will fail.

## A few more real examples pulled from a test suite

```javascript
import faker from 'faker'
import puppeteer from 'puppeteer'

const appUrlBase = 'http://localhost:4000'
const routes = {
  public: {
    register: `${appUrlBase}/register`,
    login: `${appUrlBase}/login`,
    noMatch: `${appUrlBase}/asdf`,
  },
  private: {
    events: appUrlBase,
    alerts: `${appUrlBase}/alerts`,
    services: `${appUrlBase}/services`,
    team: `${appUrlBase}/team`,
  },
  admin: {
    templates: `${appUrlBase}/templates`,
  },
}

const user = {
  email: faker.internet.email(),
  password: 'test',
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  mobile: faker.phone.phoneNumber(),
  companyName: faker.company.companyName(),
}

let browser
let page
beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {},
  )
  page = await browser.newPage()
})

describe('private routes', () => {
  test('redirects to login route when logged out', async () => {
    await page.goto(routes.private.events)
    await page.waitForSelector('[data-testid="userLoginForm"]')
  })
})

describe('registration', () => {
  test('can get to register route from login form', async () => {
    await page.click('[data-testid="registerLink"]')
    await page.waitForSelector('[data-testid="userAccountForm"]')
  })

  test('can create new user account', async () => {
    await page.goto(routes.public.register)
    await page.waitForSelector('[data-testid="userAccountForm"]')
    await page.click('[data-testid="userRegisterInputWithEmail"]')
    await page.type(user.email)
    await page.click('[data-testid="userRegisterInputWithPassword"]')
    await page.type(user.password)
    await page.click('[data-testId="userAccountSubmitButton"]')
    await page.waitForSelector('[data-testid="userSettingsForm"]')
  })

  test('logs in and redirects to events route when registration is complete', async () => {
    await page.waitForSelector('[data-testid="events"]')
  })
})

describe('logout', () => {
  test('can logout', async () => {
    await page.waitForSelector('[data-testid="userMenuButton"]')
    await page.click('[data-testid="userMenuButton"]')
    await page.waitForSelector('[data-testid="userMenuOpen"]')
    await page.click('[data-testid="logoutLink"]')
    await page.waitForSelector('[data-testid="userLoginForm"]')
  })
})

describe('login', () => {
  test('can login', async () => {
    await page.waitForSelector('[data-testid="userLoginInputWithEmail"]')
    await page.click('[data-testid="userLoginInputWithEmail"]')
    await page.type(user.email)
    await page.click('[data-testid="userLoginInputWithPassword"]')
    await page.type(user.password)
    await page.click('[data-testid="userLoginSubmitButton"]')
    await page.waitForSelector('[data-testid="events"]')
  })
})

describe('on call', () => {
  test('starts off call', async () => {
    await page.waitForSelector('[data-testid="offCallStatus"]')
  })

  test('can toggle on call status', async () => {
    await page.click('[data-testid="onCallButton"]')
    await page.waitForSelector('[data-testid="onCallStatus"]')
  })

  test('shows on call list with alerts', async () => {
    await page.goto(routes.private.alerts)
    await page.waitForSelector('[data-testid="someOnCallButton"]')
    await page.click('[data-testid="someOnCallButton"]')
    await page.waitForSelector('[data-testid="onCallBadge"]')
  })

  test('shows on call badge in team list', async () => {
    await page.goto(routes.private.team)
    await page.waitForSelector('[data-testid="onCallBadge"]')
  })
})

describe('errors', () => {
  test(`shows 404 message when route doesn't exist`, async () => {
    await page.goto(routes.public.noMatch)
    await page.waitForSelector('[data-testid="noMatch"]')
  })
})

describe('admin', () => {
  test('redirects to root route when not an admin', async () => {
    await page.goto(routes.admin.templates)
    await page.waitForSelector('[data-testid="events"]')
  })
})

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close()
  }
})
```

We are using [Jest](https://facebook.github.io/jest/) as our test runner, but you can use any testing tools you want with Puppeteer.

## Headless mode

Here are what these tests look like when you run them in headless mode:

![A screenshot of running end-to-end tests in headless mode](/static/puppeteer-headless-tests.png)

## Debug mode

Here is a video of what these tests look like when you run them in debug mode. Debug mode opens a real browser and slows down each step so you can see what is happening:

<Video src="/static/puppeteer-debug-tests.mp4" />

## Some of the things I really like about Puppeteer

* It's **official** from the Chrome team. This means it has a solid future. This also means it supports all modern JavaScript syntax available in Chrome (like async/await).
* Puppeteer is** headless** so it can run without a visual browser; this makes running tests faster. Additionally, tests can run in Continuous Integration without extra setup or costs.
* It has a **simple API** to do common things like typing in inputs, clicking etc.
* Puppeteer **can be used for any browser automation, **not just testing.
* It **doesn't need to know anything about your stack.** We are using Elixir and React, but we could just as well be using any other tools.

Note that Puppeteer only runs tests in Chrome. For many apps, this is enough because we only support modern browsers which have minimal inconsistencies. If your app has a lot of device or browser specific code, you may still want Selenium. For everyone else, Puppeteer makes a lot of sense. :)

# Tips for writing e2e tests

## Tip 1: Test features, not implementation

The purpose of e2e tests is to fail when you break some expected user-facing functionality. When you have a failing test it means you either broke something that should be fixed, or the feature has changed (so the test needs to be updated). If you find yourself dealing with failing tests outside these two situations it means you have brittle tests. Brittle tests check the implementation of a feature, which ties you to the implementation. Instead, I highly recommend only testing the end result of the feature (what the user expects - **the _behavior_**).

### A bad example

```javascript
test('can logout', async () => {
  await page.click('#menu div > a')
  sleep 500
})
```

This is a brittle test because it relies on implementation details (arbitrary nested elements and wait times).

### A good example

```javascript
test('can logout', async () => {
  await page.click('[data-testid="userMenuButton"]')
  await page.waitForSelector('[data-testid="userMenuOpen"]')
  await page.click('[data-testid="logoutLink"]')
  await page.waitForSelector('[data-testid="userLoginForm"]')
})
```

This test is less brittle because it uses test IDs and waits for events before proceeding.

### Test IDs

We use test IDs like this to provide interaction as a user would with key elements. We use these as a contract between implementation and user interaction. The benefit of test IDs is that we could change the underlying implementation without breaking the test. For example, we could move the _logoutLink_ test ID to a *button* tag instead of an *a* tag. Or we could switch our view rendering from Angular to React. The test would still pass because the log out feature still works.

## Tip 2: Stick to the happy path features

Even with Puppeteer, e2e tests are still slower and more brittle than unit tests. We try to use unit tests where we can, especially edge cases. Then we add e2e tests only for the "happy path" of a user. This lets us know when something breaks for the majority use case.

## Tip 3: Use async/await for asynchronous things

Using async/await is a great way to deal with chains of async events, which is most of what e2e testing is. async/await is cleaner than callback chains. And please, whatever you do, DON'T use arbitrary wait times. These tests will fail from race conditions with different network and computer speeds.

## Tip 4: Use a fake data generator like faker

Using a fake data generator like [faker](https://www.npmjs.com/package/faker) ensures that your app is flexible. It guarantees your app has the same output each time it is run with the same input. This is in contrast to using a single test account for each test run that has a bunch of state sitting around, making your tests inconsistent. For example, you can use faker like this to create a random user for each test run:

```javascript
import faker from 'faker'

const user = {
  email: faker.internet.email(),
  password: 'test',
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  mobile: faker.phone.phoneNumber(),
  companyName: faker.company.companyName(),
}
```

# Summary

e2e testing has traditionally been difficult. Using headless Chrome has made e2e testing more reliable and simple. I recommend you try it out on your projects!
