# TC-PLP-004 — `search_displays_clear_no_match_state`

- **Scenario / reference**: TS-PLP-04 / AE-033
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-07
- **Execution time**: 8.69 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-04][TC-PLP-004][AE-033] search_displays_clear_no_match_state
- **Expected result**: No-results state is clear; unrelated products are not represented as matches.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.productinfo p`, but never found it.
- **Notes**: Preconditions/data: Query unlikely to match catalog; approval gate: None.

## Screenshot evidence

### Before execution

![TC-PLP-004 before execution](../screenshots/automationexercise.cy.js/TC-PLP-004/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-PLP-004 step-001-visit](../screenshots/automationexercise.cy.js/TC-PLP-004/step-001-visit.png)

#### step-002-type

![TC-PLP-004 step-002-type](../screenshots/automationexercise.cy.js/TC-PLP-004/step-002-type.png)

#### step-003-click

![TC-PLP-004 step-003-click](../screenshots/automationexercise.cy.js/TC-PLP-004/step-003-click.png)

### After result

![TC-PLP-004 after result](../screenshots/automationexercise.cy.js/TC-PLP-004/after.png)


