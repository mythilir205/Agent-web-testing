# TC-PDP-004 — `product_detail_breadcrumb_returns_to_product_listing`

- **Scenario / reference**: TS-PDP-04 / AE-064
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-06, REQ-02
- **Execution time**: 9.92 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-04][TC-PDP-004][AE-064] product_detail_breadcrumb_returns_to_product_listing
- **Expected result**: User returns to the product listing or expected parent page.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.breadcrumb a`, but never found it.
- **Notes**: Preconditions/data: Product detail page; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PDP-004 before execution](../screenshots/automationexercise.cy.js/TC-PDP-004/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PDP-004 step-001-visit](../screenshots/automationexercise.cy.js/TC-PDP-004/step-001-visit.png)

#### step-002-click

![TC-PDP-004 step-002-click](../screenshots/automationexercise.cy.js/TC-PDP-004/step-002-click.png)

### After result

![TC-PDP-004 after result](../screenshots/automationexercise.cy.js/TC-PDP-004/after.png)


