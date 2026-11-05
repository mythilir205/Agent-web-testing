# TC-PLP-006 — `search_can_be_submitted_with_enter_key`

- **Scenario / reference**: TS-PLP-06 / AE-060
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-07
- **Execution time**: 7.45 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-06][TC-PLP-006][AE-060] search_can_be_submitted_with_enter_key
- **Expected result**: Search executes and displays the same relevant results as using the search control.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find content: '/Searched Products/i' within the selector: 'h2' but never did.
- **Notes**: Preconditions/data: Product query known in the current catalog; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PLP-006 before execution](../screenshots/automationexercise.cy.js/TC-PLP-006/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PLP-006 step-001-visit](../screenshots/automationexercise.cy.js/TC-PLP-006/step-001-visit.png)

#### step-002-type

![TC-PLP-006 step-002-type](../screenshots/automationexercise.cy.js/TC-PLP-006/step-002-type.png)

### After result

![TC-PLP-006 after result](../screenshots/automationexercise.cy.js/TC-PLP-006/after.png)


