# Test Case Catalog — Automation Exercise

**Status:** Proposed for review; all cases are not run.  
**Target:** <https://automationexercise.com/>  
**Baseline:** The website's published 26 UI scenarios at <https://automationexercise.com/test_cases>. IDs below preserve the scenario order where possible. Additional cases are marked **Extension**.

## Conventions and gates

- Priorities: **P0** critical, **P1** high, **P2** medium.
- Test status before execution: **Proposed**.
- Shared precondition unless overridden: site is reachable; use a fresh browser context and synthetic data.
- **Gate A:** explicit approval for account creation/deletion, contact form submit, order/payment, or other remote state change.
- **Gate B:** a disposable synthetic account/test credentials are supplied or approved.
- **Gate C:** order/payment and invoice use explicitly approved site-supported non-real test data.
- Do not use real personal or payment data. Case steps mentioning submit/place/pay are design only and must not be executed before the applicable gate is approved.

| ID | Requirement(s) | Priority | Preconditions / data | Proposed steps | Expected result | Gate |
|---|---|---:|---|---|---|---|
| AE-001 | REQ-01, REQ-02 | P1 | None | Open `/`; inspect title, home content, navigation and footer. | Home loads over HTTPS; title/content and visible navigation are present. | None |
| AE-002 | REQ-02 | P1 | None | Follow each primary navigation item to Home, Products, Cart, Signup/Login, Contact Us, Test Cases, and API List. | Each available link reaches its expected page without broken navigation. | None |
| AE-003 | REQ-03 | P1 | Unique synthetic user data | Open Signup/Login; submit name/email; complete account fields; inspect success and logged-in state. | Account creation confirmation and authenticated user indicator appear. | A, B |
| AE-004 | REQ-04 | P1 | Approved existing test account | Log in with valid email/password. | Login succeeds and the expected user identity is shown. | B |
| AE-005 | REQ-04 | P1 | Invalid synthetic credentials | Submit incorrect email/password on login form. | Login is rejected with clear error; user remains unauthenticated. | None |
| AE-006 | REQ-05 | P1 | Approved logged-in test account | Log in, select Logout, inspect destination and session state. | User is returned to login/unauthenticated state; protected state is not shown as logged in. | B |
| AE-007 | REQ-03 | P1 | Existing test email; do not create a real account | Attempt signup using an already-registered test email. | Duplicate registration is rejected with an understandable message; existing account is not overwritten. | B |
| AE-008 | REQ-13 | P1 | Synthetic contact details/message and harmless fixture | Open Contact Us; complete fields; attach fixture; submit; handle confirmation; return Home. | Form reports successful submission and Home navigation works. | A |
| AE-009 | REQ-16 | P2 | None | Open Test Cases from site navigation. | Test Cases page loads and contains published scenario list. | None |
| AE-010 | REQ-06 | P1 | None | Open Products; inspect catalog; open first available product detail. | Product list and detail render; name, category, price, availability, condition, brand are visible where provided. | None |
| AE-011 | REQ-07 | P1 | A product query known from current catalog | Search for a visible product name. | Search results heading and matching products are displayed. | None |
| AE-012 | REQ-14 | P2 | Unique synthetic email | Submit a valid email to the home-page subscription form. | Subscription confirmation is displayed. | A |
| AE-013 | REQ-14 | P2 | Unique synthetic email | Open Cart; submit valid email in footer subscription. | Subscription confirmation is displayed on Cart page. | A |
| AE-014 | REQ-10 | P1 | At least two visible products | Add two products, continue shopping between additions, open Cart. | Both selected products and correct per-line quantities/prices/totals appear. | None |
| AE-015 | REQ-10 | P1 | Product with detail quantity control | Open a product detail; set quantity to 4; add to cart; inspect Cart. | Cart shows the requested quantity for the selected item. | None |
| AE-016 | REQ-11, REQ-12 | P0 | Synthetic account/data; order approval | Add product; checkout as guest; register/login when prompted; review address/order; place order and pay using approved test values; inspect confirmation; clean up only if authorized. | Correct address/order summary and successful order confirmation are shown. | A, B, C |
| AE-017 | REQ-11, REQ-12 | P0 | Approved account and payment test data | Register before checkout; add product; checkout; review; place order/pay; inspect confirmation. | Authenticated checkout completes with expected order confirmation. | A, B, C |
| AE-018 | REQ-11, REQ-12 | P0 | Approved account and payment test data | Log in before checkout; add product; checkout; review; place order/pay; inspect confirmation. | Authenticated checkout completes with expected order confirmation. | B, C |
| AE-019 | REQ-10 | P1 | Cart contains at least two products | Remove one selected product from Cart. | Selected product is removed; other line items and totals update correctly. | None |
| AE-020 | REQ-08 | P2 | None | Expand a category (e.g. Women); choose a subcategory; then choose another category/subcategory (e.g. Men). | Category page heading/products correspond to selected category. | None |
| AE-021 | REQ-08 | P2 | None | Open Products; select a brand; select a different brand. | Each brand page shows the chosen brand and its products. | None |
| AE-022 | REQ-07, REQ-10 | P1 | Product query and approved account | Search products; add matching products; inspect Cart; log in; re-open Cart. | Search results are relevant and selected products remain in Cart across the supported login flow. | B |
| AE-023 | REQ-09 | P2 | Synthetic reviewer name/email/text | Open a product detail; submit a review. | Review confirmation is shown. | A |
| AE-024 | REQ-15, REQ-10 | P2 | Recommended item visible | Scroll to Recommended Items; add one item; open Cart. | Selected recommended item appears in Cart. | None |
| AE-025 | REQ-11 | P1 | Approved account with fictional address; cart item | Proceed to checkout; compare delivery and billing addresses with registered synthetic address. | Checkout address details match the account data. | B |
| AE-026 | REQ-12 | P0 | Approved order/payment flow and test data | Complete approved order; download invoice; verify downloaded file is present/readable; continue and clean up only if approved. | Order confirmation and invoice download are available and usable. | A, B, C |
| AE-027 | REQ-15 | P2 | None | Scroll to footer; confirm Subscription; use up-arrow control; inspect top content. | Footer is reachable and arrow returns page to expected top position. | None |
| AE-028 | REQ-15 | P2 | None | Scroll to footer and then manually scroll to page top. | Page scrolls down and back up without the arrow control. | None |
| AE-029 | REQ-03, REQ-04 | P1 | None | Submit login with blank fields, then with only email and only password. | Required-field validation prevents invalid login; no authenticated state is created. | None |
| AE-030 | REQ-03 | P1 | Fresh synthetic email(s) | Try signup with blank name/email, malformed email, and missing required account details. | Invalid/incomplete signup is prevented or clearly rejected; no partial account is created. | A |
| AE-031 | REQ-03 | P1 | Existing disposable account | Attempt duplicate signup with same email and a different name. | Duplicate is rejected; account profile remains unchanged. | B |
| AE-032 | REQ-06, REQ-10 | P1 | Product with quantity selector | Test default quantity, increase/decrease, and minimum boundary; add to cart. | Quantity is positive and cart quantity matches selected value; invalid/zero quantity is prevented if UI allows entry. | None |
| AE-033 | REQ-07 | P1 | Query unlikely to match catalog | Search for a unique non-matching term. | No-results state is clear; unrelated products are not represented as matches. | None |
| AE-034 | REQ-07 | P2 | Searchable catalog product | Search with case variation and leading/trailing whitespace. | Search behavior is consistent with the site's supported normalization; results are not silently corrupted. | None |
| AE-035 | REQ-10 | P1 | Cart contains multiple items | Remove one item, verify remaining line totals; remove the last item. | Totals recalculate; empty-cart state is clear and no removed item remains. | None |
| AE-036 | REQ-10 | P1 | Cart contains item | Reload Cart and navigate away/back before login. | Cart state follows documented/site behavior and does not duplicate or silently alter items. | None |
| AE-037 | REQ-10 | P1 | Two items with known displayed prices and quantities | Compare displayed line totals and cart total to price × quantity sum. | Arithmetic and currency formatting are consistent. | None |
| AE-038 | REQ-11 | P1 | Empty cart, unauthenticated context | Attempt to proceed to checkout with an empty cart. | Checkout is prevented or empty-cart state is handled without an invalid order. | None |
| AE-039 | REQ-11 | P1 | Non-empty cart, unauthenticated context | Attempt guest checkout and observe login/register requirement. | Site presents the expected authentication path and preserves intended cart state. | None |
| AE-040 | REQ-11, REQ-12 | P0 | Approved test order context | On payment form, verify required-field validation for blank/invalid card fields; do not submit real values. | Invalid payment details are rejected and no order success state is shown. | C |
| AE-041 | REQ-09 | P2 | Product detail page | Submit review with missing name/email/review and malformed email. | Required/format validation prevents invalid review or gives clear feedback. | A |
| AE-042 | REQ-13 | P1 | Contact form | Check required fields, malformed email, empty message, and permitted attachment constraints without submitting valid content. | Invalid data is blocked or clearly identified; no unintended submission occurs. | None |
| AE-043 | REQ-14 | P2 | Home and Cart subscription forms | Submit blank and malformed emails on each form. | Invalid subscription is rejected with useful feedback; no success state is falsely shown. | None |
| AE-044 | REQ-14 | P2 | Email already subscribed, if available | Submit the same synthetic email more than once. | Duplicate behavior is stable and gives a truthful confirmation/error. | A |
| AE-045 | REQ-02, REQ-16 | P2 | None | Open API List page and inspect links/content without issuing endpoint requests. | Informational page loads and published API scenarios are readable. | None |
| AE-046 | REQ-01, REQ-02 | P2 | None | Use browser back/forward across a small set of primary pages; refresh a page. | Navigation and page state remain coherent; no blank/error page. | None |
| AE-047 | REQ-06, REQ-08 | P2 | None | Open multiple product details and browse category/brand results. | Product details and listing context remain consistent with the selected item/filter. | None |
| AE-048 | REQ-10, REQ-11 | P1 | Cart and approved account | Add the same product more than once; inspect whether quantity increments or separate rows are created; checkout review only. | Site behavior is consistent, quantity/totals are correct, and review matches Cart. Do not place order. | B |
| AE-049 | REQ-03, REQ-05 | P1 | Approved disposable account | Log in, verify identity, log out, revisit account-dependent route. | Account state is cleared and authenticated-only behavior is not retained after logout. | B |
| AE-050 | REQ-16 | P2 | None | Load public pages directly by URL (Home, Products, Cart, Login, Contact, Test Cases, API List) and refresh each. | Direct navigation and refresh resolve to the expected page or a deliberate safe state. | None |
| AE-051 | REQ-02 | P2 | Any public page | Select the site logo from a non-home page. | Browser navigates to the HTTPS home page. | None |
| AE-052 | REQ-01 | P2 | Home page; carousel controls if present | Use the visible hero/carousel controls and observe the active slide. | The active slide changes when a control is available; no broken or blank hero content appears. | None |
| AE-053 | NFR-07 | P2 | Home page; desktop and mobile viewport sizes | Inspect primary content and navigation at the approved viewport sizes. | Content remains readable and usable without unintended horizontal overflow or overlapping primary controls. | None |
| AE-054 | NFR-08 | P2 | Home page | Navigate primary controls using keyboard Tab/Shift+Tab and activate a safe navigation link with Enter. | Focus is visible and follows a usable order; the selected link opens its destination. | None |
| AE-055 | REQ-02 | P3 | A URL path known not to exist | Open a non-existent public route. | Site presents a deliberate not-found or safe fallback state rather than a broken/blank page. | None |
| AE-056 | REQ-03 | P2 | Signup form; do not submit | Toggle the newsletter and partner-offer preferences independently. | Each preference can be selected independently and its state is visibly represented. | None |
| AE-057 | REQ-04 | P2 | Signup/Login page | Inspect password inputs before entering credentials. | Password values are masked by default. | None |
| AE-058 | REQ-04, REQ-05 | P1 | Approved test account | Log in, refresh the page, verify authenticated state, then log out. | Session state remains consistent after refresh and is cleared after logout. | B |
| AE-059 | REQ-03 | P2 | Signup form; do not submit | Enter malformed email and attempt to proceed from the signup email step. | Invalid email is blocked or receives clear validation; no account is created. | None |
| AE-060 | REQ-07 | P2 | Product query known in the current catalog | Enter a product query and submit using the Enter key. | Search executes and displays the same relevant results as using the search control. | None |
| AE-061 | REQ-08 | P2 | Products page | Change from one category or brand selection to another. | Listing context and products update to match the latest selection without stale results. | None |
| AE-062 | REQ-06 | P2 | Products page | Inspect visible product image elements for successful loading. | Visible product images load and have non-empty image sources; broken assets are reported. | None |
| AE-063 | REQ-07 | P1 | Product name known from current catalog | Search for a product and compare each result with the query. | Results are relevant; unrelated items are not presented as matches. | None |
| AE-064 | REQ-06, REQ-02 | P2 | Product detail page | Use the product breadcrumb or available return navigation. | User returns to the product listing or expected parent page. | None |
| AE-065 | REQ-06 | P3 | Product detail with gallery controls, if present | Select an alternate product image thumbnail/control. | Main image changes to the selected image without a broken asset. If no gallery control exists, mark not applicable. | None |
| AE-066 | REQ-10 | P2 | Empty cart or cart emptied using the approved reversible flow | Open Cart after all items have been removed. | Empty-cart guidance is visible and removed products are absent. | None |
| AE-067 | REQ-10 | P1 | Cart contains a product; quantity editing available | Change cart quantity and inspect the line amount and total. | Quantities and totals recalculate correctly; if quantity is not editable in Cart, mark not applicable. | None |
| AE-068 | REQ-10 | P2 | Cart has known contents | Compare the cart indicator/count, if present, with selected products and quantities. | Indicator reflects current cart contents; if no indicator exists, mark not applicable. | None |
| AE-069 | REQ-10, REQ-11 | P1 | Cart contains a product; unauthenticated context | Begin checkout, follow the site's login/register prompt, then return to Cart without placing an order. | The authentication route is clear and the selected cart contents are retained. | B |
| AE-070 | REQ-10, REQ-11 | P1 | Cart contains products; stop before order submission | Open checkout and compare the order review lines, quantities, and total with Cart. | Checkout review matches the current Cart; no order is submitted. | B |
| AE-071 | REQ-13 | P2 | Contact Us page; do not submit | Enter malformed email with other contact fields left incomplete. | Email validation is clear and invalid contact data is not submitted. | None |
| AE-072 | REQ-13 | P2 | Contact Us page; harmless fixture | Select an approved harmless fixture file without submitting the form. | Selected filename is shown and no form submission occurs. | None |
| AE-073 | REQ-09 | P2 | Product detail page | Open the review form from a selected product and inspect its context before submitting. | Review form is associated with the selected product; no review is submitted. | None |
| AE-074 | REQ-16 | P2 | Test Cases and API List pages | Follow representative internal informational links and inspect their destinations. | Links open the expected informational content; no API endpoint request is issued. | None |

## Data and execution notes

- Cases AE-001, AE-002, AE-009 through AE-011, AE-019 through AE-021, AE-024, AE-027 through AE-028, AE-032 through AE-039, AE-041 through AE-043, AE-045 through AE-048, AE-050 through AE-057, AE-059 through AE-068, and AE-071 through AE-074 are designed as read-only or reversible checks, subject to review.
- Contact/review/subscription submission, account registration/deletion, and authenticated flows can change persistent server state; apply the gates even when the case is otherwise low risk.
- AE-016 through AE-018 and AE-026 are not to be run unless explicitly approved. Use only confirmed synthetic payment data.
- AE-058 and AE-069 require the approved-account gate; AE-070 may require authentication to reach order review but must stop before order submission.
- Account deletion is not a default cleanup step. If an account is to be deleted, obtain explicit authorization and use only a disposable account.
- At execution time confirm selectors, current product data, and exact expected copy; the catalog is a draft based on public documentation and page inspection, not an assertion that all behavior has already been validated.
