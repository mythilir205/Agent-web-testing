# 03 — TEST EXECUTION REPORT

## Execution Summary

- **Target URL**: https://automationexercise.com/
- **Framework / browser**: Cypress 14.5.4 / Electron headless
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z
- **Report generated**: 2026-11-04T20:46:21.810Z
- **Execution video**: `cypress/videos/automationexercise.cy.js (8).mp4`
- **Inventory cases**: 74
- **Executed**: 72
- **Passed**: 58
- **Failed**: 14
- **Skipped / not applicable**: 2
- **Not run / missing result**: 0
- **Pass rate (executed cases)**: 80.6%
- **Duration**: 11 min 42.38 sec
- **Raw Cypress results**: `reports/cypress-results.json`

### Results by status

| Status | Count |
|---|---:|
| Passed | 58 |
| Failed | 14 |
| Skipped / not applicable | 2 |
| Not run / missing result | 0 |

## Detailed Test Case Results

### TC-HP-001 — `home_page_loads_over_https`
- **Scenario / reference**: TS-HP-01 / AE-001
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-01, REQ-02
- **Status**: PASSED
- **Execution time**: 3.49 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-01][TC-HP-001][AE-001] home_page_loads_over_https`.
- **Expected result**: Home loads over HTTPS; title/content and visible navigation are present.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-001/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-HP-002 — `home_page_subscription_accepts_valid_email`
- **Scenario / reference**: TS-HP-02 / AE-012
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-14
- **Status**: PASSED
- **Execution time**: 3.98 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-02][TC-HP-002][AE-012] home_page_subscription_accepts_valid_email`.
- **Expected result**: Subscription confirmation is displayed.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/step-002-scrollIntoView.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/step-003-scrollIntoView-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-002/step-004-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Unique synthetic email; approval gate: A.

### TC-HP-003 — `scroll_to_top_control_returns_to_page_header`
- **Scenario / reference**: TS-HP-03 / AE-027
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-15
- **Status**: PASSED
- **Execution time**: 3.03 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-03][TC-HP-003][AE-027] scroll_to_top_control_returns_to_page_header`.
- **Expected result**: Footer is reachable and arrow returns page to expected top position.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-003/step-002-scrollTo.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-003/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-HP-004 — `home_page_supports_manual_scroll_up_and_down`
- **Scenario / reference**: TS-HP-04 / AE-028
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-15
- **Status**: PASSED
- **Execution time**: 4.08 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-04][TC-HP-004][AE-028] home_page_supports_manual_scroll_up_and_down`.
- **Expected result**: Page scrolls down and back up without the arrow control.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-004/step-002-scrollTo.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-004/step-003-scrollTo.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-HP-005 — `subscription_forms_reject_invalid_email`
- **Scenario / reference**: TS-HP-05 / AE-043
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-14
- **Status**: PASSED
- **Execution time**: 4.39 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-05][TC-HP-005][AE-043] subscription_forms_reject_invalid_email`.
- **Expected result**: Invalid subscription is rejected with useful feedback; no success state is falsely shown.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-005/step-002-scrollIntoView-type.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Home and Cart subscription forms; approval gate: None.

### TC-HP-006 — `subscription_duplicate_email_has_consistent_feedback`
- **Scenario / reference**: TS-HP-06 / AE-044
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-14
- **Status**: FAILED
- **Execution time**: 9.56 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-06][TC-HP-006][AE-044] subscription_duplicate_email_has_consistent_feedback`.
- **Expected result**: Duplicate behavior is stable and gives a truthful confirmation/error.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<div.alert-success.alert>' to be 'visible'
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/step-002-scrollIntoView-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/step-004-scrollIntoView-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-006/step-005-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Email already subscribed, if available; approval gate: A.

### TC-HP-007 — `brand_logo_navigates_to_home_page`
- **Scenario / reference**: TS-HP-07 / AE-051
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-02
- **Status**: PASSED
- **Execution time**: 4.25 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-07][TC-HP-007][AE-051] brand_logo_navigates_to_home_page`.
- **Expected result**: Browser navigates to the HTTPS home page.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-007/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-007/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-007/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-007/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Any public page; approval gate: None.

### TC-HP-008 — `home_hero_controls_change_visible_slide_when_available`
- **Scenario / reference**: TS-HP-08 / AE-052
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-01
- **Status**: NOT APPLICABLE / SKIPPED
- **Execution time**: 0.00 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-08][TC-HP-008][AE-052] home_hero_controls_change_visible_slide_when_available`.
- **Expected result**: The active slide changes when a control is available; no broken or blank hero content appears.
- **Actual result**: The test marked itself skipped because the optional feature was not available.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-008/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-008/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-008/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Home page; carousel controls if present; approval gate: None.

### TC-HP-009 — `home_page_layout_adapts_to_mobile_and_desktop_viewports`
- **Scenario / reference**: TS-HP-09 / AE-053
- **Priority / type**: P2 / Non-Functional
- **Requirements**: NFR-07
- **Status**: PASSED
- **Execution time**: 3.78 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-09][TC-HP-009][AE-053] home_page_layout_adapts_to_mobile_and_desktop_viewports`.
- **Expected result**: Content remains readable and usable without unintended horizontal overflow or overlapping primary controls.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-009/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-009/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-009/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-009/step-002-reload.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Home page; desktop and mobile viewport sizes; approval gate: None.

### TC-HP-010 — `home_page_primary_controls_are_keyboard_reachable`
- **Scenario / reference**: TS-HP-10 / AE-054
- **Priority / type**: P2 / Non-Functional
- **Requirements**: NFR-08
- **Status**: FAILED
- **Execution time**: 7.64 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Home Page (HP) [TS-HP-10][TC-HP-010][AE-054] home_page_primary_controls_are_keyboard_reachable`.
- **Expected result**: Focus is visible and follows a usable order; the selected link opens its destination.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '/' to equal '/products'
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-010/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-010/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-010/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-010/step-002-focus.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-HP-010/step-003-type.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Home page; approval gate: None.

### TC-NAV-001 — `primary_navigation_opens_expected_public_pages`
- **Scenario / reference**: TS-NAV-01 / AE-002
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-02
- **Status**: FAILED
- **Execution time**: 6.87 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Navigation (NAV) [TS-NAV-01][TC-NAV-001][AE-002] primary_navigation_opens_expected_public_pages`.
- **Expected result**: Each available link reaches its expected page without broken navigation.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find content: '/Automation Exercise/i' but never did.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-001/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-NAV-002 — `browser_back_forward_and_refresh_keep_valid_page_state`
- **Scenario / reference**: TS-NAV-02 / AE-046
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-01, REQ-02
- **Status**: PASSED
- **Execution time**: 7.50 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Navigation (NAV) [TS-NAV-02][TC-NAV-002][AE-046] browser_back_forward_and_refresh_keep_valid_page_state`.
- **Expected result**: Navigation and page state remain coherent; no blank/error page.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/step-002-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/step-003-go.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/step-004-go.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-002/step-005-reload.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-NAV-003 — `public_pages_load_when_opened_directly`
- **Scenario / reference**: TS-NAV-03 / AE-050
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-16
- **Status**: PASSED
- **Execution time**: 7.87 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Navigation (NAV) [TS-NAV-03][TC-NAV-003][AE-050] public_pages_load_when_opened_directly`.
- **Expected result**: Direct navigation and refresh resolve to the expected page or a deliberate safe state.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-002-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-003-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-005-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-006-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-003/step-007-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-NAV-004 — `unknown_route_shows_safe_not_found_or_home_state`
- **Scenario / reference**: TS-NAV-04 / AE-055
- **Priority / type**: P3 / Functional
- **Requirements**: REQ-02
- **Status**: PASSED
- **Execution time**: 4.02 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Navigation (NAV) [TS-NAV-04][TC-NAV-004][AE-055] unknown_route_shows_safe_not_found_or_home_state`.
- **Expected result**: Site presents a deliberate not-found or safe fallback state rather than a broken/blank page.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-NAV-004/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: A URL path known not to exist; approval gate: None.

### TC-AUTH-001 — `new_user_can_register_with_valid_synthetic_data`
- **Scenario / reference**: TS-AUTH-01 / AE-003
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 19.54 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-01][TC-AUTH-001][AE-003] new_user_can_register_with_valid_synthetic_data`.
- **Expected result**: Account creation confirmation and authenticated user indicator appear.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-001/step-022-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Unique synthetic user data; approval gate: A, B.

### TC-AUTH-002 — `registered_user_can_log_in`
- **Scenario / reference**: TS-AUTH-02 / AE-004
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-04
- **Status**: PASSED
- **Execution time**: 20.94 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-02][TC-AUTH-002][AE-004] registered_user_can_log_in`.
- **Expected result**: Login succeeds and the expected user identity is shown.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-002/step-027-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved existing test account; approval gate: B.

### TC-AUTH-003 — `login_rejects_incorrect_credentials`
- **Scenario / reference**: TS-AUTH-03 / AE-005
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-04
- **Status**: PASSED
- **Execution time**: 3.14 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-03][TC-AUTH-003][AE-005] login_rejects_incorrect_credentials`.
- **Expected result**: Login is rejected with clear error; user remains unauthenticated.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-003/step-004-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Invalid synthetic credentials; approval gate: None.

### TC-AUTH-004 — `user_can_log_out_and_session_is_cleared`
- **Scenario / reference**: TS-AUTH-04 / AE-006
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-05
- **Status**: PASSED
- **Execution time**: 23.08 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-04][TC-AUTH-004][AE-006] user_can_log_out_and_session_is_cleared`.
- **Expected result**: User is returned to login/unauthenticated state; protected state is not shown as logged in.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-004/step-027-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved logged-in test account; approval gate: B.

### TC-AUTH-005 — `signup_rejects_an_existing_email_address`
- **Scenario / reference**: TS-AUTH-05 / AE-007
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 22.36 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-05][TC-AUTH-005][AE-007] signup_rejects_an_existing_email_address`.
- **Expected result**: Duplicate registration is rejected with an understandable message; existing account is not overwritten.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-026-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-027-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-028-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-029-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-030-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-005/step-031-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Existing test email; do not create a real account; approval gate: B.

### TC-AUTH-006 — `login_rejects_blank_or_partial_credentials`
- **Scenario / reference**: TS-AUTH-06 / AE-029
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03, REQ-04
- **Status**: PASSED
- **Execution time**: 2.98 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-06][TC-AUTH-006][AE-029] login_rejects_blank_or_partial_credentials`.
- **Expected result**: Required-field validation prevents invalid login; no authenticated state is created.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/step-004-clear.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-006/step-005-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-AUTH-007 — `signup_validates_required_and_malformed_fields`
- **Scenario / reference**: TS-AUTH-07 / AE-030
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 2.56 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-07][TC-AUTH-007][AE-030] signup_validates_required_and_malformed_fields`.
- **Expected result**: Invalid/incomplete signup is prevented or clearly rejected; no partial account is created.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/step-003-clear.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-007/step-004-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Fresh synthetic email(s); approval gate: A.

### TC-AUTH-008 — `duplicate_signup_does_not_change_existing_account`
- **Scenario / reference**: TS-AUTH-08 / AE-031
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 24.33 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-08][TC-AUTH-008][AE-031] duplicate_signup_does_not_change_existing_account`.
- **Expected result**: Duplicate is rejected; account profile remains unchanged.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-026-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-027-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-028-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-029-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-008/step-030-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Existing disposable account; approval gate: B.

### TC-AUTH-009 — `logout_prevents_authenticated_state_on_revisit`
- **Scenario / reference**: TS-AUTH-09 / AE-049
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-03, REQ-05
- **Status**: PASSED
- **Execution time**: 25.95 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-09][TC-AUTH-009][AE-049] logout_prevents_authenticated_state_on_revisit`.
- **Expected result**: Account state is cleared and authenticated-only behavior is not retained after logout.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-027-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-028-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-029-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-030-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-031-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-032-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-009/step-033-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved disposable account; approval gate: B.

### TC-AUTH-010 — `signup_marketing_preferences_can_be_selected_independently`
- **Scenario / reference**: TS-AUTH-10 / AE-056
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 4.12 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-10][TC-AUTH-010][AE-056] signup_marketing_preferences_can_be_selected_independently`.
- **Expected result**: Each preference can be selected independently and its state is visibly represented.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-006-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-010/step-007-uncheck.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Signup form; do not submit; approval gate: None.

### TC-AUTH-011 — `password_input_is_obscured_by_default`
- **Scenario / reference**: TS-AUTH-11 / AE-057
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-04
- **Status**: PASSED
- **Execution time**: 1.17 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-11][TC-AUTH-011][AE-057] password_input_is_obscured_by_default`.
- **Expected result**: Password values are masked by default.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-011/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-011/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-011/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Signup/Login page; approval gate: None.

### TC-AUTH-012 — `authenticated_state_remains_consistent_after_refresh`
- **Scenario / reference**: TS-AUTH-12 / AE-058
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-04, REQ-05
- **Status**: PASSED
- **Execution time**: 18.31 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-12][TC-AUTH-012][AE-058] authenticated_state_remains_consistent_after_refresh`.
- **Expected result**: Session state remains consistent after refresh and is cleared after logout.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-021-reload.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-022-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-012/step-023-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved test account; approval gate: B.

### TC-AUTH-013 — `signup_email_input_enforces_email_format`
- **Scenario / reference**: TS-AUTH-13 / AE-059
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-03
- **Status**: PASSED
- **Execution time**: 2.43 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Signup and Login (AUTH) [TS-AUTH-13][TC-AUTH-013][AE-059] signup_email_input_enforces_email_format`.
- **Expected result**: Invalid email is blocked or receives clear validation; no account is created.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-013/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-013/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-013/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-013/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-AUTH-013/step-003-type.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Signup form; do not submit; approval gate: None.

### TC-PLP-001 — `search_returns_products_matching_query`
- **Scenario / reference**: TS-PLP-01 / AE-011
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-07
- **Status**: PASSED
- **Execution time**: 4.45 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-01][TC-PLP-001][AE-011] search_returns_products_matching_query`.
- **Expected result**: Search results heading and matching products are displayed.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-001/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-001/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: A product query known from current catalog; approval gate: None.

### TC-PLP-002 — `category_selection_displays_matching_products`
- **Scenario / reference**: TS-PLP-02 / AE-020
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-08
- **Status**: PASSED
- **Execution time**: 4.30 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-02][TC-PLP-002][AE-020] category_selection_displays_matching_products`.
- **Expected result**: Category page heading/products correspond to selected category.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-002/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-002/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-PLP-003 — `brand_selection_displays_matching_products`
- **Scenario / reference**: TS-PLP-03 / AE-021
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-08
- **Status**: FAILED
- **Execution time**: 6.62 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-03][TC-PLP-003][AE-021] brand_selection_displays_matching_products`.
- **Expected result**: Each brand page shows the chosen brand and its products.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `#brands a`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-003/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-PLP-004 — `search_displays_clear_no_match_state`
- **Scenario / reference**: TS-PLP-04 / AE-033
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-07
- **Status**: FAILED
- **Execution time**: 8.69 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-04][TC-PLP-004][AE-033] search_displays_clear_no_match_state`.
- **Expected result**: No-results state is clear; unrelated products are not represented as matches.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.productinfo p`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-004/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-004/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Query unlikely to match catalog; approval gate: None.

### TC-PLP-005 — `search_handles_case_and_surrounding_whitespace`
- **Scenario / reference**: TS-PLP-05 / AE-034
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-07
- **Status**: PASSED
- **Execution time**: 3.83 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-05][TC-PLP-005][AE-034] search_handles_case_and_surrounding_whitespace`.
- **Expected result**: Search behavior is consistent with the site's supported normalization; results are not silently corrupted.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-005/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-005/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Searchable catalog product; approval gate: None.

### TC-PLP-006 — `search_can_be_submitted_with_enter_key`
- **Scenario / reference**: TS-PLP-06 / AE-060
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-07
- **Status**: FAILED
- **Execution time**: 7.45 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-06][TC-PLP-006][AE-060] search_can_be_submitted_with_enter_key`.
- **Expected result**: Search executes and displays the same relevant results as using the search control.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find content: '/Searched Products/i' within the selector: 'h2' but never did.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-006/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-006/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-006/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-006/step-002-type.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product query known in the current catalog; approval gate: None.

### TC-PLP-007 — `changing_category_or_brand_updates_listing_context`
- **Scenario / reference**: TS-PLP-07 / AE-061
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-08
- **Status**: FAILED
- **Execution time**: 6.67 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-07][TC-PLP-007][AE-061] changing_category_or_brand_updates_listing_context`.
- **Expected result**: Listing context and products update to match the latest selection without stale results.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `#brands a`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-007/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-007/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-007/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Products page; approval gate: None.

### TC-PLP-008 — `product_listing_images_load_without_broken_assets`
- **Scenario / reference**: TS-PLP-08 / AE-062
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-06
- **Status**: PASSED
- **Execution time**: 2.80 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-08][TC-PLP-008][AE-062] product_listing_images_load_without_broken_assets`.
- **Expected result**: Visible product images load and have non-empty image sources; broken assets are reported.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-008/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-008/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-008/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Products page; approval gate: None.

### TC-PLP-009 — `search_results_do_not_include_unrelated_products`
- **Scenario / reference**: TS-PLP-09 / AE-063
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-07
- **Status**: PASSED
- **Execution time**: 4.22 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Products and Search (PLP) [TS-PLP-09][TC-PLP-009][AE-063] search_results_do_not_include_unrelated_products`.
- **Expected result**: Results are relevant; unrelated items are not presented as matches.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-009/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-009/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-009/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-009/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PLP-009/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product name known from current catalog; approval gate: None.

### TC-PDP-001 — `product_detail_shows_available_product_attributes`
- **Scenario / reference**: TS-PDP-01 / AE-010
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-06
- **Status**: PASSED
- **Execution time**: 3.92 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-01][TC-PDP-001][AE-010] product_detail_shows_available_product_attributes`.
- **Expected result**: Product list and detail render; name, category, price, availability, condition, brand are visible where provided.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-001/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-PDP-002 — `product_quantity_control_applies_selected_quantity`
- **Scenario / reference**: TS-PDP-02 / AE-032
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-06, REQ-10
- **Status**: FAILED
- **Execution time**: 9.96 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-02][TC-PDP-002][AE-032] product_quantity_control_applies_selected_quantity`.
- **Expected result**: Quantity is positive and cart quantity matches selected value; invalid/zero quantity is prevented if UI allows entry.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<button.disabled>' to contain value '4', but the value was ''
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/step-003-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-002/step-005-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product with quantity selector; approval gate: None.

### TC-PDP-003 — `product_details_match_selected_catalog_item`
- **Scenario / reference**: TS-PDP-03 / AE-047
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-06, REQ-08
- **Status**: PASSED
- **Execution time**: 4.26 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-03][TC-PDP-003][AE-047] product_details_match_selected_catalog_item`.
- **Expected result**: Product details and listing context remain consistent with the selected item/filter.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-003/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-PDP-004 — `product_detail_breadcrumb_returns_to_product_listing`
- **Scenario / reference**: TS-PDP-04 / AE-064
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-06, REQ-02
- **Status**: FAILED
- **Execution time**: 9.92 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-04][TC-PDP-004][AE-064] product_detail_breadcrumb_returns_to_product_listing`.
- **Expected result**: User returns to the product listing or expected parent page.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.breadcrumb a`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-004/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product detail page; approval gate: None.

### TC-PDP-005 — `product_gallery_control_changes_main_image_when_available`
- **Scenario / reference**: TS-PDP-05 / AE-065
- **Priority / type**: P3 / Functional
- **Requirements**: REQ-06
- **Status**: FAILED
- **Execution time**: 8.43 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Details (PDP) [TS-PDP-05][TC-PDP-005][AE-065] product_gallery_control_changes_main_image_when_available`.
- **Expected result**: Main image changes to the selected image without a broken asset. If no gallery control exists, mark not applicable.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.product-gallery img, .thumbnail img`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-PDP-005/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product detail with gallery controls, if present; approval gate: None.

### TC-CART-001 — `cart_page_subscription_accepts_valid_email`
- **Scenario / reference**: TS-CART-01 / AE-013
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-14
- **Status**: PASSED
- **Execution time**: 2.64 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-01][TC-CART-001][AE-013] cart_page_subscription_accepts_valid_email`.
- **Expected result**: Subscription confirmation is displayed on Cart page.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-001/step-002-scrollIntoView-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-001/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Unique synthetic email; approval gate: A.

### TC-CART-002 — `multiple_products_can_be_added_and_totals_are_shown`
- **Scenario / reference**: TS-CART-02 / AE-014
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 5.33 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-02][TC-CART-002][AE-014] multiple_products_can_be_added_and_totals_are_shown`.
- **Expected result**: Both selected products and correct per-line quantities/prices/totals appear.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-004-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-002/step-006-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: At least two visible products; approval gate: None.

### TC-CART-003 — `cart_preserves_product_detail_quantity`
- **Scenario / reference**: TS-CART-03 / AE-015
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 6.53 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-03][TC-CART-003][AE-015] cart_preserves_product_detail_quantity`.
- **Expected result**: Cart shows the requested quantity for the selected item.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/step-003-clear-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-003/step-005-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product with detail quantity control; approval gate: None.

### TC-CART-004 — `selected_cart_product_can_be_removed`
- **Scenario / reference**: TS-CART-04 / AE-019
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 5.51 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-04][TC-CART-004][AE-019] selected_cart_product_can_be_removed`.
- **Expected result**: Selected product is removed; other line items and totals update correctly.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-004/step-005-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains at least two products; approval gate: None.

### TC-CART-005 — `searched_products_remain_in_cart_after_login`
- **Scenario / reference**: TS-CART-05 / AE-022
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-07, REQ-10
- **Status**: PASSED
- **Execution time**: 31.10 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-05][TC-CART-005][AE-022] searched_products_remain_in_cart_after_login`.
- **Expected result**: Search results are relevant and selected products remain in Cart across the supported login flow.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-024-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-025-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-027-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-028-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-029-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-030-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-031-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-032-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-033-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-005/step-034-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product query and approved account; approval gate: B.

### TC-CART-006 — `recommended_product_can_be_added_to_cart`
- **Scenario / reference**: TS-CART-06 / AE-024
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-15, REQ-10
- **Status**: PASSED
- **Execution time**: 5.60 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-06][TC-CART-006][AE-024] recommended_product_can_be_added_to_cart`.
- **Expected result**: Selected recommended item appears in Cart.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/step-002-scrollIntoView.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-006/step-005-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Recommended item visible; approval gate: None.

### TC-CART-007 — `removing_cart_items_updates_empty_cart_state`
- **Scenario / reference**: TS-CART-07 / AE-035
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 7.12 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-07][TC-CART-007][AE-035] removing_cart_items_updates_empty_cart_state`.
- **Expected result**: Totals recalculate; empty-cart state is clear and no removed item remains.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-004-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-006-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-007-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-007/step-008-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains multiple items; approval gate: None.

### TC-CART-008 — `cart_contents_remain_consistent_after_reload_and_navigation`
- **Scenario / reference**: TS-CART-08 / AE-036
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 8.37 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-08][TC-CART-008][AE-036] cart_contents_remain_consistent_after_reload_and_navigation`.
- **Expected result**: Cart state follows documented/site behavior and does not duplicate or silently alter items.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-005-reload.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-006-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-008/step-007-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains item; approval gate: None.

### TC-CART-009 — `cart_line_and_order_totals_are_arithmetically_correct`
- **Scenario / reference**: TS-CART-09 / AE-037
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 4.96 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-09][TC-CART-009][AE-037] cart_line_and_order_totals_are_arithmetically_correct`.
- **Expected result**: Arithmetic and currency formatting are consistent.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-009/step-004-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Two items with known displayed prices and quantities; approval gate: None.

### TC-CART-010 — `adding_same_product_repeatedly_has_consistent_cart_behavior`
- **Scenario / reference**: TS-CART-10 / AE-048
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-10, REQ-11
- **Status**: PASSED
- **Execution time**: 5.74 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-10][TC-CART-010][AE-048] adding_same_product_repeatedly_has_consistent_cart_behavior`.
- **Expected result**: Site behavior is consistent, quantity/totals are correct, and review matches Cart. Do not place order.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-004-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-010/step-006-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart and approved account; approval gate: B.

### TC-CART-011 — `empty_cart_displays_clear_guidance_and_no_items`
- **Scenario / reference**: TS-CART-11 / AE-066
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-10
- **Status**: PASSED
- **Execution time**: 1.73 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-11][TC-CART-011][AE-066] empty_cart_displays_clear_guidance_and_no_items`.
- **Expected result**: Empty-cart guidance is visible and removed products are absent.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-011/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-011/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-011/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Empty cart or cart emptied using the approved reversible flow; approval gate: None.

### TC-CART-012 — `editing_cart_quantity_recalculates_line_total`
- **Scenario / reference**: TS-CART-12 / AE-067
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10
- **Status**: FAILED
- **Execution time**: 11.16 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-12][TC-CART-012][AE-067] editing_cart_quantity_recalculates_line_total`.
- **Expected result**: Quantities and totals recalculate correctly; if quantity is not editable in Cart, mark not applicable.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `.cart_quantity_input`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-012/step-004-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains a product; quantity editing available; approval gate: None.

### TC-CART-013 — `cart_indicator_matches_cart_contents`
- **Scenario / reference**: TS-CART-13 / AE-068
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-10
- **Status**: NOT APPLICABLE / SKIPPED
- **Execution time**: 6.39 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Cart (CART) [TS-CART-13][TC-CART-013][AE-068] cart_indicator_matches_cart_contents`.
- **Expected result**: Indicator reflects current cart contents; if no indicator exists, mark not applicable.
- **Actual result**: The test marked itself skipped because the optional feature was not available.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CART-013/step-004-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart has known contents; approval gate: None.

### TC-CHK-001 — `guest_checkout_registration_flow_completes_order`
- **Scenario / reference**: TS-CHK-01 / AE-016
- **Priority / type**: P0 / Functional
- **Requirements**: REQ-11, REQ-12
- **Status**: PASSED
- **Execution time**: 29.56 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-01][TC-CHK-001][AE-016] guest_checkout_registration_flow_completes_order`.
- **Expected result**: Correct address/order summary and successful order confirmation are shown.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-006-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-007-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-008-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-009-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-010-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-011-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-013-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-015-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-019-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-020-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-021-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-022-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-027-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-028-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-029-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-030-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-031-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-032-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-033-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-034-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-035-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-036-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-037-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-001/step-038-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Synthetic account/data; order approval; approval gate: A, B, C.

### TC-CHK-002 — `registered_user_can_checkout_after_registration`
- **Scenario / reference**: TS-CHK-02 / AE-017
- **Priority / type**: P0 / Functional
- **Requirements**: REQ-11, REQ-12
- **Status**: PASSED
- **Execution time**: 32.99 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-02][TC-CHK-002][AE-017] registered_user_can_checkout_after_registration`.
- **Expected result**: Authenticated checkout completes with expected order confirmation.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-021-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-022-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-023-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-024-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-026-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-027-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-028-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-029-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-030-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-031-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-032-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-033-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-034-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-002/step-035-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved account and payment test data; approval gate: A, B, C.

### TC-CHK-003 — `logged_in_user_can_complete_checkout`
- **Scenario / reference**: TS-CHK-03 / AE-018
- **Priority / type**: P0 / Functional
- **Requirements**: REQ-11, REQ-12
- **Status**: PASSED
- **Execution time**: 34.93 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-03][TC-CHK-003][AE-018] logged_in_user_can_complete_checkout`.
- **Expected result**: Authenticated checkout completes with expected order confirmation.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-021-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-022-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-023-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-024-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-026-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-027-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-028-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-029-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-030-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-031-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-032-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-033-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-034-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-035-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-036-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-037-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-038-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-039-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-003/step-040-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved account and payment test data; approval gate: B, C.

### TC-CHK-004 — `checkout_addresses_match_registered_account_details`
- **Scenario / reference**: TS-CHK-04 / AE-025
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-11
- **Status**: PASSED
- **Execution time**: 27.13 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-04][TC-CHK-004][AE-025] checkout_addresses_match_registered_account_details`.
- **Expected result**: Checkout address details match the account data.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-021-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-022-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-023-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-024-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-004/step-027-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved account with fictional address; cart item; approval gate: B.

### TC-CHK-005 — `completed_order_invoice_can_be_downloaded`
- **Scenario / reference**: TS-CHK-05 / AE-026
- **Priority / type**: P0 / Functional
- **Requirements**: REQ-12
- **Status**: PASSED
- **Execution time**: 32.78 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-05][TC-CHK-005][AE-026] completed_order_invoice_can_be_downloaded`.
- **Expected result**: Order confirmation and invoice download are available and usable.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-021-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-022-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-023-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-024-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-026-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-027-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-028-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-029-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-030-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-031-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-032-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-033-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-034-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-035-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-036-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-005/step-037-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved order/payment flow and test data; approval gate: A, B, C.

### TC-CHK-006 — `empty_cart_cannot_create_checkout_order`
- **Scenario / reference**: TS-CHK-06 / AE-038
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-11
- **Status**: PASSED
- **Execution time**: 1.23 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-06][TC-CHK-006][AE-038] empty_cart_cannot_create_checkout_order`.
- **Expected result**: Checkout is prevented or empty-cart state is handled without an invalid order.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-006/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-006/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-006/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Empty cart, unauthenticated context; approval gate: None.

### TC-CHK-007 — `guest_checkout_prompts_for_required_authentication`
- **Scenario / reference**: TS-CHK-07 / AE-039
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-11
- **Status**: PASSED
- **Execution time**: 6.40 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-07][TC-CHK-007][AE-039] guest_checkout_prompts_for_required_authentication`.
- **Expected result**: Site presents the expected authentication path and preserves intended cart state.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-007/step-006-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Non-empty cart, unauthenticated context; approval gate: None.

### TC-CHK-008 — `payment_form_rejects_missing_or_invalid_fields`
- **Scenario / reference**: TS-CHK-08 / AE-040
- **Priority / type**: P0 / Functional
- **Requirements**: REQ-11, REQ-12
- **Status**: PASSED
- **Execution time**: 29.81 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-08][TC-CHK-008][AE-040] payment_form_rejects_missing_or_invalid_fields`.
- **Expected result**: Invalid payment details are rejected and no order success state is shown.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-021-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-022-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-023-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-024-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-027-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-028-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-008/step-029-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Approved test order context; approval gate: C.

### TC-CHK-009 — `checkout_login_redirect_preserves_cart_contents`
- **Scenario / reference**: TS-CHK-09 / AE-069
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10, REQ-11
- **Status**: PASSED
- **Execution time**: 8.42 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-09][TC-CHK-009][AE-069] checkout_login_redirect_preserves_cart_contents`.
- **Expected result**: The authentication route is clear and the selected cart contents are retained.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-002-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-003-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-004-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-005-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-006-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-009/step-007-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains a product; unauthenticated context; approval gate: B.

### TC-CHK-010 — `checkout_order_review_matches_cart_before_order_submission`
- **Scenario / reference**: TS-CHK-10 / AE-070
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-10, REQ-11
- **Status**: FAILED
- **Execution time**: 27.72 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Checkout and Order (CHK) [TS-CHK-10][TC-CHK-010][AE-070] checkout_order_review_matches_cart_before_order_submission`.
- **Expected result**: Checkout review matches the current Cart; no order is submitted.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: Expected to find element: `#cart_info_table tbody tr`, but never found it.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-004-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-005-check.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-006-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-007-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-008-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-009-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-010-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-011-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-012-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-013-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-014-select.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-015-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-016-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-017-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-018-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-019-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-020-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-021-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-022-scrollIntoView-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-023-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-024-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-025-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-026-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CHK-010/step-027-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Cart contains products; stop before order submission; approval gate: B.

### TC-CONTACT-001 — `contact_form_submits_valid_feedback`
- **Scenario / reference**: TS-CONTACT-01 / AE-008
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-13
- **Status**: PASSED
- **Execution time**: 6.12 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Contact Us (CONTACT) [TS-CONTACT-01][TC-CONTACT-001][AE-008] contact_form_submits_valid_feedback`.
- **Expected result**: Form reports successful submission and Home navigation works.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-004-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-005-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-001/step-006-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Synthetic contact details/message and harmless fixture; approval gate: A.

### TC-CONTACT-002 — `contact_form_validates_required_and_invalid_fields`
- **Scenario / reference**: TS-CONTACT-02 / AE-042
- **Priority / type**: P1 / Functional
- **Requirements**: REQ-13
- **Status**: FAILED
- **Execution time**: 2.27 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Contact Us (CONTACT) [TS-CONTACT-02][TC-CONTACT-002][AE-042] contact_form_validates_required_and_invalid_fields`.
- **Expected result**: Invalid data is blocked or clearly identified; no unintended submission occurs.
- **Actual result**: AssertionError: expected true to equal false
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-002/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Contact form; approval gate: None.

### TC-CONTACT-003 — `contact_email_field_rejects_malformed_email`
- **Scenario / reference**: TS-CONTACT-03 / AE-071
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-13
- **Status**: PASSED
- **Execution time**: 2.66 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Contact Us (CONTACT) [TS-CONTACT-03][TC-CONTACT-003][AE-071] contact_email_field_rejects_malformed_email`.
- **Expected result**: Email validation is clear and invalid contact data is not submitted.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-003/step-002-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-003/step-003-type.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Contact Us page; do not submit; approval gate: None.

### TC-CONTACT-004 — `contact_form_displays_selected_attachment_before_submit`
- **Scenario / reference**: TS-CONTACT-04 / AE-072
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-13
- **Status**: FAILED
- **Execution time**: 6.02 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Contact Us (CONTACT) [TS-CONTACT-04][TC-CONTACT-004][AE-072] contact_form_displays_selected_attachment_before_submit`.
- **Expected result**: Selected filename is shown and no form submission occurs.
- **Actual result**: AssertionError: Timed out retrying after 4000ms: expected '<input.form-control>' to have value undefined, but the value was 'C:\\fakepath\\qa-attachment.txt'
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-004/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-004/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-004/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-CONTACT-004/step-002-selectFile.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Contact Us page; harmless fixture; approval gate: None.

### TC-REVIEW-001 — `product_review_accepts_valid_synthetic_details`
- **Scenario / reference**: TS-REVIEW-01 / AE-023
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-09
- **Status**: PASSED
- **Execution time**: 8.06 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Review (REVIEW) [TS-REVIEW-01][TC-REVIEW-001][AE-023] product_review_accepts_valid_synthetic_details`.
- **Expected result**: Review confirmation is shown.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-003-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-004-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-005-type.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-001/step-006-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Synthetic reviewer name/email/text; approval gate: A.

### TC-REVIEW-002 — `product_review_validates_required_fields`
- **Scenario / reference**: TS-REVIEW-02 / AE-041
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-09
- **Status**: PASSED
- **Execution time**: 5.03 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Review (REVIEW) [TS-REVIEW-02][TC-REVIEW-002][AE-041] product_review_validates_required_fields`.
- **Expected result**: Required/format validation prevents invalid review or gives clear feedback.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-002/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-002/step-002-click.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-002/step-003-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product detail page; approval gate: A.

### TC-REVIEW-003 — `review_form_is_associated_with_selected_product`
- **Scenario / reference**: TS-REVIEW-03 / AE-073
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-09
- **Status**: PASSED
- **Execution time**: 4.66 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Product Review (REVIEW) [TS-REVIEW-03][TC-REVIEW-003][AE-073] review_form_is_associated_with_selected_product`.
- **Expected result**: Review form is associated with the selected product; no review is submitted.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-REVIEW-003/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Product detail page; approval gate: None.

### TC-INFO-001 — `test_cases_page_loads_and_lists_practice_scenarios`
- **Scenario / reference**: TS-INFO-01 / AE-009
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-16
- **Status**: PASSED
- **Execution time**: 1.29 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Informational Pages (INFO) [TS-INFO-01][TC-INFO-001][AE-009] test_cases_page_loads_and_lists_practice_scenarios`.
- **Expected result**: Test Cases page loads and contains published scenario list.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-001/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-001/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-001/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-INFO-002 — `api_list_page_loads_without_calling_api_endpoints`
- **Scenario / reference**: TS-INFO-02 / AE-045
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-02, REQ-16
- **Status**: PASSED
- **Execution time**: 1.29 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Informational Pages (INFO) [TS-INFO-02][TC-INFO-002][AE-045] api_list_page_loads_without_calling_api_endpoints`.
- **Expected result**: Informational page loads and published API scenarios are readable.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-002/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-002/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-002/step-001-visit.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: None; approval gate: None.

### TC-INFO-003 — `informational_page_links_navigate_to_expected_destinations`
- **Scenario / reference**: TS-INFO-03 / AE-074
- **Priority / type**: P2 / Functional
- **Requirements**: REQ-16
- **Status**: PASSED
- **Execution time**: 1.92 sec
- **Steps executed**: Cypress test `Automation Exercise — 74 page-based cases Informational Pages (INFO) [TS-INFO-03][TC-INFO-003][AE-074] informational_page_links_navigate_to_expected_destinations`.
- **Expected result**: Links open the expected informational content; no API endpoint request is issued.
- **Actual result**: All assertions in this Cypress case passed.
- **Evidence**: `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-003/before.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-003/after.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-003/step-001-visit.png`; `test-artifacts/automationexercise/test-execution/screenshots/automationexercise.cy.js/TC-INFO-003/step-002-click.png`; `cypress/videos/automationexercise.cy.js (8).mp4`; `reports/cypress-results.json`
- **Notes**: Preconditions/data: Test Cases and API List pages; approval gate: None.
