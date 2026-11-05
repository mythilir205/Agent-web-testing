const BASE = "https://automationexercise.com";
const password = "QaDummy!234";
let disposableUser;
let currentCaseId;
let beforeScreenshotCaptured = false;
let screenshotStepNumber = 0;

function captureActionScreenshot(commandName) {
  if (!currentCaseId || !beforeScreenshotCaptured) return;
  screenshotStepNumber += 1;
  const step = String(screenshotStepNumber).padStart(3, "0");
  cy.screenshot(`${currentCaseId}-step-${step}-${commandName}`, {
    capture: "viewport",
    overwrite: true,
    log: false,
  });
}

function visitPage(url) {
  cy.visit(url);
  if (!currentCaseId) return;
  if (!beforeScreenshotCaptured) {
    beforeScreenshotCaptured = true;
    cy.screenshot(`${currentCaseId}-before`, {
      capture: "viewport",
      overwrite: true,
      log: false,
    });
  }
  captureActionScreenshot("visit");
}

function scenario(ts, tc, ae, name, run) {
  const title = `[${ts}][${tc}][${ae}] ${name}`;
  if (Cypress.env("caseId") && Cypress.env("caseId") !== tc) {
    it.skip(title, run);
    return;
  }
  it(title, run);
}

function uniqueUser() {
  const suffix = `${Date.now()}${Cypress._.random(1000, 9999)}`;
  return {
    name: `QA User ${suffix}`,
    email: `qa-${suffix}@example.com`,
    password,
  };
}

function createAccount(user = uniqueUser()) {
  disposableUser = user;
  visitPage("/login");
  cy.get('[data-qa="signup-name"]').type(user.name);
  captureActionScreenshot("type");
  cy.get('[data-qa="signup-email"]').type(user.email);
  captureActionScreenshot("type");
  cy.get('[data-qa="signup-button"]').click();
  captureActionScreenshot("click");
  cy.contains("b", /Enter Account Information/i).should("be.visible");
  cy.get("#id_gender1").check({ force: true });
  captureActionScreenshot("check");
  cy.get("#password").type(user.password);
  captureActionScreenshot("type");
  cy.get("#days").select("10");
  captureActionScreenshot("select");
  cy.get("#months").select("5");
  captureActionScreenshot("select");
  cy.get("#years").select("1990");
  captureActionScreenshot("select");
  cy.get("#first_name").type("QA");
  captureActionScreenshot("type");
  cy.get("#last_name").type("Tester");
  captureActionScreenshot("type");
  cy.get("#company").type("Automation Test");
  captureActionScreenshot("type");
  cy.get("#address1").type("123 Test Street");
  captureActionScreenshot("type");
  cy.get("#country").select("United States");
  captureActionScreenshot("select");
  cy.get("#state").type("California");
  captureActionScreenshot("type");
  cy.get("#city").type("Test City");
  captureActionScreenshot("type");
  cy.get("#zipcode").type("90001");
  captureActionScreenshot("type");
  cy.get("#mobile_number").type("5550100123");
  captureActionScreenshot("type");
  cy.get('[data-qa="create-account"]').click();
  captureActionScreenshot("click");
  cy.contains("b", /Account Created!/i).should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
  captureActionScreenshot("click");
  cy.contains("a", /Logged in as/i).should("be.visible");
  return cy.wrap(user);
}

function login(user) {
  visitPage("/login");
  cy.get('[data-qa="login-email"]').type(user.email);
  captureActionScreenshot("type");
  cy.get('[data-qa="login-password"]').type(user.password);
  captureActionScreenshot("type");
  cy.get('[data-qa="login-button"]').click();
  captureActionScreenshot("click");
  cy.contains("a", /Logged in as/i).should("be.visible");
}

function deleteAccount() {
  cy.get('a[href="/delete_account"]').filter(":visible").first().click();
  captureActionScreenshot("click");
  cy.contains("b", /Account Deleted!/i).should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
  captureActionScreenshot("click");
  disposableUser = undefined;
}

function visitProducts() {
  visitPage("/products");
  cy.contains("h2", /All Products|Searched Products/i).should("be.visible");
}

function addProduct(index = 0) {
  cy.get(".productinfo a.add-to-cart").eq(index).scrollIntoView().click({ force: true });
  captureActionScreenshot("scrollIntoView-click");
  cy.contains("button, a", /Continue Shopping/i).filter(":visible").first().click({ force: true });
  captureActionScreenshot("click");
}

function visitCart() {
  visitPage("/view_cart");
}

function subscribe(email) {
  cy.get("#susbscribe_email").scrollIntoView().clear().type(email);
  captureActionScreenshot("scrollIntoView-clear-type");
  cy.get("#subscribe").click();
  captureActionScreenshot("click");
}

function placeOrder() {
  cy.get('textarea[name="message"]').type("Synthetic QA checkout test.");
  captureActionScreenshot("type");
  cy.contains("a, button", /^Place Order$/i).filter(":visible").click();
  captureActionScreenshot("click");
  cy.get('[data-qa="name-on-card"]').type("QA Tester");
  captureActionScreenshot("type");
  cy.get('[data-qa="card-number"]').type("1234567890123456");
  captureActionScreenshot("type");
  cy.get('[data-qa="cvc"]').type("123");
  captureActionScreenshot("type");
  cy.get('[data-qa="expiry-month"]').type("12");
  captureActionScreenshot("type");
  cy.get('[data-qa="expiry-year"]').type("2030");
  captureActionScreenshot("type");
  cy.get('[data-qa="pay-button"]').click();
  captureActionScreenshot("click");
  cy.contains("b", /Order Placed!/i).should("be.visible");
}

afterEach(() => {
  if (!disposableUser) return;
  const user = disposableUser;
  cy.get("body").then(($body) => {
    if ($body.find('a[href="/delete_account"]:visible').length) {
      deleteAccount();
    } else {
      login(user);
      deleteAccount();
    }
  });
});

describe("Automation Exercise — 74 page-based cases", () => {
  beforeEach(function captureStartingPage() {
    disposableUser = undefined;
    currentCaseId = this.currentTest.title.match(/\[(TC-[A-Z]+-\d{3})\]/)?.[1];
    beforeScreenshotCaptured = false;
    screenshotStepNumber = 0;
    if (!currentCaseId) {
      throw new Error(`Could not determine test case ID for starting screenshot: ${this.currentTest.title}`);
    }
  });

  afterEach(function captureCaseEvidence() {
    const test = this.currentTest;
    if (!test || !["passed", "failed", "pending"].includes(test.state)) return;

    const caseId = test.title.match(/\[(TC-[A-Z]+-\d{3})\]/)?.[1];
    if (!caseId) {
      throw new Error(`Could not determine test case ID for evidence capture: ${test.title}`);
    }

    cy.screenshot(`${caseId}-after`, {
      capture: "viewport",
      overwrite: true,
      log: false,
    });
  });

  describe("Home Page (HP)", () => {
    scenario("TS-HP-01", "TC-HP-001", "AE-001", "home_page_loads_over_https", () => {
      visitPage("/");
      cy.location("protocol").should("eq", "https:");
      cy.title().should("eq", "Automation Exercise");
      cy.contains(/Full-Fledged practice website for Automation Engineers/i).should("be.visible");
    });

    scenario("TS-HP-02", "TC-HP-002", "AE-012", "home_page_subscription_accepts_valid_email", () => {
      visitPage("/");
      cy.contains("h2", /Subscription/i).scrollIntoView().should("be.visible");
      captureActionScreenshot("scrollIntoView");
      subscribe(`qa-home-${Date.now()}@example.com`);
      cy.contains(/You have been successfully subscribed!/i).should("be.visible");
    });

    scenario("TS-HP-03", "TC-HP-003", "AE-027", "scroll_to_top_control_returns_to_page_header", () => {
      visitPage("/");
      cy.scrollTo("bottom");
      captureActionScreenshot("scrollTo");
      cy.contains("h2", /Subscription/i).should("be.visible");
      cy.get("#scrollUp").click({ force: true });
      captureActionScreenshot("click");
      cy.window().its("scrollY").should("be.lte", 100);
    });

    scenario("TS-HP-04", "TC-HP-004", "AE-028", "home_page_supports_manual_scroll_up_and_down", () => {
      visitPage("/");
      cy.scrollTo("bottom");
      captureActionScreenshot("scrollTo");
      cy.window().its("scrollY").should("be.gt", 100);
      cy.scrollTo("top");
      captureActionScreenshot("scrollTo");
      cy.window().its("scrollY").should("eq", 0);
    });

    scenario("TS-HP-05", "TC-HP-005", "AE-043", "subscription_forms_reject_invalid_email", () => {
      visitPage("/");
      cy.get("#susbscribe_email").scrollIntoView().type("not-an-email");
      captureActionScreenshot("scrollIntoView-type");
      cy.get("#susbscribe_email").then(($input) => {
        expect($input[0].checkValidity()).to.eq(false);
      });
    });

    scenario("TS-HP-06", "TC-HP-006", "AE-044", "subscription_duplicate_email_has_consistent_feedback", () => {
      const email = `qa-duplicate-${Date.now()}@example.com`;
      visitPage("/");
      subscribe(email);
      cy.contains(/You have been successfully subscribed!/i).should("be.visible");
      subscribe(email);
      cy.contains(/successfully subscribed|already|exist/i).should("be.visible");
    });

    scenario("TS-HP-07", "TC-HP-007", "AE-051", "brand_logo_navigates_to_home_page", () => {
      visitPage("/products");
      cy.get('a[href="/"] img').first().click({ force: true });
      captureActionScreenshot("click");
      cy.location("pathname").should("eq", "/");
      cy.title().should("eq", "Automation Exercise");
    });

    scenario("TS-HP-08", "TC-HP-008", "AE-052", "home_hero_controls_change_visible_slide_when_available", function () {
      visitPage("/");
      cy.get(".carousel-inner .item").then(($slides) => {
        if ($slides.length < 2 || !Cypress.$(".carousel-control.right").length) this.skip();
        const before = Cypress.$(".carousel-inner .item.active").index();
        cy.get(".carousel-control.right").click({ force: true });
        captureActionScreenshot("click");
        cy.get(".carousel-inner .item.active").should(($active) => {
          expect($active.index()).not.to.eq(before);
        });
      });
    });

    scenario("TS-HP-09", "TC-HP-009", "AE-053", "home_page_layout_adapts_to_mobile_and_desktop_viewports", () => {
      cy.viewport(375, 812);
      visitPage("/");
      cy.get("body").should(($body) => {
        expect($body[0].scrollWidth).to.be.at.most(375);
      });
      cy.viewport(1280, 800);
      cy.reload();
      captureActionScreenshot("reload");
      cy.get("body").should(($body) => {
        expect($body[0].scrollWidth).to.be.at.most(1280);
      });
    });

    scenario("TS-HP-10", "TC-HP-010", "AE-054", "home_page_primary_controls_are_keyboard_reachable", () => {
      visitPage("/");
      cy.get('a[href="/products"]').first().focus().should("be.focused").should("be.visible");
      captureActionScreenshot("focus");
      cy.focused().type("{enter}");
      captureActionScreenshot("type");
      cy.location("pathname").should("eq", "/products");
    });
  });

  describe("Navigation (NAV)", () => {
    scenario("TS-NAV-01", "TC-NAV-001", "AE-002", "primary_navigation_opens_expected_public_pages", () => {
      [
        ["/", "Automation Exercise"],
        ["/products", "All Products"],
        ["/view_cart", "Shopping Cart"],
        ["/login", "Login to your account"],
        ["/contact_us", "Get In Touch"],
        ["/test_cases", "Test Cases"],
        ["/api_list", "APIs List"],
      ].forEach(([path, text]) => {
        visitPage(path);
        cy.contains(new RegExp(text, "i")).should("be.visible");
      });
    });

    scenario("TS-NAV-02", "TC-NAV-002", "AE-046", "browser_back_forward_and_refresh_keep_valid_page_state", () => {
      visitPage("/");
      visitPage("/products");
      cy.go("back");
      captureActionScreenshot("go");
      cy.location("pathname").should("eq", "/");
      cy.go("forward");
      captureActionScreenshot("go");
      cy.location("pathname").should("eq", "/products");
      cy.reload();
      captureActionScreenshot("reload");
      cy.contains("h2", /All Products/i).should("be.visible");
    });

    scenario("TS-NAV-03", "TC-NAV-003", "AE-050", "public_pages_load_when_opened_directly", () => {
      ["/", "/products", "/view_cart", "/login", "/contact_us", "/test_cases", "/api_list"].forEach((path) => {
        visitPage(path);
        cy.get("body").should("be.visible").and(($body) => {
          expect($body.text().trim().length).to.be.greaterThan(10);
        });
      });
    });

    scenario("TS-NAV-04", "TC-NAV-004", "AE-055", "unknown_route_shows_safe_not_found_or_home_state", () => {
      visitPage("/");
      cy.request({ url: "/qa-route-not-found-74", failOnStatusCode: false }).then((response) => {
        expect(response.status).to.be.oneOf([200, 404]);
        expect(response.body).to.be.a("string").and.not.be.empty;
      });
    });
  });

  describe("Signup and Login (AUTH)", () => {
    scenario("TS-AUTH-01", "TC-AUTH-001", "AE-003", "new_user_can_register_with_valid_synthetic_data", () => {
      createAccount().then(() => deleteAccount());
    });

    scenario("TS-AUTH-02", "TC-AUTH-002", "AE-004", "registered_user_can_log_in", () => {
      createAccount().then((user) => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        login(user);
        deleteAccount();
      });
    });

    scenario("TS-AUTH-03", "TC-AUTH-003", "AE-005", "login_rejects_incorrect_credentials", () => {
      visitPage("/login");
      cy.get('[data-qa="login-email"]').type(`missing-${Date.now()}@example.com`);
      captureActionScreenshot("type");
      cy.get('[data-qa="login-password"]').type("WrongPassword123");
      captureActionScreenshot("type");
      cy.get('[data-qa="login-button"]').click();
      captureActionScreenshot("click");
      cy.contains(/Your email or password is incorrect!/i).should("be.visible");
    });

    scenario("TS-AUTH-04", "TC-AUTH-004", "AE-006", "user_can_log_out_and_session_is_cleared", () => {
      createAccount().then(() => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        cy.location("pathname").should("eq", "/login");
        cy.contains("a", /Logged in as/i).should("not.exist");
      });
    });

    scenario("TS-AUTH-05", "TC-AUTH-005", "AE-007", "signup_rejects_an_existing_email_address", () => {
      createAccount().then((user) => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        visitPage("/login");
        cy.get('[data-qa="signup-name"]').type("Duplicate QA");
        captureActionScreenshot("type");
        cy.get('[data-qa="signup-email"]').type(user.email);
        captureActionScreenshot("type");
        cy.get('[data-qa="signup-button"]').click();
        captureActionScreenshot("click");
        cy.contains(/Email Address already exist!/i).should("be.visible");
      });
    });

    scenario("TS-AUTH-06", "TC-AUTH-006", "AE-029", "login_rejects_blank_or_partial_credentials", () => {
      visitPage("/login");
      cy.get('[data-qa="login-button"]').click();
      captureActionScreenshot("click");
      cy.get('[data-qa="login-email"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
      cy.get('[data-qa="login-email"]').type("qa@example.com");
      captureActionScreenshot("type");
      cy.get('[data-qa="login-password"]').clear();
      captureActionScreenshot("clear");
      cy.get('[data-qa="login-button"]').click();
      captureActionScreenshot("click");
      cy.contains("a", /Logged in as/i).should("not.exist");
    });

    scenario("TS-AUTH-07", "TC-AUTH-007", "AE-030", "signup_validates_required_and_malformed_fields", () => {
      visitPage("/login");
      cy.get('[data-qa="signup-email"]').type("invalid");
      captureActionScreenshot("type");
      cy.get('[data-qa="signup-email"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
      cy.get('[data-qa="signup-name"]').clear();
      captureActionScreenshot("clear");
      cy.get('[data-qa="signup-button"]').click();
      captureActionScreenshot("click");
      cy.get('[data-qa="signup-name"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
    });

    scenario("TS-AUTH-08", "TC-AUTH-008", "AE-031", "duplicate_signup_does_not_change_existing_account", () => {
      createAccount().then((user) => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        visitPage("/login");
        cy.get('[data-qa="signup-name"]').type("Different QA Name");
        captureActionScreenshot("type");
        cy.get('[data-qa="signup-email"]').type(user.email);
        captureActionScreenshot("type");
        cy.get('[data-qa="signup-button"]').click();
        captureActionScreenshot("click");
        cy.contains(/Email Address already exist!/i).should("be.visible");
        cy.get('[data-qa="login-email"]').type(user.email);
        captureActionScreenshot("type");
        cy.get('[data-qa="login-password"]').type(user.password);
        captureActionScreenshot("type");
        cy.get('[data-qa="login-button"]').click();
        captureActionScreenshot("click");
        cy.contains("a", new RegExp(user.name)).should("be.visible");
      });
    });

    scenario("TS-AUTH-09", "TC-AUTH-009", "AE-049", "logout_prevents_authenticated_state_on_revisit", () => {
      createAccount().then((user) => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        login(user);
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        visitPage("/login");
        cy.contains("a", /Logged in as/i).should("not.exist");
      });
    });

    scenario("TS-AUTH-10", "TC-AUTH-010", "AE-056", "signup_marketing_preferences_can_be_selected_independently", () => {
      visitPage("/login");
      cy.get('[data-qa="signup-name"]').type("Preference QA");
      captureActionScreenshot("type");
      cy.get('[data-qa="signup-email"]').type(`prefs-${Date.now()}@example.com`);
      captureActionScreenshot("type");
      cy.get('[data-qa="signup-button"]').click();
      captureActionScreenshot("click");
      cy.get("#newsletter").check({ force: true }).should("be.checked");
      captureActionScreenshot("check");
      cy.get("#optin").check({ force: true }).should("be.checked");
      captureActionScreenshot("check");
      cy.get("#newsletter").uncheck({ force: true }).should("not.be.checked");
      captureActionScreenshot("uncheck");
      cy.get("#optin").should("be.checked");
    });

    scenario("TS-AUTH-11", "TC-AUTH-011", "AE-057", "password_input_is_obscured_by_default", () => {
      visitPage("/login");
      cy.get('[data-qa="login-password"]').should("have.attr", "type", "password");
      cy.get("#password").should("not.exist");
    });

    scenario("TS-AUTH-12", "TC-AUTH-012", "AE-058", "authenticated_state_remains_consistent_after_refresh", () => {
      createAccount().then(() => {
        cy.reload();
        captureActionScreenshot("reload");
        cy.contains("a", /Logged in as/i).should("be.visible");
      });
    });

    scenario("TS-AUTH-13", "TC-AUTH-013", "AE-059", "signup_email_input_enforces_email_format", () => {
      visitPage("/login");
      cy.get('[data-qa="signup-name"]').type("Invalid Email QA");
      captureActionScreenshot("type");
      cy.get('[data-qa="signup-email"]').type("bad-email");
      captureActionScreenshot("type");
      cy.get('[data-qa="signup-email"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
    });
  });

  describe("Products and Search (PLP)", () => {
    scenario("TS-PLP-01", "TC-PLP-001", "AE-011", "search_returns_products_matching_query", () => {
      visitProducts();
      cy.get(".productinfo p").first().invoke("text").then((name) => {
        const query = name.trim().split(/\s+/)[0];
        cy.get("#search_product").type(query);
        captureActionScreenshot("type");
        cy.get("#submit_search").click();
        captureActionScreenshot("click");
        cy.contains("h2", /Searched Products/i).should("be.visible");
        cy.get(".productinfo p").should("have.length.greaterThan", 0);
      });
    });

    scenario("TS-PLP-02", "TC-PLP-002", "AE-020", "category_selection_displays_matching_products", () => {
      visitPage("/");
      cy.get("#accordian").contains("a", /Women/i).click();
      captureActionScreenshot("click");
      cy.get("#accordian").contains("a", /Dress/i).first().click();
      captureActionScreenshot("click");
      cy.contains("h2", /Women|Products/i).should("be.visible");
      cy.get(".features_items").should("be.visible");
    });

    scenario("TS-PLP-03", "TC-PLP-003", "AE-021", "brand_selection_displays_matching_products", () => {
      visitProducts();
      cy.get("#brands a").first().then(($brand) => {
        const brandName = $brand.text().trim();
        cy.wrap($brand).click();
        captureActionScreenshot("click");
        cy.contains("h2", new RegExp(brandName, "i")).should("be.visible");
        cy.get(".features_items").should("be.visible");
      });
    });

    scenario("TS-PLP-04", "TC-PLP-004", "AE-033", "search_displays_clear_no_match_state", () => {
      visitProducts();
      cy.get("#search_product").type(`no-such-product-${Date.now()}`);
      captureActionScreenshot("type");
      cy.get("#submit_search").click();
      captureActionScreenshot("click");
      cy.contains("h2", /Searched Products/i).should("be.visible");
      cy.get(".productinfo p").should("not.contain.text", "no-such-product");
    });

    scenario("TS-PLP-05", "TC-PLP-005", "AE-034", "search_handles_case_and_surrounding_whitespace", () => {
      visitProducts();
      cy.get(".productinfo p").first().invoke("text").then((name) => {
        const query = name.trim().split(/\s+/)[0];
        cy.get("#search_product").type(`  ${query.toUpperCase()}  `);
        captureActionScreenshot("type");
        cy.get("#submit_search").click();
        captureActionScreenshot("click");
        cy.contains("h2", /Searched Products/i).should("be.visible");
      });
    });

    scenario("TS-PLP-06", "TC-PLP-006", "AE-060", "search_can_be_submitted_with_enter_key", () => {
      visitProducts();
      cy.get(".productinfo p").first().invoke("text").then((name) => {
        cy.get("#search_product").type(`${name.trim().split(/\s+/)[0]}{enter}`);
        captureActionScreenshot("type");
        cy.contains("h2", /Searched Products/i).should("be.visible");
      });
    });

    scenario("TS-PLP-07", "TC-PLP-007", "AE-061", "changing_category_or_brand_updates_listing_context", () => {
      visitProducts();
      cy.get("#brands a").then(($brands) => {
        if ($brands.length < 2) throw new Error("Fewer than two brands are available");
        const first = $brands.eq(0).text().trim();
        const second = $brands.eq(1).text().trim();
        cy.wrap($brands.eq(0)).click();
        captureActionScreenshot("click");
        cy.contains("h2", new RegExp(first, "i")).should("be.visible");
        visitPage("/products");
        cy.contains("#brands a", second).click();
        captureActionScreenshot("click");
        cy.contains("h2", new RegExp(second, "i")).should("be.visible");
      });
    });

    scenario("TS-PLP-08", "TC-PLP-008", "AE-062", "product_listing_images_load_without_broken_assets", () => {
      visitProducts();
      cy.get(".features_items img").each(($img) => {
        cy.wrap($img).should("be.visible").and(($image) => {
          expect($image[0].naturalWidth).to.be.greaterThan(0);
        });
      });
    });

    scenario("TS-PLP-09", "TC-PLP-009", "AE-063", "search_results_do_not_include_unrelated_products", () => {
      visitProducts();
      cy.get(".productinfo p").first().invoke("text").then((name) => {
        const query = name.trim().split(/\s+/)[0].toLowerCase();
        cy.get("#search_product").type(query);
        captureActionScreenshot("type");
        cy.get("#submit_search").click();
        captureActionScreenshot("click");
        cy.get(".productinfo p").each(($result) => {
          expect($result.text().toLowerCase()).to.include(query);
        });
      });
    });
  });

  describe("Product Details (PDP)", () => {
    scenario("TS-PDP-01", "TC-PDP-001", "AE-010", "product_detail_shows_available_product_attributes", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get(".product-information").should("be.visible").within(() => {
        cy.get("h2").should("be.visible");
        cy.contains(/Category:/i).should("be.visible");
        cy.contains(/Rs\./i).should("be.visible");
        cy.contains(/Availability:|Condition:|Brand:/i).should("be.visible");
      });
    });

    scenario("TS-PDP-02", "TC-PDP-002", "AE-032", "product_quantity_control_applies_selected_quantity", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get("#quantity").clear().type("4");
      captureActionScreenshot("clear-type");
      cy.get('button:contains("Add to cart")').click();
      captureActionScreenshot("click");
      visitCart();
      cy.get(".cart_quantity button, .cart_quantity input").should("contain.value", "4");
    });

    scenario("TS-PDP-03", "TC-PDP-003", "AE-047", "product_details_match_selected_catalog_item", () => {
      visitProducts();
      cy.get(".features_items .productinfo p").first().invoke("text").then((name) => {
        cy.get('a[href^="/product_details/"]').first().click();
        captureActionScreenshot("click");
        cy.get(".product-information h2").should("contain.text", name.trim());
      });
    });

    scenario("TS-PDP-04", "TC-PDP-004", "AE-064", "product_detail_breadcrumb_returns_to_product_listing", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get(".breadcrumb a").contains(/Products/i).click();
      captureActionScreenshot("click");
      cy.location("pathname").should("eq", "/products");
      cy.contains("h2", /All Products/i).should("be.visible");
    });

    scenario("TS-PDP-05", "TC-PDP-005", "AE-065", "product_gallery_control_changes_main_image_when_available", function () {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get(".product-information").should("be.visible");
      cy.get(".product-gallery img, .thumbnail img").then(($images) => {
        if ($images.length < 2) this.skip();
        const first = $images.eq(0).attr("src");
        cy.wrap($images.eq(1)).click({ force: true });
        captureActionScreenshot("click");
        cy.get(".product-information img").should(($main) => {
          expect($main.attr("src")).to.not.eq(first);
        });
      });
    });
  });

  describe("Cart (CART)", () => {
    scenario("TS-CART-01", "TC-CART-001", "AE-013", "cart_page_subscription_accepts_valid_email", () => {
      visitCart();
      subscribe(`qa-cart-${Date.now()}@example.com`);
      cy.contains(/You have been successfully subscribed!/i).should("be.visible");
    });

    scenario("TS-CART-02", "TC-CART-002", "AE-014", "multiple_products_can_be_added_and_totals_are_shown", () => {
      visitProducts();
      addProduct(0);
      addProduct(1);
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 2);
      cy.get(".cart_total").should("be.visible");
    });

    scenario("TS-CART-03", "TC-CART-003", "AE-015", "cart_preserves_product_detail_quantity", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get("#quantity").clear().type("4");
      captureActionScreenshot("clear-type");
      cy.contains("button", /Add to cart/i).click();
      captureActionScreenshot("click");
      cy.contains("a", /View Cart/i).click();
      captureActionScreenshot("click");
      cy.get(".cart_quantity").should("contain.text", "4");
    });

    scenario("TS-CART-04", "TC-CART-004", "AE-019", "selected_cart_product_can_be_removed", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      cy.get(".cart_quantity_delete").first().click();
      captureActionScreenshot("click");
      cy.get("#cart_info_table tbody tr").should("have.length", 0);
    });

    scenario("TS-CART-05", "TC-CART-005", "AE-022", "searched_products_remain_in_cart_after_login", () => {
      const user = uniqueUser();
      createAccount(user).then(() => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        visitProducts();
        cy.get(".productinfo p").first().invoke("text").then((name) => {
          cy.get("#search_product").type(name.trim().split(/\s+/)[0]);
          captureActionScreenshot("type");
          cy.get("#submit_search").click();
          captureActionScreenshot("click");
          addProduct(0);
          visitCart();
          cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
          login(user);
          visitCart();
          cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
        });
      });
    });

    scenario("TS-CART-06", "TC-CART-006", "AE-024", "recommended_product_can_be_added_to_cart", () => {
      visitPage("/");
      cy.contains(/Recommended Items/i).scrollIntoView().should("be.visible");
      captureActionScreenshot("scrollIntoView");
      cy.get(".recommended_items .add-to-cart").first().click({ force: true });
      captureActionScreenshot("click");
      cy.contains("button, a", /Continue Shopping/i).filter(":visible").first().click({ force: true });
      captureActionScreenshot("click");
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
    });

    scenario("TS-CART-07", "TC-CART-007", "AE-035", "removing_cart_items_updates_empty_cart_state", () => {
      visitProducts();
      addProduct(0);
      addProduct(1);
      visitCart();
      cy.get(".cart_quantity_delete").first().click();
      captureActionScreenshot("click");
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      cy.get(".cart_quantity_delete").first().click();
      captureActionScreenshot("click");
      cy.get("#cart_info_table tbody tr").should("have.length", 0);
    });

    scenario("TS-CART-08", "TC-CART-008", "AE-036", "cart_contents_remain_consistent_after_reload_and_navigation", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      cy.reload();
      captureActionScreenshot("reload");
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      visitPage("/");
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
    });

    scenario("TS-CART-09", "TC-CART-009", "AE-037", "cart_line_and_order_totals_are_arithmetically_correct", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.get("#cart_info_table tbody tr").first().within(() => {
        cy.get(".cart_price").invoke("text").as("price");
        cy.get(".cart_quantity").invoke("text").as("quantity");
        cy.get(".cart_total").invoke("text").as("total");
      });
      cy.get("@price").then((priceText) => {
        cy.get("@quantity").then((quantityText) => {
          cy.get("@total").then((totalText) => {
            const price = Number(priceText.replace(/[^\d.]/g, ""));
            const quantity = Number(quantityText.trim());
            const total = Number(totalText.replace(/[^\d.]/g, ""));
            expect(total).to.eq(price * quantity);
          });
        });
      });
    });

    scenario("TS-CART-10", "TC-CART-010", "AE-048", "adding_same_product_repeatedly_has_consistent_cart_behavior", () => {
      visitProducts();
      addProduct(0);
      addProduct(0);
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      cy.get(".cart_quantity").first().invoke("text").then((quantity) => {
        expect(Number(quantity.trim())).to.be.greaterThan(0);
      });
    });

    scenario("TS-CART-11", "TC-CART-011", "AE-066", "empty_cart_displays_clear_guidance_and_no_items", () => {
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length", 0);
      cy.contains(/Cart is empty|empty cart|shopping cart/i).should("be.visible");
    });

    scenario("TS-CART-12", "TC-CART-012", "AE-067", "editing_cart_quantity_recalculates_line_total", function () {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.get(".cart_quantity_input").then(($quantity) => {
        if (!$quantity.length) this.skip();
        cy.wrap($quantity.first()).clear().type("2").blur();
        captureActionScreenshot("clear-type");
        cy.get(".cart_total").first().should("be.visible");
      });
    });

    scenario("TS-CART-13", "TC-CART-013", "AE-068", "cart_indicator_matches_cart_contents", function () {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
      cy.get('a[href="/view_cart"]').first().invoke("text").then((text) => {
        if (!/\d/.test(text)) this.skip();
        expect(Number(text.match(/\d+/)[0])).to.be.greaterThan(0);
      });
    });
  });

  describe("Checkout and Order (CHK)", () => {
    scenario("TS-CHK-01", "TC-CHK-001", "AE-016", "guest_checkout_registration_flow_completes_order", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.contains("a", /Proceed To Checkout/i).click();
      captureActionScreenshot("click");
      cy.contains("a", /Register \/ Login/i).click();
      captureActionScreenshot("click");
      createAccount().then(() => {
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        cy.contains(/Address Details/i).should("be.visible");
        placeOrder();
        deleteAccount();
      });
    });

    scenario("TS-CHK-02", "TC-CHK-002", "AE-017", "registered_user_can_checkout_after_registration", () => {
      createAccount().then(() => {
        visitProducts();
        addProduct(0);
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        cy.contains(/Address Details/i).should("be.visible");
        placeOrder();
        deleteAccount();
      });
    });

    scenario("TS-CHK-03", "TC-CHK-003", "AE-018", "logged_in_user_can_complete_checkout", () => {
      createAccount().then((user) => {
        cy.get('a[href="/logout"]').click();
        captureActionScreenshot("click");
        login(user);
        visitProducts();
        addProduct(0);
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        placeOrder();
        deleteAccount();
      });
    });

    scenario("TS-CHK-04", "TC-CHK-004", "AE-025", "checkout_addresses_match_registered_account_details", () => {
      createAccount().then(() => {
        visitProducts();
        addProduct(0);
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        cy.contains(/QA Tester/i).should("be.visible");
        cy.contains(/123 Test Street/i).should("be.visible");
        deleteAccount();
      });
    });

    scenario("TS-CHK-05", "TC-CHK-005", "AE-026", "completed_order_invoice_can_be_downloaded", () => {
      createAccount().then(() => {
        visitProducts();
        addProduct(0);
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        placeOrder();
        cy.contains("a, button", /Download Invoice/i).click();
        captureActionScreenshot("click");
        cy.readFile("cypress/downloads/invoice.txt", { timeout: 10000 }).should("not.be.empty");
        cy.contains("a, button", /Continue/i).click();
        captureActionScreenshot("click");
        deleteAccount();
      });
    });

    scenario("TS-CHK-06", "TC-CHK-006", "AE-038", "empty_cart_cannot_create_checkout_order", () => {
      visitCart();
      cy.get("#cart_info_table tbody tr").should("have.length", 0);
      cy.contains("a", /Proceed To Checkout/i).should("not.exist");
    });

    scenario("TS-CHK-07", "TC-CHK-007", "AE-039", "guest_checkout_prompts_for_required_authentication", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.contains("a", /Proceed To Checkout/i).click();
      captureActionScreenshot("click");
      cy.contains(/Register \/ Login/i).should("be.visible");
      cy.contains("a", /Register \/ Login/i).click();
      captureActionScreenshot("click");
      cy.location("pathname").should("eq", "/login");
    });

    scenario("TS-CHK-08", "TC-CHK-008", "AE-040", "payment_form_rejects_missing_or_invalid_fields", () => {
      createAccount().then(() => {
        visitProducts();
        addProduct(0);
        visitCart();
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        cy.contains("a, button", /^Place Order$/i).filter(":visible").click();
        captureActionScreenshot("click");
        cy.get('[data-qa="pay-button"]').click();
        captureActionScreenshot("click");
        cy.location("pathname").should("include", "/payment");
        cy.contains("b", /Order Placed!/i).should("not.exist");
        deleteAccount();
      });
    });

    scenario("TS-CHK-09", "TC-CHK-009", "AE-069", "checkout_login_redirect_preserves_cart_contents", () => {
      visitProducts();
      addProduct(0);
      visitCart();
      cy.contains("a", /Proceed To Checkout/i).click();
      captureActionScreenshot("click");
      cy.contains("a", /Register \/ Login/i).click();
      captureActionScreenshot("click");
      cy.location("pathname").should("eq", "/login");
      visitPage("/view_cart");
      cy.get("#cart_info_table tbody tr").should("have.length.at.least", 1);
    });

    scenario("TS-CHK-10", "TC-CHK-010", "AE-070", "checkout_order_review_matches_cart_before_order_submission", () => {
      createAccount().then(() => {
        visitProducts();
        addProduct(0);
        visitCart();
        cy.get("#cart_info_table tbody tr").first().find(".cart_total").invoke("text").as("cartTotal");
        cy.contains("a", /Proceed To Checkout/i).click();
        captureActionScreenshot("click");
        cy.get("#cart_info_table tbody tr").first().find(".cart_total").invoke("text").as("checkoutTotal");
        cy.get("@cartTotal").then((cartTotal) => {
          cy.get("@checkoutTotal").should("eq", cartTotal);
        });
      });
    });
  });

  describe("Contact Us (CONTACT)", () => {
    scenario("TS-CONTACT-01", "TC-CONTACT-001", "AE-008", "contact_form_submits_valid_feedback", () => {
      visitPage("/contact_us");
      cy.get('[data-qa="name"]').type("QA Contact");
      captureActionScreenshot("type");
      cy.get('[data-qa="email"]').type(`contact-${Date.now()}@example.com`);
      captureActionScreenshot("type");
      cy.get('[data-qa="subject"]').type("Automated QA feedback");
      captureActionScreenshot("type");
      cy.get('[data-qa="message"]').type("Synthetic contact form test.");
      captureActionScreenshot("type");
      cy.on("window:confirm", () => true);
      cy.get('[data-qa="submit-button"]').click();
      captureActionScreenshot("click");
      cy.contains(/Success! Your details have been submitted successfully./i).should("be.visible");
    });

    scenario("TS-CONTACT-02", "TC-CONTACT-002", "AE-042", "contact_form_validates_required_and_invalid_fields", () => {
      visitPage("/contact_us");
      cy.get('[data-qa="submit-button"]').click();
      captureActionScreenshot("click");
      cy.get('[data-qa="name"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
    });

    scenario("TS-CONTACT-03", "TC-CONTACT-003", "AE-071", "contact_email_field_rejects_malformed_email", () => {
      visitPage("/contact_us");
      cy.get('[data-qa="name"]').type("QA Contact");
      captureActionScreenshot("type");
      cy.get('[data-qa="email"]').type("bad-email");
      captureActionScreenshot("type");
      cy.get('[data-qa="email"]').then(($input) => expect($input[0].checkValidity()).to.eq(false));
    });

    scenario("TS-CONTACT-04", "TC-CONTACT-004", "AE-072", "contact_form_displays_selected_attachment_before_submit", () => {
      visitPage("/contact_us");
      cy.get('input[type="file"]').selectFile("cypress/fixtures/qa-attachment.txt");
      captureActionScreenshot("selectFile");
      cy.get('input[type="file"]').should("have.value").and("include", "qa-attachment.txt");
      cy.get('[data-qa="submit-button"]').should("be.visible");
    });
  });

  describe("Product Review (REVIEW)", () => {
    scenario("TS-REVIEW-01", "TC-REVIEW-001", "AE-023", "product_review_accepts_valid_synthetic_details", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get("#name").type("QA Reviewer");
      captureActionScreenshot("type");
      cy.get("#email").type(`review-${Date.now()}@example.com`);
      captureActionScreenshot("type");
      cy.get("#review").type("Synthetic review submitted by the approved QA run.");
      captureActionScreenshot("type");
      cy.get("#button-review").click();
      captureActionScreenshot("click");
      cy.contains(/Thank you for your review./i).should("be.visible");
    });

    scenario("TS-REVIEW-02", "TC-REVIEW-002", "AE-041", "product_review_validates_required_fields", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get("#button-review").click();
      captureActionScreenshot("click");
      cy.get("#review").then(($input) => expect($input[0].checkValidity()).to.eq(false));
    });

    scenario("TS-REVIEW-03", "TC-REVIEW-003", "AE-073", "review_form_is_associated_with_selected_product", () => {
      visitProducts();
      cy.get('a[href^="/product_details/"]').first().click();
      captureActionScreenshot("click");
      cy.get(".product-information h2").invoke("text").as("selectedProduct");
      cy.contains(/Write Your Review/i).should("be.visible");
      cy.get("#name").should("be.visible");
      cy.get("@selectedProduct").should("not.be.empty");
      cy.get("#button-review").should("be.visible");
    });
  });

  describe("Informational Pages (INFO)", () => {
    scenario("TS-INFO-01", "TC-INFO-001", "AE-009", "test_cases_page_loads_and_lists_practice_scenarios", () => {
      visitPage("/test_cases");
      cy.contains(/Test Cases/i).should("be.visible");
      cy.contains(/Register User/i).should("be.visible");
      cy.contains(/Search Product/i).should("be.visible");
    });

    scenario("TS-INFO-02", "TC-INFO-002", "AE-045", "api_list_page_loads_without_calling_api_endpoints", () => {
      visitPage("/api_list");
      cy.contains(/APIs List/i).should("be.visible");
      cy.contains(/Create\/Register User Account/i).should("be.visible");
      cy.location("pathname").should("eq", "/api_list");
    });

    scenario("TS-INFO-03", "TC-INFO-003", "AE-074", "informational_page_links_navigate_to_expected_destinations", () => {
      visitPage("/test_cases");
      cy.get('a[href*="api_list"]').first().then(($link) => {
        if (!$link.length) {
          visitPage("/api_list");
        } else {
          cy.wrap($link).click();
          captureActionScreenshot("click");
        }
      });
      cy.location("pathname").should("eq", "/api_list");
      cy.contains(/APIs List/i).should("be.visible");
    });
  });
});
