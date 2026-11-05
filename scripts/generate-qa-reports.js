const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const artifacts = path.join(root, "test-artifacts", "automationexercise");
const resultsPath = path.join(artifacts, "reports", "cypress-results.json");
const catalogPath = path.join(artifacts, "test-cases", "03-test-case-catalog.md");
const inventoryPath = path.join(artifacts, "test-plan", "03-page-based-test-inventory-74.md");
const executionDirectory = path.join(artifacts, "test-execution");
const caseLogsDirectory = path.join(executionDirectory, "case-logs");
const caseScreenshotsDirectory = path.join(executionDirectory, "screenshots");
const cypressScreenshotsDirectory = path.join(caseScreenshotsDirectory, "automationexercise.cy.js");

function readInventory() {
  const rows = fs.readFileSync(inventoryPath, "utf8").split(/\r?\n/);
  return rows
    .filter((line) => /^\| TS-[A-Z]+-\d{2} \|/.test(line))
    .map((line) => {
      const [scenarioId, caseId, aeId, name, priority, type] = line
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());
      return { scenarioId, caseId, aeId, name, priority, type };
    });
}

function readCatalog() {
  const rows = fs.readFileSync(catalogPath, "utf8").split(/\r?\n/);
  return new Map(
    rows
      .filter((line) => /^\| AE-\d{3} \|/.test(line))
      .map((line) => {
        const [id, requirements, priority, preconditions, steps, expected, gate] = line
          .split("|")
          .slice(1, -1)
          .map((cell) => cell.trim());
        return [id, { requirements, priority, preconditions, steps, expected, gate }];
      }),
  );
}

function indexResults(items) {
  return new Map(
    items.map((item) => {
      const match = item.fullTitle.match(/\[(AE-\d{3})\]/);
      return [match?.[1], item];
    }).filter(([id]) => id),
  );
}

function durationLabel(milliseconds) {
  const seconds = milliseconds / 1000;
  if (seconds < 60) {
    return `${seconds.toFixed(2)} sec`;
  }
  return `${Math.floor(seconds / 60)} min ${(seconds % 60).toFixed(2)} sec`;
}

function moveEvidenceScreenshot(sourcePath, destinationPath) {
  if (!fs.existsSync(sourcePath)) {
    return fs.existsSync(destinationPath);
  }
  if (path.resolve(sourcePath) !== path.resolve(destinationPath)) {
    fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
    if (fs.existsSync(destinationPath)) {
      fs.unlinkSync(destinationPath);
    }
    fs.renameSync(sourcePath, destinationPath);
  }
  return true;
}

function organizeScreenshots(rawResults, statuses) {
  fs.mkdirSync(cypressScreenshotsDirectory, { recursive: true });
  const screenshotPathsByCase = new Map();
  for (const item of statuses) {
    const caseDirectory = path.join(cypressScreenshotsDirectory, item.caseId);
    const organizedPaths = {};
    for (const phase of ["before", "after"]) {
      const sourcePath = path.join(cypressScreenshotsDirectory, `${item.caseId}-${phase}.png`);
      const destinationPath = path.join(caseDirectory, `${phase}.png`);
      if (moveEvidenceScreenshot(sourcePath, destinationPath)) {
        organizedPaths[phase] = destinationPath;
      }
    }

    if (item.status === "PASSED" || item.status === "FAILED") {
      if (!organizedPaths.before || !organizedPaths.after) {
        throw new Error(`Missing before/after screenshots for ${item.caseId}.`);
      }
      item.beforeScreenshotPath = organizedPaths.before;
      item.afterScreenshotPath = organizedPaths.after;
    }
    screenshotPathsByCase.set(item.caseId, { ...organizedPaths, failure: null });
  }

  for (const screenshot of rawResults.runs?.flatMap((run) => run.screenshots || []) || []) {
    const sourcePath = screenshot.path;
    const filename = path.basename(sourcePath || "");
    const caseId = screenshot.name?.match(/^(TC-[A-Z]+-\d{3})-(?:before|after|step-\d+-[a-zA-Z-]+)$/)?.[1]
      || filename.match(/\[(TC-[A-Z]+-\d{3})\]/)?.[1];
    if (!caseId || !screenshotPathsByCase.has(caseId)) continue;

    const imageMatch = screenshot.name?.match(/^TC-[A-Z]+-\d{3}-(before|after|step-\d+-[a-zA-Z-]+)$/);
    if (imageMatch) {
      const evidenceName = imageMatch[1];
      const destinationPath = path.join(cypressScreenshotsDirectory, caseId, `${evidenceName}.png`);
      if (moveEvidenceScreenshot(sourcePath, destinationPath)) {
        screenshot.path = destinationPath;
        screenshotPathsByCase.get(caseId)[evidenceName] = destinationPath;
      }
      continue;
    }

    const item = statuses.find((entry) => entry.caseId === caseId);
    if (item?.status !== "FAILED" || filename === "failure.png") continue;
    const destinationPath = path.join(cypressScreenshotsDirectory, caseId, "failure.png");
    if (moveEvidenceScreenshot(sourcePath, destinationPath)) {
      screenshot.path = destinationPath;
      screenshotPathsByCase.get(caseId).failure = destinationPath;
    }
  }

  const currentScreenshotPaths = new Set(
    (rawResults.runs?.flatMap((run) => run.screenshots || []) || [])
      .map((screenshot) => path.resolve(screenshot.path)),
  );
  for (const filename of fs.readdirSync(cypressScreenshotsDirectory)) {
    if (!/\[(TC-[A-Z]+-\d{3})\]/.test(filename) || !filename.endsWith(".png")) continue;
    const stalePath = path.join(cypressScreenshotsDirectory, filename);
    if (fs.statSync(stalePath).isFile() && !currentScreenshotPaths.has(path.resolve(stalePath))) {
      fs.unlinkSync(stalePath);
    }
  }

  return screenshotPathsByCase;
}

function generateReports() {
  if (!fs.existsSync(resultsPath)) {
    throw new Error(`Cypress JSON results not found: ${resultsPath}`);
  }

  const rawResults = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
  const run = rawResults.runs?.[0];
  const runTests = run?.tests || [];
  const videoPath = run?.video ? path.relative(root, run.video) : null;
  const results = run
    ? {
        stats: {
          tests: rawResults.totalTests,
          passes: rawResults.totalPassed,
          failures: rawResults.totalFailed,
          pending: rawResults.totalPending,
          start: run.stats?.startedAt || rawResults.startedTestsAt,
          end: run.stats?.endedAt || rawResults.endedTestsAt,
          duration: run.stats?.duration ?? rawResults.totalDuration,
        },
        passes: runTests
          .filter((test) => test.state === "passed")
          .map((test) => ({
            ...test,
            fullTitle: test.title.join(" "),
            duration: test.duration || 0,
          })),
        failures: runTests
          .filter((test) => test.state === "failed")
          .map((test) => ({
            ...test,
            fullTitle: test.title.join(" "),
            duration: test.duration || 0,
            err: {
              message:
                test.attempts?.at(-1)?.error?.message ||
                test.displayError ||
                "Cypress case failed.",
            },
          })),
        pending: runTests
          .filter((test) => test.state === "pending" || test.state === "skipped")
          .map((test) => ({
            ...test,
            fullTitle: test.title.join(" "),
            duration: test.duration || 0,
          })),
      }
    : rawResults;
  const inventory = readInventory();
  const catalog = readCatalog();
  const passed = indexResults(results.passes || []);
  const failed = indexResults(results.failures || []);
  const pending = indexResults(results.pending || []);

  if (inventory.length !== 74) {
    throw new Error(`Expected 74 inventory cases, found ${inventory.length}`);
  }

  const statuses = inventory.map((item) => {
    const result = passed.get(item.aeId) || failed.get(item.aeId) || pending.get(item.aeId);
    const status = passed.has(item.aeId)
      ? "PASSED"
      : failed.has(item.aeId)
        ? "FAILED"
        : pending.has(item.aeId)
          ? "NOT APPLICABLE / SKIPPED"
          : "NOT RUN";
    return { ...item, result, status, details: catalog.get(item.aeId) };
  });
  const screenshotPathsByCase = organizeScreenshots(rawResults, statuses);
  fs.writeFileSync(resultsPath, JSON.stringify(rawResults, null, 2), "utf8");

  const passCount = statuses.filter((item) => item.status === "PASSED").length;
  const failCount = statuses.filter((item) => item.status === "FAILED").length;
  const pendingCount = statuses.filter((item) => item.status === "NOT APPLICABLE / SKIPPED").length;
  const notRunCount = statuses.filter((item) => item.status === "NOT RUN").length;
  const executedCount = passCount + failCount;
  const started = results.stats?.start || "Not recorded";
  const ended = results.stats?.end || "Not recorded";
  const totalDuration = results.stats?.duration ?? 0;
  const now = new Date().toISOString();

  const caseSections = statuses.map((item) => {
    const error = item.result?.err;
    const actual = item.status === "PASSED"
      ? "All assertions in this Cypress case passed."
      : item.status === "FAILED"
        ? (error?.message?.split("\n")[0] || "Cypress reported a failure; see the attached Cypress output.")
        : item.status === "NOT APPLICABLE / SKIPPED"
          ? "The test marked itself skipped because the optional feature was not available."
          : "No matching result was recorded for this test case.";
    const caseScreenshotPaths = screenshotPathsByCase.get(item.caseId) || {};
    const screenshotPaths = Object.values(caseScreenshotPaths)
      .filter(Boolean)
      .map((screenshotPath) => path.relative(root, screenshotPath));
    const evidenceFiles = [
      ...screenshotPaths.map((file) => `\`${file}\``),
      videoPath ? `\`${videoPath}\`` : null,
      "`reports/cypress-results.json`",
    ].filter(Boolean);
    const evidence = evidenceFiles.join("; ");

    return [
      `### ${item.caseId} — ${item.name}`,
      `- **Scenario / reference**: ${item.scenarioId} / ${item.aeId}`,
      `- **Priority / type**: ${item.priority} / ${item.type}`,
      `- **Requirements**: ${item.details?.requirements || "See RTM"}`,
      `- **Status**: ${item.status}`,
      `- **Execution time**: ${item.result ? durationLabel(item.result.duration || 0) : "Not recorded"}`,
      `- **Steps executed**: Cypress test \`${item.result?.fullTitle || "not run"}\`.`,
      `- **Expected result**: ${item.details?.expected || "See approved test case."}`,
      `- **Actual result**: ${actual.replace(/\n/g, " ")}`,
      `- **Evidence**: ${evidence}`,
      `- **Notes**: Preconditions/data: ${item.details?.preconditions || "See test case catalog."}; approval gate: ${item.details?.gate || "None"}.`,
    ].join("\n");
  }).join("\n\n");

  const execution = `# 03 — TEST EXECUTION REPORT

## Execution Summary

- **Target URL**: https://automationexercise.com/
- **Framework / browser**: Cypress 14.5.4 / Electron headless
- **Execution start / end**: ${started} / ${ended}
- **Report generated**: ${now}
- **Execution video**: ${videoPath ? `\`${videoPath}\`` : "Not recorded"}
- **Inventory cases**: 74
- **Executed**: ${executedCount}
- **Passed**: ${passCount}
- **Failed**: ${failCount}
- **Skipped / not applicable**: ${pendingCount}
- **Not run / missing result**: ${notRunCount}
- **Pass rate (executed cases)**: ${executedCount ? ((passCount / executedCount) * 100).toFixed(1) : "0.0"}%
- **Duration**: ${durationLabel(totalDuration)}
- **Raw Cypress results**: \`reports/cypress-results.json\`

### Results by status

| Status | Count |
|---|---:|
| Passed | ${passCount} |
| Failed | ${failCount} |
| Skipped / not applicable | ${pendingCount} |
| Not run / missing result | ${notRunCount} |

## Detailed Test Case Results

${caseSections}
`;

  fs.mkdirSync(caseLogsDirectory, { recursive: true });
  const caseLogLinks = statuses.map((item) => {
    const logFilename = `${item.caseId}.md`;
    const actual = item.status === "PASSED"
      ? "All assertions in this Cypress case passed."
      : item.status === "FAILED"
        ? (item.result?.err?.message?.split("\n")[0] || "Cypress reported a failure; see the run artifacts.")
        : item.status === "NOT APPLICABLE / SKIPPED"
          ? "The test marked itself skipped because the optional feature was not available."
          : "No matching result was recorded for this test case.";
    const caseScreenshotPaths = screenshotPathsByCase.get(item.caseId) || {};
    const stepScreenshots = Object.entries(caseScreenshotPaths)
      .filter(([name]) => name.startsWith("step-"))
      .sort(([left], [right]) => left.localeCompare(right));
    const screenshotSection = item.beforeScreenshotPath
      ? `### Before execution

![${item.caseId} before execution](../screenshots/automationexercise.cy.js/${item.caseId}/before.png)

### Step-by-step screenshots

${stepScreenshots.length
  ? stepScreenshots.map(([name]) => `#### ${name}\n\n![${item.caseId} ${name}](../screenshots/automationexercise.cy.js/${item.caseId}/${name}.png)`).join("\n\n")
  : "No Cypress action screenshots were recorded for this test case."}

### After result

![${item.caseId} after result](../screenshots/automationexercise.cy.js/${item.caseId}/after.png)

${caseScreenshotPaths.failure
  ? `### Cypress failure screenshot

![${item.caseId} Cypress failure](../screenshots/automationexercise.cy.js/${item.caseId}/failure.png)`
  : ""}`
      : "No screenshots captured: this case was not run.";
    const caseLog = `# ${item.caseId} — ${item.name}

- **Scenario / reference**: ${item.scenarioId} / ${item.aeId}
- **Target URL**: https://automationexercise.com/
- **Status**: ${item.status}
- **Priority / type**: ${item.priority} / ${item.type}
- **Requirements**: ${item.details?.requirements || "See RTM"}
- **Execution time**: ${item.result ? durationLabel(item.result.duration || 0) : "Not recorded"}
- **Execution start / end**: ${started} / ${ended}

## Test record

- **Steps executed**: ${item.result?.fullTitle || "Not run"}
- **Expected result**: ${item.details?.expected || "See approved test case."}
- **Actual result**: ${actual.replace(/\n/g, " ")}
- **Notes**: Preconditions/data: ${item.details?.preconditions || "See test case catalog."}; approval gate: ${item.details?.gate || "None"}.

## Screenshot evidence

${screenshotSection}
`;
    fs.writeFileSync(path.join(caseLogsDirectory, logFilename), caseLog);
    return `| [${item.caseId}](case-logs/${logFilename}) | ${item.name} | ${item.status} | ${item.beforeScreenshotPath ? `[${stepScreenshots.length} step screenshots](screenshots/automationexercise.cy.js/${item.caseId}/)` : "Not captured"} |`;
  });
  const evidenceIndex = `# Test Execution Evidence

## Run summary

- **Target URL**: https://automationexercise.com/
- **Execution start / end**: ${started} / ${ended}
- **Inventory cases**: 74
- **Executed**: ${executedCount}
- **Passed**: ${passCount}
- **Failed**: ${failCount}
- **Skipped / not applicable**: ${pendingCount}
- **Not run / missing result**: ${notRunCount}
- **Pass rate (executed cases)**: ${executedCount ? ((passCount / executedCount) * 100).toFixed(1) : "0.0"}%

Each case has a dedicated screenshot subfolder containing a numbered screenshot after each browser action, plus before/after result screenshots and a Cypress failure screenshot when available.

Execution screenshots are grouped by case under [screenshots/automationexercise.cy.js/](screenshots/automationexercise.cy.js/); each case folder contains \`before.png\`, numbered action screenshots, \`after.png\`, and, for failed cases, \`failure.png\`.

Cypress console output: [cypress-run-step-by-step.log](cypress-run-step-by-step.log)

| Case ID | Test case | Result | Screenshot |
|---|---|---|---|
${caseLogLinks.join("\n")}

Full report: [Test execution report](../reports/03-TEST-EXECUTION-REPORT.md)
`;
  fs.writeFileSync(path.join(executionDirectory, "README.md"), evidenceIndex);

  const failedIds = statuses.filter((item) => item.status === "FAILED").map((item) => `${item.caseId} (${item.aeId})`);
  const skippedIds = statuses.filter((item) => item.status === "NOT APPLICABLE / SKIPPED").map((item) => `${item.caseId} (${item.aeId})`);
  const notRunIds = statuses.filter((item) => item.status === "NOT RUN").map((item) => `${item.caseId} (${item.aeId})`);
  const overall = failCount > 0 || notRunCount > 0
    ? "NOT READY — failures and/or unexecuted cases require triage."
    : pendingCount > 0
      ? "CONDITIONAL — executed cases completed, but skipped cases require review."
      : "TEST RUN COMPLETE — no failures recorded; this is not production release certification.";

  const closure = `# 05 — FINAL TEST CLOSURE REPORT

## Testing Summary

### Project Overview

Execution of the 74-case page-based Automation Exercise inventory at https://automationexercise.com/.

### Execution Outcome

- **Total cases in inventory**: 74
- **Executed**: ${executedCount}
- **Passed**: ${passCount}
- **Failed**: ${failCount}
- **Skipped / not applicable**: ${pendingCount}
- **Not run / missing result**: ${notRunCount}
- **Pass rate (executed cases)**: ${executedCount ? ((passCount / executedCount) * 100).toFixed(1) : "0.0"}%
- **Execution duration**: ${durationLabel(totalDuration)}
- **Detailed report**: [03 — Test Execution Report](03-TEST-EXECUTION-REPORT.md)
- **Per-case logs and screenshots**: [Test execution evidence](../test-execution/README.md)

## Coverage Analysis

The inventory covers Home, Navigation, Signup/Login, Product Listing/Search, Product Details, Cart, Checkout/Order, Contact Us, Product Review, and Informational Pages. Coverage counts reflect reported Cypress results; skipped and missing results are not counted as executed.

## Defects and Follow-up

### Failed cases

${failedIds.length ? failedIds.map((id) => `- ${id}`).join("\n") : "- None recorded."}

### Skipped / not applicable

${skippedIds.length ? skippedIds.map((id) => `- ${id}`).join("\n") : "- None recorded."}

### Not run / missing result

${notRunIds.length ? notRunIds.map((id) => `- ${id}`).join("\n") : "- None recorded."}

Failures are not automatically classified as product defects. Review each failure's actual result and Cypress evidence to distinguish application defects from environment, selector, test-data, or automation issues.

## Risks and Limitations

- This is a single-browser run against a live practice site; third-party scripts, network, or content changes can affect results.
- Account, form submission, cart, and order cases used synthetic data under the user's authorization. No real personal or payment data should be used.
- Skipped/not-applicable cases and any failed cases remain coverage gaps until triaged and, where appropriate, rerun.
- This test run is not a security, performance, full accessibility, cross-browser, or production-readiness certification.

## Closure Recommendation

**Status: ${overall}**

Review all failed and skipped cases, triage defects, and rerun corrected/blocked cases before claiming complete coverage. Do not infer release readiness solely from a passing UI test run.
`;

  const reportsDir = path.dirname(resultsPath);
  fs.writeFileSync(path.join(reportsDir, "03-TEST-EXECUTION-REPORT.md"), execution);
  fs.writeFileSync(path.join(reportsDir, "05-FINAL-CLOSURE-REPORT.md"), closure);
  console.log(`Generated reports: ${passCount} passed, ${failCount} failed, ${pendingCount} skipped, ${notRunCount} not run.`);
}

generateReports();
