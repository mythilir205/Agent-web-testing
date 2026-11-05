# Automation Exercise QA Review Package

**Status:** The approved 74-case Cypress run is complete; execution and closure reports are available.

**Target:** <https://automationexercise.com/>

## Review deliverables

1. [Requirement analysis](requirements/01-requirements-analysis.md)
2. [Test plan](test-plan/02-test-plan.md)
3. [Page-based inventory — 74 cases](test-plan/03-page-based-test-inventory-74.md)
4. [Detailed test case catalog](test-cases/03-test-case-catalog.md)
5. [Requirement traceability matrix (RTM)](test-cases/04-requirement-traceability-matrix.csv)
6. [Test execution report](reports/03-TEST-EXECUTION-REPORT.md) — full-run results summary
7. [Final closure report](reports/05-FINAL-CLOSURE-REPORT.md) — final coverage and triage recommendation
8. [Latest Cypress console log](test-execution/cypress-run-step-by-step.log)
9. [Test execution folder](test-execution/README.md) — an individual readable log and screenshots after each test action
10. [Word evidence report](reports/06-TEST-CASE-EVIDENCE-REPORT.docx) — test results with step-by-step screenshots

After an approved Cypress run, generate the reports and grouped case evidence with `npm run reports:generate`.

The detailed catalog contains 74 proposed cases: the original 50 plus 24 additions. The page-based inventory assigns each case a `TS-*` scenario ID and `TC-*` case ID, grouped by page, and cross-references the detailed `AE-*` case. The first 26 published website scenarios are the baseline; the additional cases expand negative, boundary, navigation, and state-retention coverage. This is not a claim that every possible input or undiscovered behavior has been enumerated.

## Execution authorization

The user approved the test execution, including synthetic account creation/login, form submissions, test orders/payment using dummy details, and deletion of disposable test accounts for cleanup. No real personal or payment data was used.

The latest run recorded 58 passed, 14 failed, and 2 skipped cases. The case logs contain numbered screenshots after test actions; failures require triage and are not automatically classified as application defects.

## Evidence basis

- Public site and title: <https://automationexercise.com/>
- Published practice scenarios: <https://automationexercise.com/test_cases>
- Published API practice page: <https://automationexercise.com/api_list>
- Product catalog and contact page were also inspected as public pages.

API endpoints are not included in this initial UI test execution package. The API practice page itself is included as a page to verify; API behavior can be added as a separately approved scope.
