/* Here’s an **easy-to-understand explanation** of the **Playwright Test “visual snapshots” feature** from the official documentation, explained from start to finish:

---

# 📸 **What are Snapshots in Playwright?**

Playwright Test lets you **capture screenshots or other outputs** and save them as “reference snapshots.”
Later, when tests run again, Playwright **compares the current output with those saved snapshots**.
If there’s a difference, the test fails — catching visual regressions or unexpected changes. ([Playwright][1])

---

## 🧩 **1. Taking Screenshots**

### 📌 Basic usage

```js
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveScreenshot();
});
```

* This tells Playwright:
  → “Take a screenshot of the current page.”
* On the **first run**, no reference image exists yet, so Playwright will generate one. ([Playwright][1])

---

## 🧠 **2. How First Run Works**

When you run a snapshot test the first time:

```
Error: A snapshot doesn't exist at example.spec.ts-snapshots/example-test-1-chromium-darwin.png, writing actual.
```

* Playwright tries to find a snapshot file in a folder like:

  ```
  example.spec.ts-snapshots/
  ```
* Because it didn’t exist yet, it **generates and saves a screenshot** there.
* You should then **commit this file to your version control system** (like Git). ([Playwright][1])

---

## 📊 **3. Comparing Screenshots on Subsequent Runs**

On later test runs:

* Playwright will compare your current screenshot with the saved reference image.
* If they **match**, the test passes.
* If they **don’t match**, the test fails — meaning a **visual change** occurred. ([Playwright][1])

---

## 🧰 **4. Screenshot Naming Rules**

Screenshot files include:

* A generated name based on your test name
* Browser name (like `chromium`, `firefox`, etc.)
* Platform (like `darwin`, `win32`)

Example:

```
example-test-1-chromium-darwin.png
```

This helps account for differences in rendering between browsers and operating systems. ([Playwright][1])

---

## 🔄 **5. Updating Snapshots**

If your UI changed on purpose (e.g., new design):

You need to **update the reference snapshots**:

```sh
npx playwright test --update-snapshots
```

This will regenerate the stored snapshots with the new visuals. ([Playwright][1])

---

## ⚙️ **6. Options You Can Use**

Playwright’s snapshot comparisons have options you can configure:

---

### 🔸 `maxDiffPixels`

Controls sensitivity of the comparison.

```js
await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
```

* Allows up to 100 pixels to differ before failing.
* Helps avoid failures from small, harmless rendering differences. ([Playwright][1])

---

### 🔸 `stylePath`

Applies custom CSS before taking screenshots.

Example (`screenshot.css`):

```css
iframe {
  visibility: hidden;
}
```

```js
await expect(page).toHaveScreenshot({ stylePath: 'screenshot.css' });
```

* Useful to hide dynamic content (ads, animations) before comparing. ([Playwright][1])

---

## 📌 **7. Non-Image Snapshots**

You can also snapshot **text or other data types** — not just screenshots.

Example for text:

```js
expect(await page.textContent('.hero__title'))
  .toMatchSnapshot('hero.txt');
```

* Playwright auto-detects the content type (text vs image).
* Stored just like screenshot snapshots in the same directory structure. ([Playwright][1])

---

## 🗂 **8. Where Snapshots Are Stored**

Snapshots are stored in a folder named after your test file:

```
my.spec.ts-snapshots/
```

* You should **commit this folder** in version control.
* This way CI runs and other team members use the same expected snapshots. ([Playwright][1])

---

## 💡 Summary (Easy Words)

| Feature              | What it does                            |                   |
| -------------------- | --------------------------------------- | ----------------- |
| `toHaveScreenshot()` | Takes a screenshot for comparison       |                   |
| First run            | Creates baseline screenshot file        |                   |
| Subsequent runs      | Compares current screenshot vs baseline |                   |
| `--update-snapshots` | Regenerates expected screenshots        |                   |
| `maxDiffPixels`      | Controls allowed differences            |                   |
| `stylePath`          | Applies CSS before screenshot           |                   |
| Text snapshots       | Compare text outputs too                | ([Playwright][1]) |

---

## 🚀 When You’d Use This

This is meant for **visual regression testing** — to catch UI bugs that functional tests might not catch, like:

✔ Unintended layout changes
✔ Misplaced elements
✔ Styling regressions after UI updates

---

If you’d like, I can now explain how to write a **snapshot test that only takes a screenshot of a specific element instead of the whole page** — it’s very common in real UI testing!

[1]: https://playwright.dev/docs/test-snapshots?utm_source=chatgpt.com "Visual comparisons | Playwright"
 */