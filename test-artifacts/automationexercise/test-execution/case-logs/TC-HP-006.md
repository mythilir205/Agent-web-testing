# TC-HP-006 — `subscription_duplicate_email_has_consistent_feedback`

- **Scenario / reference**: TS-HP-06 / AE-044
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-14
- **Execution time**: 9.56 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-06][TC-HP-006][AE-044] subscription_duplicate_email_has_consistent_feedback
- **Expected result**: Duplicate behavior is stable and gives a truthful confirmation/error.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<div.alert-success.alert>' to be 'visible'
- **Notes**: Preconditions/data: Email already subscribed, if available; approval gate: A.

## Screenshot evidence

### Before execution

![TC-HP-006 before execution](../screenshots/automationexercise.cy.js/TC-HP-006/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-HP-006 step-001-visit](../screenshots/automationexercise.cy.js/TC-HP-006/step-001-visit.png)

#### step-002-scrollIntoView-clear-type

![TC-HP-006 step-002-scrollIntoView-clear-type](../screenshots/automationexercise.cy.js/TC-HP-006/step-002-scrollIntoView-clear-type.png)

#### step-003-click

![TC-HP-006 step-003-click](../screenshots/automationexercise.cy.js/TC-HP-006/step-003-click.png)

#### step-004-scrollIntoView-clear-type

![TC-HP-006 step-004-scrollIntoView-clear-type](../screenshots/automationexercise.cy.js/TC-HP-006/step-004-scrollIntoView-clear-type.png)

#### step-005-click

![TC-HP-006 step-005-click](../screenshots/automationexercise.cy.js/TC-HP-006/step-005-click.png)

### After result

![TC-HP-006 after result](../screenshots/automationexercise.cy.js/TC-HP-006/after.png)


