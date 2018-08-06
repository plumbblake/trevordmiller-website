import puppeteer from "puppeteer";

if (process.env.DEBUG) {
  jest.setTimeout(15000);
}

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 50,
          devtools: true,
          dumpio: true
        }
      : {}
  );

  page = await browser.newPage();

  page.on("error", e => {
    throw new Error(e);
  });

  page.on("pageerror", e => {
    throw new Error(e);
  });

  page.on("console", message => {
    if (["error", "warning"].includes(message._type)) {
      throw new Error(message._text);
    }
  });
});

const appUrl = process.env.APP_URL || "http://localhost:3000";

const isProduction = appUrl === "http://trevordmiller.com";

const routes = {
  home: `${appUrl}`,
  courses: `${appUrl}/courses`,
  course: `${appUrl}/courses/real-world-git`,
  blog: `${appUrl}/blog`,
  blogPost: `${appUrl}/blog/rebuilding-my-website`,
  projects: `${appUrl}/projects`,
  resume: `${appUrl}/resume`,
  about: `${appUrl}/about`,
  follow: `${appUrl}/follow`
};

const timestamp = new Date().valueOf();

const user = {
  email: `trevordmillertest+${timestamp}@gmail.com`
};

describe("core", () => {
  test("can join courses", async () => {
    await page.goto(routes.course);

    const button = '[data-testid="joinCourseButton"]';
    await page.waitForSelector(button);
    await page.click(button);

    expect(page.url()).toContain("https://sso.teachable.com");
  });

  if (isProduction) {
    test("can join the email list", async () => {
      await page.goto(routes.home);

      const button = '[data-testid="joinEmailListButton"]';
      await page.waitForSelector(button);
      await page.click(button);

      const input = '[data-testid="joinEmailListInput"]';
      await page.waitForSelector(input);
      await page.type(input, user.email);

      const submit = '[data-testid="joinEmailListSubmit"]';
      await page.waitForSelector(submit);
      await page.click(submit);

      const mailchimp = ".bodyContent";
      await page.waitForSelector(mailchimp);
      const mailchimpContent = await page.$eval(mailchimp, el => el.innerText);
      expect(mailchimpContent).toContain("Subscription Confirmed");
    });

    test("redirects http to https", async () => {
      await page.goto("http://trevordmiller.com");
      expect(page.url()).toContain("https://trevordmiller.com");
    });

    test("redirects www to non-www", async () => {
      await page.goto("https://www.trevordmiller.com");
      expect(page.url()).toContain("https://trevordmiller.com");
    });
  }
});

describe("routes", () => {
  const testRoutes = () => {
    for (const route of Object.keys(routes)) {
      test(`can load ${route} route`, async () => {
        await page.goto(routes[route]);
        const content = '[data-testid="main"]';
        await page.waitForSelector(content);
      });
    }
  };

  testRoutes();
});

afterAll(() => {
  if (browser && !process.env.DEBUG) {
    browser.close();
  }
});
