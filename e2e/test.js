import puppeteer from "puppeteer";
import Parser from "rss-parser";
import { blogPosts, blogPostKeys } from "../pages/blog";

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
    const pageUrl = page.url();

    const isLocalPage = pageUrl.includes("http://localhost");
    const isStagingPage = pageUrl.includes("now.sh");
    const isProductionPage = pageUrl.includes("trevordmiller.com");

    const isOwnUrl = isLocalPage || isStagingPage || isProductionPage;

    const isImportantConsoleType = ["error", "warning"].includes(message._type);

    if (isOwnUrl && isImportantConsoleType) {
      throw new Error(message._text);
    }
  });
});

const appUrl = process.env.APP_URL || "http://localhost:3000";
const isLocal = appUrl === "http://localhost:3000";
const isProduction = appUrl === "https://trevordmiller.com";

const routes = {
  ui: {
    home: `${appUrl}`,
    courses: `${appUrl}/courses`,
    course: `${appUrl}/courses/real-world-git`,
    blog: `${appUrl}/blog`,
    blogPost: `${appUrl}/blog/rebuilding-my-website`,
    projects: `${appUrl}/projects`,
    project: `${appUrl}/projects/nova`,
    resume: `${appUrl}/resume`,
    about: `${appUrl}/about`,
    follow: `${appUrl}/follow`
  },
  data: {
    rssFeed: `${appUrl}/blog/feed`
  }
};

const timestamp = new Date().valueOf();

const user = {
  email: `trevordmillertest+${timestamp}@gmail.com`
};

describe(`e2e tests on ${appUrl}`, () => {
  describe("routes", () => {
    const testUiRoutes = () => {
      for (const route of Object.keys(routes.ui)) {
        test(`can load ${route} route`, async () => {
          await page.goto(routes.ui[route]);
          const content = '[data-testid="main"]';
          await page.waitForSelector(content);
        });
      }
    };

    testUiRoutes();

    test("can use rss feed route", async () => {
      const parser = new Parser();
      const feed = await parser.parseURL(routes.data.rssFeed);
      const mostRecentRssItem = feed.items[0];
      const mostRecentBlogPost = blogPosts[blogPostKeys[0]];

      expect(feed.title).toBe("Trevor D. Miller blog");
      expect(mostRecentRssItem.creator).toBe("Trevor D. Miller");
      expect(mostRecentRssItem.title).toBe(mostRecentBlogPost.title);
      expect(mostRecentRssItem.link).toBe(
        `https://trevordmiller.com/blog/${blogPostKeys[0]}`
      );
      expect(mostRecentRssItem.content).toBe(mostRecentBlogPost.description);
      expect(mostRecentRssItem.categories).toEqual(
        mostRecentBlogPost.tags.map(tag => tag.label)
      );
    });
  });

  describe("subscribing", () => {
    if (isProduction) {
      test("can join the email list", async () => {
        await page.goto(routes.ui.home);

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
        const mailchimpContent = await page.$eval(
          mailchimp,
          el => el.innerText
        );
        expect(mailchimpContent).toContain("Subscription Confirmed");
      });
    }

    test("can join courses", async () => {
      await page.goto(routes.ui.course);

      const button = '[data-testid="joinCourseButton"]';
      await page.waitForSelector(button);
      await page.click(button);

      expect(page.url()).toContain("https://sso.teachable.com");
    });
  });

  describe("hosting", () => {
    if (isProduction) {
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

  describe("performance", () => {
    if (!isLocal) {
      test("loads in less than 1 second on current network", async () => {
        await page.goto(routes.ui.home);
        const metrics = await page.metrics();
        const browserTasksSeconds = metrics.TaskDuration;
        expect(browserTasksSeconds).toBeLessThan(1.0);
      });

      test(
        "loads in less than 3 seconds on throttled slower network",
        async () => {
          const client = await page.target().createCDPSession();
          await client.send("Network.emulateNetworkConditions", {
            offline: false,
            downloadThroughput: (1.5 * 1024 * 1024) / 8,
            uploadThroughput: (750 * 1024) / 8,
            latency: 40
          });

          await page.goto(routes.ui.home);
          const metrics = await page.metrics();
          const browserTasksSeconds = metrics.TaskDuration;
          expect(browserTasksSeconds).toBeLessThan(3.0);
        },
        15000
      );
    }
  });
});

afterAll(() => {
  if (browser && !process.env.DEBUG) {
    browser.close();
  }
});
