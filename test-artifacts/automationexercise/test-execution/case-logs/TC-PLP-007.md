# TC-PLP-007 — `changing_category_or_brand_updates_listing_context`

- **Scenario / reference**: TS-PLP-07 / AE-061
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-08
- **Execution time**: 6.67 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-07][TC-PLP-007][AE-061] changing_category_or_brand_updates_listing_context
- **Expected result**: Listing context and products update to match the latest selection without stale results.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `#brands a`, but never found it.
- **Notes**: Preconditions/data: Products page; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PLP-007 before execution](../screenshots/automationexercise.cy.js/TC-PLP-007/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PLP-007 step-001-visit](../screenshots/automationexercise.cy.js/TC-PLP-007/step-001-visit.png)

### After result

![TC-PLP-007 after result](../screenshots/automationexercise.cy.js/TC-PLP-007/after.png)


