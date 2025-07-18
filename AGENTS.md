Repository Guidelines for Agents
===============================

This repository contains a Playwright-based automation framework targeting the BlazeDemo demo website. The project uses Node.js and follows the Page Object Model.

Key structure:
- `Pages/` – Page Object classes used by tests.
- `tests/` – Test scripts.
- `data/` – JSON files with flight, passenger, and payment data.
- `reports/` and `test-results/` – Test output directories.

General Instructions
--------------------
1. **Do not run tests or execute code unless explicitly instructed**. The README specifies that tests should only be run when a prompt says so.
2. Keep any new tests or page objects consistent with the existing style:
   - Use Playwright's `@playwright/test` library.
   - Organize page interactions in Page Object classes under `Pages/`.
   - Store test data in JSON files within `data/`.
3. Default to headless browser execution in Playwright configs.
4. Use the provided npm scripts (`npm test`, `npm run test:ci`) to run tests when permitted.
5. Maintain the existing project structure and naming conventions.

Additional UI Guidelines
------------------------
If you add or modify the web interface:
1. Start by creating a simple landing page for the note-taking app, replacing the default page seen when the app launches.
2. Use a consistent blue and white color theme throughout the codebase.
3. Favor minimal setup and keep the design consistent across pages.
4. Create or reuse components whenever possible to promote reusability.

