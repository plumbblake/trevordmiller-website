import puppeteer from "puppeteer";

jest.setTimeout(100000);

const baseUrl = "http://localhost:3000";
const routes = {
  home: `${baseUrl}`
};

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
          devtools: true
        }
      : {}
  );
  page = await browser.newPage();
});

test("can join email list", async () => {
  await page.goto(routes.home);
  await page.waitForSelector('[data-testid="joinEmailListButton"]');
  await page.click('[data-testid="joinEmailListButton"]');
  await page.waitForSelector('[data-testid="joinEmailListInput"]');
  await page.type(
    '[data-testid="joinEmailListInput"]',
    "trevordmiller@icloud.com"
  );
  // await page.click('[data-testid="joinEmailListSubmit"]');
  // await page.waitForSelector('[data-testid="joinEmailList"]');
});

afterAll(() => {
  if (!process.env.DEBUG) {
    browser.close();
  }
});
