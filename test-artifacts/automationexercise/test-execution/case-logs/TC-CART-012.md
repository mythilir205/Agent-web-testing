# TC-CART-012 — `editing_cart_quantity_recalculates_line_total`

- **Scenario / reference**: TS-CART-12 / AE-067
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Execution time**: 11.16 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-12][TC-CART-012][AE-067] editing_cart_quantity_recalculates_line_total
- **Expected result**: Quantities and totals recalculate correctly; if quantity is not editable in Cart, mark not applicable.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.cart_quantity_input`, but never found it.
- **Notes**: Preconditions/data: Cart contains a product; quantity editing available; approval gate: None.

## Screenshot evidence

### Before execution

![TC-CART-012 before execution](../screenshots/automationexercise.cy.js/TC-CART-012/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-CART-012 step-001-visit](../screenshots/automationexercise.cy.js/TC-CART-012/step-001-visit.png)

#### step-002-scrollIntoView-click

![TC-CART-012 step-002-scrollIntoView-click](../screenshots/automationexercise.cy.js/TC-CART-012/step-002-scrollIntoView-click.png)

#### step-003-click

![TC-CART-012 step-003-click](../screenshots/automationexercise.cy.js/TC-CART-012/step-003-click.png)

#### step-004-visit

![TC-CART-012 step-004-visit](../screenshots/automationexercise.cy.js/TC-CART-012/step-004-visit.png)

### After result

![TC-CART-012 after result](../screenshots/automationexercise.cy.js/TC-CART-012/after.png)


