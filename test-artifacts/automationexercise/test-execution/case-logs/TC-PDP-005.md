# TC-PDP-005 — `product_gallery_control_changes_main_image_when_available`

- **Scenario / reference**: TS-PDP-05 / AE-065
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P3 / Functional
- **Requirements**: REQ-06
- **Execution time**: 8.43 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-05][TC-PDP-005][AE-065] product_gallery_control_changes_main_image_when_available
- **Expected result**: Main image changes to the selected image without a broken asset. If no gallery control exists, mark not applicable.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.product-gallery img, .thumbnail img`, but never found it.
- **Notes**: Preconditions/data: Product detail with gallery controls, if present; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PDP-005 before execution](../screenshots/automationexercise.cy.js/TC-PDP-005/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PDP-005 step-001-visit](../screenshots/automationexercise.cy.js/TC-PDP-005/step-001-visit.png)

#### step-002-click

![TC-PDP-005 step-002-click](../screenshots/automationexercise.cy.js/TC-PDP-005/step-002-click.png)

### After result

![TC-PDP-005 after result](../screenshots/automationexercise.cy.js/TC-PDP-005/after.png)


