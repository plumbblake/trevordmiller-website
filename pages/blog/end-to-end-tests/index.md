<em>How we are using headless Chrome to write end-to-end tests that don't drive you crazy</em>

<h1>What are end-to-end tests?</h1>
Tests written to check software functionality can be grouped into a few categories. Some of the most popular categories include:
<ul>
 	<li><strong>unit tests</strong> check input =&gt; output of self-contained functions.</li>
 	<li><strong>integration tests</strong> check that individual pieces of your app play nicely together.</li>
 	<li><strong>end-to-end tests </strong>check that entire features work from the user's perspective.</li>
</ul>
This last group of tests is what we are talking about in this post. They are sometimes known as acceptance tests or functional tests. I'll be referring to them as <strong>e2e tests</strong>.
<h1>Why write e2e tests?</h1>
The most important thing for any app is that it works for your users. Good e2e tests let you know when at least one piece of a feature (database, API, UI) isn't working as expected. This can be extremely valuable. It removes the need to manually check existing features in a browser whenever you make changes.
<h1>But e2e tests are horrible, disgusting, dreadful pieces of garbage</h1>
e2e tests have historically been awful. They tend to be sluggish and brittle. They tend to break easily and eat away at valuable developer time. Most teams either don't write them or write them with distaste, like forcefully taking a pill you think will be good for you. But there is a better way! <em>&lt;cue infomercial music&gt;</em>.
<h1>Using Puppeteer instead of Selenium</h1>
One of the most popular tools for e2e testing is Selenium, which is a tool for automating web browsers. Selenium sounds cool in theory: write one set of tests that run on all browsers and devices, woohoo! Jk. In practice, Selenium tests are slow, brittle, and costly. So, on Ropig we are using <a href="https://github.com/GoogleChrome/puppeteer" target="_blank" rel="noopener">Puppeteer</a> - the official headless Chrome library. A "headless" browser is just a browser that doesn't have a graphical user interface.
<h2>A Puppeteer test looks like this</h2>

```language-javascript
test('can logout', async () => {
  await page.click('[data-testid="userMenuButton"]')
  await page.waitForSelector('[data-testid="userMenuOpen"]')
  await page.click('[data-testid="logoutLink"]')
  await page.waitForSelector('[data-testid="userLoginForm"]')
})
```

In this case, we tap a drop-down menu, wait for it to open, tap a logout link, and wait for the login form to show. If any of these steps don't work, the test will fail.

<h2>A few more real examples pulled from the Ropig test suite</h2>

```language-javascript
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
      : {}
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

We are using <a href="https://facebook.github.io/jest/" target="_blank" rel="noopener">Jest</a> as our test runner, but you can use any testing tools you want with Puppeteer.

<h2>Headless mode</h2>
Here are what these tests look like when you run them in headless mode:

<img src="https://ropig.com/wp-content/uploads/2017/10/puppeteer-headless-275x300.png" alt="A screenshot of running end-to-end tests in headless mode" />

<h2>Debug mode</h2>
Here is a video of what these tests look like when you run them in debug mode. Debug mode opens a real browser and slows down each step so you can see what is happening:

<video src="https://ropig.com/wp-content/uploads/2017/10/puppeteer-debug.mp4" />

<h2>Some of the things I really like about Puppeteer</h2>
<ul>
 	<li>It's <strong>official</strong> from the Chrome team. This means it has a solid future. This also means it supports all modern JavaScript syntax available in Chrome (like async/await).</li>
 	<li>Puppeteer is<strong> headless</strong> so it can run without a visual browser; this makes running tests faster. Additionally, tests can run in Continuous Integration without extra setup or costs.</li>
 	<li>It has a <strong>simple API</strong> to do common things like typing in inputs, clicking etc.</li>
 	<li>Puppeteer <strong>can be used for any browser automation, </strong>not just testing.</li>
 	<li>It <strong>doesn't need to know anything about your stack.</strong> We are using Elixir and React, but we could just as well be using any other tools.</li>
</ul>
Note that Puppeteer only runs tests in Chrome. For many apps like Ropig, this is enough because we only support modern browsers which have minimal inconsistencies. If your app has a lot of device or browser specific code, you may still want Selenium. For everyone else, Puppeteer makes a lot of sense. :)
<h1>Tips for writing e2e tests</h1>
<h2>Tip 1: Test features, not implementation</h2>
The purpose of e2e tests is to fail when you break some expected user-facing functionality. When you have a failing test it means you either broke something that should be fixed, or the feature has changed (so the test needs to be updated). If you find yourself dealing with failing tests outside these two situations it means you have brittle tests. Brittle tests check the implementation of a feature, which ties you to the implementation. Instead, I highly recommend only testing the end result of the feature (what the user expects - <strong>the <em>behavior</em></strong>).
<h3>A bad example</h3>

```language-javascript
test('can logout', async () => {
  await page.click('#menu div > a')
  sleep 500
})
```

This is a brittle test because it relies on implementation details (arbitrary nested elements and wait times).

<h3>A good example</h3>

```language-javascript
test('can logout', async () => {
  await page.click('[data-testid="userMenuButton"]')
  await page.waitForSelector('[data-testid="userMenuOpen"]')
  await page.click('[data-testid="logoutLink"]')
  await page.waitForSelector('[data-testid="userLoginForm"]')
})
```

This test is less brittle because it uses test IDs and waits for events before proceeding.

<h3>Test IDs</h3>
We use test IDs like this to provide interaction as a user would with key elements. We use these as a contract between implementation and user interaction. The benefit of test IDs is that we could change the underlying implementation without breaking the test. For example, we could move the <em>logoutLink</em> test ID to a <em>button</em> tag instead of an <em>a</em> tag. Or we could switch our view rendering from Angular to React. The test would still pass because the log out feature still works.
<h2>Tip 2: Stick to the happy path features</h2>
Even with Puppeteer, e2e tests are still slower and more brittle than unit tests. We try to use unit tests where we can, especially edge cases. Then we add e2e tests only for the "happy path" of a user. This lets us know when something breaks for the majority use case.
<h2>Tip 3: Use async/await for asynchronous things</h2>
Using async/await is a great way to deal with chains of async events, which is most of what e2e testing is. async/await is cleaner than callback chains. And please, whatever you do, DON'T use arbitrary wait times. These tests will fail from race conditions with different network and computer speeds.
<h2>Tip 4: Use a fake data generator like faker</h2>
Using a fake data generator like <a href="https://www.npmjs.com/package/faker" target="_blank" rel="noopener">faker</a> ensures that your app is flexible. It guarantees your app has the same output each time it is run with the same input. This is in contrast to using a single test account for each test run that has a bunch of state sitting around, making your tests inconsistent. For example, in Ropig we use faker like this to create a random user for each test run:

```language-javascript
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

<h1>Summary</h1>
e2e testing has traditionally been difficult. Using headless Chrome has made e2e testing more reliable and simple here on the Ropig team. I recommend you try it out on your projects!
