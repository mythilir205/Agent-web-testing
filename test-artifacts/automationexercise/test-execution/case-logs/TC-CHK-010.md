# TC-CHK-010 — `checkout_order_review_matches_cart_before_order_submission`

- **Scenario / reference**: TS-CHK-10 / AE-070
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10, REQ-11
- **Execution time**: 27.72 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-10][TC-CHK-010][AE-070] checkout_order_review_matches_cart_before_order_submission
- **Expected result**: Checkout review matches the current Cart; no order is submitted.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `#cart_info_table tbody tr`, but never found it.
- **Notes**: Preconditions/data: Cart contains products; stop before order submission; approval gate: B.

## Screenshot evidence

### Before execution

![TC-CHK-010 before execution](../screenshots/automationexercise.cy.js/TC-CHK-010/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-CHK-010 step-001-visit](../screenshots/automationexercise.cy.js/TC-CHK-010/step-001-visit.png)

#### step-002-type

![TC-CHK-010 step-002-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-002-type.png)

#### step-003-type

![TC-CHK-010 step-003-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-003-type.png)

#### step-004-click

![TC-CHK-010 step-004-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-004-click.png)

#### step-005-check

![TC-CHK-010 step-005-check](../screenshots/automationexercise.cy.js/TC-CHK-010/step-005-check.png)

#### step-006-type

![TC-CHK-010 step-006-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-006-type.png)

#### step-007-select

![TC-CHK-010 step-007-select](../screenshots/automationexercise.cy.js/TC-CHK-010/step-007-select.png)

#### step-008-select

![TC-CHK-010 step-008-select](../screenshots/automationexercise.cy.js/TC-CHK-010/step-008-select.png)

#### step-009-select

![TC-CHK-010 step-009-select](../screenshots/automationexercise.cy.js/TC-CHK-010/step-009-select.png)

#### step-010-type

![TC-CHK-010 step-010-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-010-type.png)

#### step-011-type

![TC-CHK-010 step-011-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-011-type.png)

#### step-012-type

![TC-CHK-010 step-012-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-012-type.png)

#### step-013-type

![TC-CHK-010 step-013-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-013-type.png)

#### step-014-select

![TC-CHK-010 step-014-select](../screenshots/automationexercise.cy.js/TC-CHK-010/step-014-select.png)

#### step-015-type

![TC-CHK-010 step-015-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-015-type.png)

#### step-016-type

![TC-CHK-010 step-016-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-016-type.png)

#### step-017-type

![TC-CHK-010 step-017-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-017-type.png)

#### step-018-type

![TC-CHK-010 step-018-type](../screenshots/automationexercise.cy.js/TC-CHK-010/step-018-type.png)

#### step-019-click

![TC-CHK-010 step-019-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-019-click.png)

#### step-020-click

![TC-CHK-010 step-020-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-020-click.png)

#### step-021-visit

![TC-CHK-010 step-021-visit](../screenshots/automationexercise.cy.js/TC-CHK-010/step-021-visit.png)

#### step-022-scrollIntoView-click

![TC-CHK-010 step-022-scrollIntoView-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-022-scrollIntoView-click.png)

#### step-023-click

![TC-CHK-010 step-023-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-023-click.png)

#### step-024-visit

![TC-CHK-010 step-024-visit](../screenshots/automationexercise.cy.js/TC-CHK-010/step-024-visit.png)

#### step-025-click

![TC-CHK-010 step-025-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-025-click.png)

#### step-026-click

![TC-CHK-010 step-026-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-026-click.png)

#### step-027-click

![TC-CHK-010 step-027-click](../screenshots/automationexercise.cy.js/TC-CHK-010/step-027-click.png)

### After result

![TC-CHK-010 after result](../screenshots/automationexercise.cy.js/TC-CHK-010/after.png)


