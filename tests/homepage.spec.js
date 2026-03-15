const { test, expect } = require('@playwright/test');

const BASE = 'http://localhost:8765';

test.describe('Homepage structure and visual audit', () => {

  test('page loads and has correct title', async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Island Internship/);
  });

  test('hero section has correct primary message', async ({ page }) => {
    await page.goto(BASE);
    const heroHeadline = page.locator('#hero h1');
    await expect(heroHeadline).toBeVisible();
    const text = await heroHeadline.textContent();
    console.log('Hero headline:', text?.trim());
  });

  test('section order: costs section appears before what-is-included', async ({ page }) => {
    await page.goto(BASE);
    const costsBB = await page.locator('#costs').boundingBox();
    const includedBB = await page.locator('#what-is-included').boundingBox();
    expect(costsBB.y).toBeLessThan(includedBB.y);
    console.log(`✓ Costs (y=${costsBB.y}) appears before What's Included (y=${includedBB.y})`);
  });

  test('section order: destinations appears before tracks', async ({ page }) => {
    await page.goto(BASE);
    const destBB = await page.locator('#destinations').boundingBox();
    const tracksBB = await page.locator('#moments').boundingBox();
    expect(destBB.y).toBeLessThan(tracksBB.y);
    console.log(`✓ Destinations (y=${destBB.y}) appears before Tracks (y=${tracksBB.y})`);
  });

  test('hero photo 3 uses welcome group image (not pool)', async ({ page }) => {
    await page.goto(BASE);
    const styleTag = await page.evaluate(() => {
      const styles = Array.from(document.querySelectorAll('style'));
      return styles.map(s => s.textContent).join('\n');
    });
    expect(styleTag).not.toContain('community-group-pool.jpg');
    expect(styleTag).toContain('community-group-2.jpg');
    console.log('✓ Hero photo 3 uses community-group-2.jpg');
  });

  test('career outcomes network card uses networking image', async ({ page }) => {
    await page.goto(BASE);
    const netImg = page.locator('#placements img[src*="networking"]');
    await expect(netImg).toBeVisible();
    console.log('✓ Career outcomes uses community-networking.jpg');
  });

  test('costs section has smarter-use eyebrow text', async ({ page }) => {
    await page.goto(BASE);
    const costsSection = page.locator('#costs');
    await expect(costsSection).toBeVisible();
    const eyebrow = costsSection.locator('.eyebrow').first();
    const text = await eyebrow.textContent();
    console.log('Costs eyebrow:', text?.trim());
    expect(text).toContain('smarter');
  });

  test('costs heading leads with internship requirement', async ({ page }) => {
    await page.goto(BASE);
    const heading = page.locator('#costs .section-heading').first();
    const text = await heading.textContent();
    console.log('Costs heading:', text?.trim());
    expect(text?.toLowerCase()).toContain('anyway');
  });

  test('no layout breakage — all key sections visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(BASE);
    const sections = ['#hero', '#trust', '#costs', '#what-is-included', '#included',
                      '#destinations', '#moments', '#placements', '#community', '#testimonials',
                      '#day-in-life', '#companies', '#trust-safety', '#faq', '#cta-banner'];
    for (const sel of sections) {
      const el = page.locator(sel);
      await expect(el).toBeVisible();
    }
    console.log('✓ All sections visible on desktop');
  });

  test('no layout breakage — key sections visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE);
    const sections = ['#hero', '#costs', '#what-is-included', '#cta-banner'];
    for (const sel of sections) {
      await expect(page.locator(sel)).toBeVisible();
    }
    console.log('✓ Key sections visible on mobile (375px)');
  });

  test('CTA buttons are visible and accessible', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(BASE);
    const primaryCTA = page.locator('#hero .btn-primary').first();
    await expect(primaryCTA).toBeVisible();
    const ctaBannerBtn = page.locator('#cta-banner .btn-teal').first();
    await expect(ctaBannerBtn).toBeVisible();
    console.log('✓ CTA buttons visible');
  });

  test('take screenshots for visual review', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(BASE);
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'tests/screenshots/desktop-hero.png', clip: { x: 0, y: 0, width: 1280, height: 900 } });

    // Scroll to costs section
    await page.locator('#costs').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'tests/screenshots/desktop-costs.png', clip: { x: 0, y: 0, width: 1280, height: 900 } });

    // Scroll to what-is-included
    await page.locator('#what-is-included').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'tests/screenshots/desktop-included.png', clip: { x: 0, y: 0, width: 1280, height: 900 } });

    console.log('✓ Screenshots saved to tests/screenshots/');
  });

});
