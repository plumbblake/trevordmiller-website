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
          devtools: true
        }
      : {}
  );
  page = await browser.newPage();
});

const appUrl = process.env.APP_URL || "http://localhost:3000";

const routes = {
  home: `${appUrl}`
};

const timestamp = new Date().getUTCMilliseconds();

const user = {
  email: `trevordmillertest+${timestamp}@gmail.com`
};

test("can join email list", async () => {
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

afterAll(() => {
  if (browser && !process.env.DEBUG) {
    browser.close();
  }
});
