# TC-CONTACT-004 — `contact_form_displays_selected_attachment_before_submit`

- **Scenario / reference**: TS-CONTACT-04 / AE-072
- **Target URL**: https://automationexercise.com/
- **Status**: FAILED
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-13
- **Execution time**: 6.02 sec
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z

## Test record

- **Steps executed**: Automation Exercise — 74 page-based cases Contact Us (CONTACT) [TS-CONTACT-04][TC-CONTACT-004][AE-072] contact_form_displays_selected_attachment_before_submit
- **Expected result**: Selected filename is shown and no form submission occurs.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<input.form-control>' to have value undefined, but the value was 'C:\\fakepath\\qa-attachment.txt'
- **Notes**: Preconditions/data: Contact Us page; harmless fixture; approval gate: None.

## Screenshot evidence

### Before execution

![TC-CONTACT-004 before execution](../screenshots/automationexercise.cy.js/TC-CONTACT-004/before.png)

### Step-by-step screenshots

#### step-001-visit

![TC-CONTACT-004 step-001-visit](../screenshots/automationexercise.cy.js/TC-CONTACT-004/step-001-visit.png)

#### step-002-selectFile

![TC-CONTACT-004 step-002-selectFile](../screenshots/automationexercise.cy.js/TC-CONTACT-004/step-002-selectFile.png)

### After result

![TC-CONTACT-004 after result](../screenshots/automationexercise.cy.js/TC-CONTACT-004/after.png)


