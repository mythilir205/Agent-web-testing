# TC-CHK-006 — `empty_cart_cannot_create_checkout_order`

- **Scenario / reference**: TS-CHK-06 / AE-038
- **Target URL**: https://automationexercise.com/
- **Status**: PASSED
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-11
- **Execution time**: 1.23 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-06][TC-CHK-006][AE-038] empty_cart_cannot_create_checkout_order
- **Expected result**: Checkout is prevented or empty-cart state is handled without an invalid order.
- **Actual result**: All assertions in this Cypress case passed.
- **Notes**: Preconditions/data: Empty cart, unauthenticated context; approval gate: None.

## Screenshot evidence

### Before execution

![TC-CHK-006 before execution](../screenshots/automationexercise.cy.js/TC-CHK-006/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-CHK-006 step-001-visit](../screenshots/automationexercise.cy.js/TC-CHK-006/step-001-visit.png)

### After result

![TC-CHK-006 after result](../screenshots/automationexercise.cy.js/TC-CHK-006/after.png)


