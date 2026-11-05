# Test Plan — Automation Exercise

**Status:** Draft for review; execution not started  
**Target:** `https://automationexercise.com/`  
**Automation framework:** Cypress (project configuration defaults to target above)

## 1. Objectives

- Validate public website navigation and high-value user journeys.
- Cover published website practice scenarios and add traceable negative/boundary cases.
- Create a repeatable Cypress suite only after the user reviews and approves the case package.
- Report defects with reproducible steps and distinguish application, environment, and automation failures.

## 2. Coverage

Use the 26 published UI scenarios on `/test_cases` as the baseline, expanded to 74 proposed cases in the catalog. The page-based, ID-mapped inventory is [03-page-based-test-inventory-74.md](03-page-based-test-inventory-74.md). Feature areas: home/navigation, account lifecycle, contact, product catalog/search/details, categories/brands, reviews, subscriptions, cart, checkout, payment confirmation/invoice, recommendations, scrolling, and informational pages.

The `/api_list` page's UI is in scope; API endpoint behavior is excluded pending separate scope approval. Performance, security, comprehensive accessibility, and broad cross-browser testing are also excluded from this first baseline.

## 3. Risk and priority

- **P0 / Critical:** account/session controls, cart/order correctness, checkout/payment flow, and transaction controls. Execute transactional cases only with explicit case-level approval and approved synthetic data.
- **P1 / High:** product discovery/search, cart operations, registration/login, checkout address/review, contact form.
- **P2 / Medium:** category/brand browse, review, subscription, recommendations, informational pages, scrolling.
- **P3 / Low:** additional browser/viewport, visual, and accessibility checks not in the initial baseline.

Risk priority indicates test importance, not execution authorization.

## 4. Environment and data

- Base URL: `https://automationexercise.com/` (Cypress `baseUrl`, overridable by `CYPRESS_BASE_URL` after approval).
- Browser: Cypress-supported Chromium/Chrome as initially available; additional browsers are a future scope decision.
- Viewport: Cypress default unless a specific responsive case is approved.
- Account data: synthetic unique name/email/password and fictional address only. Use environment variables for credentials; never commit them.
- Product data: select visible products at execution time and record names/prices to reduce assumptions about catalog order.
- Payment: do not submit any payment/order until user explicitly authorizes it and provides/approves site-supported non-real test values.
- Attachments: use a harmless synthetic fixture for an approved contact-form case; do not upload private files.

## 5. Test approach

1. Review and approve requirements, plan, RTM, and case catalog.
2. Confirm authorized test IDs, test data, and any separate transaction/destructive approvals.
3. Implement approved cases using Cypress with stable selectors and isolated setup/cleanup.
4. Run approved cases only; do not silently expand the suite or interactively explore state-changing flows.
5. Capture Cypress screenshots/videos on failures where appropriate, excluding secrets and personal information.
6. Triage failures, record defects/evidence, and prepare execution and closure reports.

Read-only browsing used for planning is not a substitute for test execution and will not produce pass/fail results.

## 6. Entry criteria

- User explicitly approves the review package and identifies the test cases to execute.
- Application is reachable and the test environment/browser is available.
- Required synthetic data and credentials are available through a safe local mechanism.
- Any case involving account creation/deletion, contact submission, order/payment, or invoice generation has explicit separate authorization.
- Cypress dependencies/browser are installed and selectors/assertions are based on inspected current behavior.

## 7. Exit criteria

- All approved cases have an execution status: passed, failed, blocked, or not run.
- No unapproved transaction or destructive action occurred.
- Failures are triaged into application defects, environment issues, or automation issues.
- Defects have severity, reproduction steps, expected/actual result, and evidence where available.
- RTM reflects actual test coverage; unexecuted or blocked cases remain clearly marked.
- User reviews the results and any remaining risk before closure/readiness is claimed.

## 8. Execution order (proposed)

1. P1/P2 read-only navigation and content: home, menus, products/details, search, categories/brands, test-case/API-list pages, scroll.
2. P1 reversible/session journeys: invalid login, valid login/logout with approved account, cart add/remove/quantity, subscription/review/contact only as authorized.
3. P0/P1 account and checkout journeys: signup/account state, address review, order/payment/invoice. Execute only after separate authorization and data confirmation.
4. Supplemental negative/boundary cases and regression replay.

## 9. Deliverables

- Requirement analysis: `requirements/01-requirements-analysis.md`
- Test plan: this document
- Test case catalog and RTM: `test-cases/`
- Page-based inventory (74 proposed cases): `03-page-based-test-inventory-74.md`
- After approval only: Cypress implementation, execution report, defect report, and closure report under this project's `test-artifacts/automationexercise/` folder.

## 10. Approval status

**Pending user review. No Cypress command has been run for this target.**
