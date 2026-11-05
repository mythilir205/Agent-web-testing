# TC-PDP-002 — `product_quantity_control_applies_selected_quantity`

- **Scenario / reference**: TS-PDP-02 / AE-032
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-06, REQ-10
- **Execution time**: 9.96 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-02][TC-PDP-002][AE-032] product_quantity_control_applies_selected_quantity
- **Expected result**: Quantity is positive and cart quantity matches selected value; invalid/zero quantity is prevented if UI allows entry.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<button.disabled>' to contain value '4', but the value was ''
- **Notes**: Preconditions/data: Product with quantity selector; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PDP-002 before execution](../screenshots/automationexercise.cy.js/TC-PDP-002/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PDP-002 step-001-visit](../screenshots/automationexercise.cy.js/TC-PDP-002/step-001-visit.png)

#### step-002-click

![TC-PDP-002 step-002-click](../screenshots/automationexercise.cy.js/TC-PDP-002/step-002-click.png)

#### step-003-clear-type

![TC-PDP-002 step-003-clear-type](../screenshots/automationexercise.cy.js/TC-PDP-002/step-003-clear-type.png)

#### step-004-click

![TC-PDP-002 step-004-click](../screenshots/automationexercise.cy.js/TC-PDP-002/step-004-click.png)

#### step-005-visit

![TC-PDP-002 step-005-visit](../screenshots/automationexercise.cy.js/TC-PDP-002/step-005-visit.png)

### After result

![TC-PDP-002 after result](../screenshots/automationexercise.cy.js/TC-PDP-002/after.png)


