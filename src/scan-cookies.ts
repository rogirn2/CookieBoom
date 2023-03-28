import puppeteer from 'puppeteer';

export async function scanCookies(url: string): Promise<string[]> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const cookies = await page.cookies();
  const cookieNames = cookies.map(cookie => cookie.name);

  await browser.close();
  return cookieNames;
}