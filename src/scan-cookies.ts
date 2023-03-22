import puppeteer from 'puppeteer';

async function scanCookies() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(process.env.SITE_URL);

  const cookies = await page.cookies();
  console.log(cookies);

  await browser.close();
}

scanCookies();