# Test Execution Evidence

## Run summary

- **Target URL**: https://automationexercise.com/
- **Execution start / end**: 2026-11-04T20:33:30.561Z / 2026-11-04T20:45:12.942Z
- **Inventory cases**: 74
- **Executed**: 72
- **Passed**: 58
- **Failed**: 14
- **Skipped / not applicable**: 2
- **Not run / missing result**: 0
- **Pass rate (executed cases)**: 80.6%

Each case has a dedicated screenshot subfolder containing a numbered screenshot after each browser action, plus before/after result screenshots and a Cypress failure screenshot when available.

Execution screenshots are grouped by case under [screenshots/automationexercise.cy.js/](screenshots/automationexercise.cy.js/); each case folder contains `before.png`, numbered action screenshots, `after.png`, and, for failed cases, `failure.png`.

Cypress console output: [cypress-run-step-by-step.log](cypress-run-step-by-step.log)

| Case ID | Test case | Result | Screenshot |
|---|---|---|---|
| [TC-HP-001](case-logs/TC-HP-001.md) | `home_page_loads_over_https` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-HP-001/) |
| [TC-HP-002](case-logs/TC-HP-002.md) | `home_page_subscription_accepts_valid_email` | PASSED | [4 step screenshots](screenshots/automationexercise.cy.js/TC-HP-002/) |
| [TC-HP-003](case-logs/TC-HP-003.md) | `scroll_to_top_control_returns_to_page_header` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-HP-003/) |
| [TC-HP-004](case-logs/TC-HP-004.md) | `home_page_supports_manual_scroll_up_and_down` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-HP-004/) |
| [TC-HP-005](case-logs/TC-HP-005.md) | `subscription_forms_reject_invalid_email` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-HP-005/) |
| [TC-HP-006](case-logs/TC-HP-006.md) | `subscription_duplicate_email_has_consistent_feedback` | FAILED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-HP-006/) |
| [TC-HP-007](case-logs/TC-HP-007.md) | `brand_logo_navigates_to_home_page` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-HP-007/) |
| [TC-HP-008](case-logs/TC-HP-008.md) | `home_hero_controls_change_visible_slide_when_available` | NOT APPLICABLE / SKIPPED | Not captured |
| [TC-HP-009](case-logs/TC-HP-009.md) | `home_page_layout_adapts_to_mobile_and_desktop_viewports` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-HP-009/) |
| [TC-HP-010](case-logs/TC-HP-010.md) | `home_page_primary_controls_are_keyboard_reachable` | FAILED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-HP-010/) |
| [TC-NAV-001](case-logs/TC-NAV-001.md) | `primary_navigation_opens_expected_public_pages` | FAILED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-NAV-001/) |
| [TC-NAV-002](case-logs/TC-NAV-002.md) | `browser_back_forward_and_refresh_keep_valid_page_state` | PASSED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-NAV-002/) |
| [TC-NAV-003](case-logs/TC-NAV-003.md) | `public_pages_load_when_opened_directly` | PASSED | [7 step screenshots](screenshots/automationexercise.cy.js/TC-NAV-003/) |
| [TC-NAV-004](case-logs/TC-NAV-004.md) | `unknown_route_shows_safe_not_found_or_home_state` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-NAV-004/) |
| [TC-AUTH-001](case-logs/TC-AUTH-001.md) | `new_user_can_register_with_valid_synthetic_data` | PASSED | [22 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-001/) |
| [TC-AUTH-002](case-logs/TC-AUTH-002.md) | `registered_user_can_log_in` | PASSED | [27 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-002/) |
| [TC-AUTH-003](case-logs/TC-AUTH-003.md) | `login_rejects_incorrect_credentials` | PASSED | [4 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-003/) |
| [TC-AUTH-004](case-logs/TC-AUTH-004.md) | `user_can_log_out_and_session_is_cleared` | PASSED | [27 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-004/) |
| [TC-AUTH-005](case-logs/TC-AUTH-005.md) | `signup_rejects_an_existing_email_address` | PASSED | [31 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-005/) |
| [TC-AUTH-006](case-logs/TC-AUTH-006.md) | `login_rejects_blank_or_partial_credentials` | PASSED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-006/) |
| [TC-AUTH-007](case-logs/TC-AUTH-007.md) | `signup_validates_required_and_malformed_fields` | PASSED | [4 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-007/) |
| [TC-AUTH-008](case-logs/TC-AUTH-008.md) | `duplicate_signup_does_not_change_existing_account` | PASSED | [30 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-008/) |
| [TC-AUTH-009](case-logs/TC-AUTH-009.md) | `logout_prevents_authenticated_state_on_revisit` | PASSED | [33 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-009/) |
| [TC-AUTH-010](case-logs/TC-AUTH-010.md) | `signup_marketing_preferences_can_be_selected_independently` | PASSED | [7 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-010/) |
| [TC-AUTH-011](case-logs/TC-AUTH-011.md) | `password_input_is_obscured_by_default` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-011/) |
| [TC-AUTH-012](case-logs/TC-AUTH-012.md) | `authenticated_state_remains_consistent_after_refresh` | PASSED | [23 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-012/) |
| [TC-AUTH-013](case-logs/TC-AUTH-013.md) | `signup_email_input_enforces_email_format` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-AUTH-013/) |
| [TC-PLP-001](case-logs/TC-PLP-001.md) | `search_returns_products_matching_query` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-001/) |
| [TC-PLP-002](case-logs/TC-PLP-002.md) | `category_selection_displays_matching_products` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-002/) |
| [TC-PLP-003](case-logs/TC-PLP-003.md) | `brand_selection_displays_matching_products` | FAILED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-003/) |
| [TC-PLP-004](case-logs/TC-PLP-004.md) | `search_displays_clear_no_match_state` | FAILED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-004/) |
| [TC-PLP-005](case-logs/TC-PLP-005.md) | `search_handles_case_and_surrounding_whitespace` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-005/) |
| [TC-PLP-006](case-logs/TC-PLP-006.md) | `search_can_be_submitted_with_enter_key` | FAILED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-006/) |
| [TC-PLP-007](case-logs/TC-PLP-007.md) | `changing_category_or_brand_updates_listing_context` | FAILED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-007/) |
| [TC-PLP-008](case-logs/TC-PLP-008.md) | `product_listing_images_load_without_broken_assets` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-008/) |
| [TC-PLP-009](case-logs/TC-PLP-009.md) | `search_results_do_not_include_unrelated_products` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-PLP-009/) |
| [TC-PDP-001](case-logs/TC-PDP-001.md) | `product_detail_shows_available_product_attributes` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-PDP-001/) |
| [TC-PDP-002](case-logs/TC-PDP-002.md) | `product_quantity_control_applies_selected_quantity` | FAILED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-PDP-002/) |
| [TC-PDP-003](case-logs/TC-PDP-003.md) | `product_details_match_selected_catalog_item` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-PDP-003/) |
| [TC-PDP-004](case-logs/TC-PDP-004.md) | `product_detail_breadcrumb_returns_to_product_listing` | FAILED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-PDP-004/) |
| [TC-PDP-005](case-logs/TC-PDP-005.md) | `product_gallery_control_changes_main_image_when_available` | FAILED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-PDP-005/) |
| [TC-CART-001](case-logs/TC-CART-001.md) | `cart_page_subscription_accepts_valid_email` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-CART-001/) |
| [TC-CART-002](case-logs/TC-CART-002.md) | `multiple_products_can_be_added_and_totals_are_shown` | PASSED | [6 step screenshots](screenshots/automationexercise.cy.js/TC-CART-002/) |
| [TC-CART-003](case-logs/TC-CART-003.md) | `cart_preserves_product_detail_quantity` | PASSED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-CART-003/) |
| [TC-CART-004](case-logs/TC-CART-004.md) | `selected_cart_product_can_be_removed` | PASSED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-CART-004/) |
| [TC-CART-005](case-logs/TC-CART-005.md) | `searched_products_remain_in_cart_after_login` | PASSED | [34 step screenshots](screenshots/automationexercise.cy.js/TC-CART-005/) |
| [TC-CART-006](case-logs/TC-CART-006.md) | `recommended_product_can_be_added_to_cart` | PASSED | [5 step screenshots](screenshots/automationexercise.cy.js/TC-CART-006/) |
| [TC-CART-007](case-logs/TC-CART-007.md) | `removing_cart_items_updates_empty_cart_state` | PASSED | [8 step screenshots](screenshots/automationexercise.cy.js/TC-CART-007/) |
| [TC-CART-008](case-logs/TC-CART-008.md) | `cart_contents_remain_consistent_after_reload_and_navigation` | PASSED | [7 step screenshots](screenshots/automationexercise.cy.js/TC-CART-008/) |
| [TC-CART-009](case-logs/TC-CART-009.md) | `cart_line_and_order_totals_are_arithmetically_correct` | PASSED | [4 step screenshots](screenshots/automationexercise.cy.js/TC-CART-009/) |
| [TC-CART-010](case-logs/TC-CART-010.md) | `adding_same_product_repeatedly_has_consistent_cart_behavior` | PASSED | [6 step screenshots](screenshots/automationexercise.cy.js/TC-CART-010/) |
| [TC-CART-011](case-logs/TC-CART-011.md) | `empty_cart_displays_clear_guidance_and_no_items` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-CART-011/) |
| [TC-CART-012](case-logs/TC-CART-012.md) | `editing_cart_quantity_recalculates_line_total` | FAILED | [4 step screenshots](screenshots/automationexercise.cy.js/TC-CART-012/) |
| [TC-CART-013](case-logs/TC-CART-013.md) | `cart_indicator_matches_cart_contents` | NOT APPLICABLE / SKIPPED | Not captured |
| [TC-CHK-001](case-logs/TC-CHK-001.md) | `guest_checkout_registration_flow_completes_order` | PASSED | [38 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-001/) |
| [TC-CHK-002](case-logs/TC-CHK-002.md) | `registered_user_can_checkout_after_registration` | PASSED | [35 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-002/) |
| [TC-CHK-003](case-logs/TC-CHK-003.md) | `logged_in_user_can_complete_checkout` | PASSED | [40 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-003/) |
| [TC-CHK-004](case-logs/TC-CHK-004.md) | `checkout_addresses_match_registered_account_details` | PASSED | [27 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-004/) |
| [TC-CHK-005](case-logs/TC-CHK-005.md) | `completed_order_invoice_can_be_downloaded` | PASSED | [37 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-005/) |
| [TC-CHK-006](case-logs/TC-CHK-006.md) | `empty_cart_cannot_create_checkout_order` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-006/) |
| [TC-CHK-007](case-logs/TC-CHK-007.md) | `guest_checkout_prompts_for_required_authentication` | PASSED | [6 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-007/) |
| [TC-CHK-008](case-logs/TC-CHK-008.md) | `payment_form_rejects_missing_or_invalid_fields` | PASSED | [29 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-008/) |
| [TC-CHK-009](case-logs/TC-CHK-009.md) | `checkout_login_redirect_preserves_cart_contents` | PASSED | [7 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-009/) |
| [TC-CHK-010](case-logs/TC-CHK-010.md) | `checkout_order_review_matches_cart_before_order_submission` | FAILED | [27 step screenshots](screenshots/automationexercise.cy.js/TC-CHK-010/) |
| [TC-CONTACT-001](case-logs/TC-CONTACT-001.md) | `contact_form_submits_valid_feedback` | PASSED | [6 step screenshots](screenshots/automationexercise.cy.js/TC-CONTACT-001/) |
| [TC-CONTACT-002](case-logs/TC-CONTACT-002.md) | `contact_form_validates_required_and_invalid_fields` | FAILED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-CONTACT-002/) |
| [TC-CONTACT-003](case-logs/TC-CONTACT-003.md) | `contact_email_field_rejects_malformed_email` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-CONTACT-003/) |
| [TC-CONTACT-004](case-logs/TC-CONTACT-004.md) | `contact_form_displays_selected_attachment_before_submit` | FAILED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-CONTACT-004/) |
| [TC-REVIEW-001](case-logs/TC-REVIEW-001.md) | `product_review_accepts_valid_synthetic_details` | PASSED | [6 step screenshots](screenshots/automationexercise.cy.js/TC-REVIEW-001/) |
| [TC-REVIEW-002](case-logs/TC-REVIEW-002.md) | `product_review_validates_required_fields` | PASSED | [3 step screenshots](screenshots/automationexercise.cy.js/TC-REVIEW-002/) |
| [TC-REVIEW-003](case-logs/TC-REVIEW-003.md) | `review_form_is_associated_with_selected_product` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-REVIEW-003/) |
| [TC-INFO-001](case-logs/TC-INFO-001.md) | `test_cases_page_loads_and_lists_practice_scenarios` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-INFO-001/) |
| [TC-INFO-002](case-logs/TC-INFO-002.md) | `api_list_page_loads_without_calling_api_endpoints` | PASSED | [1 step screenshots](screenshots/automationexercise.cy.js/TC-INFO-002/) |
| [TC-INFO-003](case-logs/TC-INFO-003.md) | `informational_page_links_navigate_to_expected_destinations` | PASSED | [2 step screenshots](screenshots/automationexercise.cy.js/TC-INFO-003/) |

Full report: [Test execution report](../reports/03-TEST-EXECUTION-REPORT.md)
