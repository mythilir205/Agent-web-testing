# Agent Web Testing

Use this Cypress project for end-to-end web QA: analyze requirements, plan coverage, develop test cases, execute approved tests, investigate failures, and prepare closure reports.

The initial target is Automation Exercise. Requirements analysis, test planning, and test case review are the first phase; do not execute tests until the user approves the review package.

Project context: [website-testing-agent on GitHub](https://github.com/mythilir205/website-testing-agent). The linked repository describes the agent concept; this repository contains the Cypress starter implementation.

## Setup

```bash
npm install
```

Requires Node.js 18 or newer.

## Run tests

The project defaults to `https://automationexercise.com/`. Test execution is intentionally gated on review and explicit user approval.

```bash
npm test
npm run cy:open
```

To override the target after approval:

```bash
CYPRESS_BASE_URL=https://your-app.example npm test
```

The draft test package for Automation Exercise is in `test-artifacts/automationexercise/`.

## Project layout

- `.github/agents/web-qa-analyst.agent.md` — project-specific QA agent instructions
- `cypress/e2e/` — Cypress end-to-end tests
- `cypress.config.js` — Cypress configuration and target URL
- `package.json` — project scripts and Cypress dependency
- `test-artifacts/` — location for test plans, reports, and supporting evidence
