# Page-Based Test Inventory — Automation Exercise

**Status:** Proposed for review; no cases have been executed.  
**Target:** <https://automationexercise.com/>  
**Total:** 74 test cases: 50 previously cataloged cases plus 24 additions (AE-051–AE-074).  
**Type:** Functional or Non-Functional. Priority is P1 (high), P2 (medium), or P3 (low); priority does not grant execution approval.

Each row maps a test scenario (`TS-*`) to a test case (`TC-*`). The `AE-*` column cross-references the detailed case and approval gates in [the test case catalog](../test-cases/03-test-case-catalog.md). Test names are proposed Cypress `it()` names, not implemented scripts.

## Home Page (HP)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-HP-01 | TC-HP-001 | AE-001 | `home_page_loads_over_https` | P1 | Functional |
| TS-HP-02 | TC-HP-002 | AE-012 | `home_page_subscription_accepts_valid_email` | P2 | Functional |
| TS-HP-03 | TC-HP-003 | AE-027 | `scroll_to_top_control_returns_to_page_header` | P2 | Functional |
| TS-HP-04 | TC-HP-004 | AE-028 | `home_page_supports_manual_scroll_up_and_down` | P2 | Functional |
| TS-HP-05 | TC-HP-005 | AE-043 | `subscription_forms_reject_invalid_email` | P2 | Functional |
| TS-HP-06 | TC-HP-006 | AE-044 | `subscription_duplicate_email_has_consistent_feedback` | P2 | Functional |
| TS-HP-07 | TC-HP-007 | AE-051 | `brand_logo_navigates_to_home_page` | P2 | Functional |
| TS-HP-08 | TC-HP-008 | AE-052 | `home_hero_controls_change_visible_slide_when_available` | P2 | Functional |
| TS-HP-09 | TC-HP-009 | AE-053 | `home_page_layout_adapts_to_mobile_and_desktop_viewports` | P2 | Non-Functional |
| TS-HP-10 | TC-HP-010 | AE-054 | `home_page_primary_controls_are_keyboard_reachable` | P2 | Non-Functional |

## Navigation (NAV)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-NAV-01 | TC-NAV-001 | AE-002 | `primary_navigation_opens_expected_public_pages` | P1 | Functional |
| TS-NAV-02 | TC-NAV-002 | AE-046 | `browser_back_forward_and_refresh_keep_valid_page_state` | P2 | Functional |
| TS-NAV-03 | TC-NAV-003 | AE-050 | `public_pages_load_when_opened_directly` | P2 | Functional |
| TS-NAV-04 | TC-NAV-004 | AE-055 | `unknown_route_shows_safe_not_found_or_home_state` | P3 | Functional |

## Signup and Login (AUTH)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-AUTH-01 | TC-AUTH-001 | AE-003 | `new_user_can_register_with_valid_synthetic_data` | P1 | Functional |
| TS-AUTH-02 | TC-AUTH-002 | AE-004 | `registered_user_can_log_in` | P1 | Functional |
| TS-AUTH-03 | TC-AUTH-003 | AE-005 | `login_rejects_incorrect_credentials` | P1 | Functional |


| TS-AUTH-04 | TC-AUTH-004 | AE-006 | `user_can_log_out_and_session_is_cleared` | P1 | Functional |
| TS-AUTH-05 | TC-AUTH-005 | AE-007 | `signup_rejects_an_existing_email_address` | P1 | Functional |
| TS-AUTH-06 | TC-AUTH-006 | AE-029 | `login_rejects_blank_or_partial_credentials` | P1 | Functional |
| TS-AUTH-07 | TC-AUTH-007 | AE-030 | `signup_validates_required_and_malformed_fields` | P1 | Functional |
| TS-AUTH-08 | TC-AUTH-008 | AE-031 | `duplicate_signup_does_not_change_existing_account` | P1 | Functional |
| TS-AUTH-09 | TC-AUTH-009 | AE-049 | `logout_prevents_authenticated_state_on_revisit` | P1 | Functional |
| TS-AUTH-10 | TC-AUTH-010 | AE-056 | `signup_marketing_preferences_can_be_selected_independently` | P2 | Functional |
| TS-AUTH-11 | TC-AUTH-011 | AE-057 | `password_input_is_obscured_by_default` | P2 | Functional |
| TS-AUTH-12 | TC-AUTH-012 | AE-058 | `authenticated_state_remains_consistent_after_refresh` | P1 | Functional |
| TS-AUTH-13 | TC-AUTH-013 | AE-059 | `signup_email_input_enforces_email_format` | P2 | Functional |

## Products and Search (PLP)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-PLP-01 | TC-PLP-001 | AE-011 | `search_returns_products_matching_query` | P1 | Functional |
| TS-PLP-02 | TC-PLP-002 | AE-020 | `category_selection_displays_matching_products` | P2 | Functional |
| TS-PLP-03 | TC-PLP-003 | AE-021 | `brand_selection_displays_matching_products` | P2 | Functional |
| TS-PLP-04 | TC-PLP-004 | AE-033 | `search_displays_clear_no_match_state` | P1 | Functional |
| TS-PLP-05 | TC-PLP-005 | AE-034 | `search_handles_case_and_surrounding_whitespace` | P2 | Functional |
| TS-PLP-06 | TC-PLP-006 | AE-060 | `search_can_be_submitted_with_enter_key` | P2 | Functional |
| TS-PLP-07 | TC-PLP-007 | AE-061 | `changing_category_or_brand_updates_listing_context` | P2 | Functional |
| TS-PLP-08 | TC-PLP-008 | AE-062 | `product_listing_images_load_without_broken_assets` | P2 | Functional |
| TS-PLP-09 | TC-PLP-009 | AE-063 | `search_results_do_not_include_unrelated_products` | P1 | Functional |

## Product Details (PDP)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-PDP-01 | TC-PDP-001 | AE-010 | `product_detail_shows_available_product_attributes` | P1 | Functional |
| TS-PDP-02 | TC-PDP-002 | AE-032 | `product_quantity_control_applies_selected_quantity` | P1 | Functional |
| TS-PDP-03 | TC-PDP-003 | AE-047 | `product_details_match_selected_catalog_item` | P2 | Functional |
| TS-PDP-04 | TC-PDP-004 | AE-064 | `product_detail_breadcrumb_returns_to_product_listing` | P2 | Functional |
| TS-PDP-05 | TC-PDP-005 | AE-065 | `product_gallery_control_changes_main_image_when_available` | P3 | Functional |

## Cart (CART)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-CART-01 | TC-CART-001 | AE-013 | `cart_page_subscription_accepts_valid_email` | P2 | Functional |
| TS-CART-02 | TC-CART-002 | AE-014 | `multiple_products_can_be_added_and_totals_are_shown` | P1 | Functional |
| TS-CART-03 | TC-CART-003 | AE-015 | `cart_preserves_product_detail_quantity` | P1 | Functional |
| TS-CART-04 | TC-CART-004 | AE-019 | `selected_cart_product_can_be_removed` | P1 | Functional |
| TS-CART-05 | TC-CART-005 | AE-022 | `searched_products_remain_in_cart_after_login` | P1 | Functional |
| TS-CART-06 | TC-CART-006 | AE-024 | `recommended_product_can_be_added_to_cart` | P2 | Functional |
| TS-CART-07 | TC-CART-007 | AE-035 | `removing_cart_items_updates_empty_cart_state` | P1 | Functional |
| TS-CART-08 | TC-CART-008 | AE-036 | `cart_contents_remain_consistent_after_reload_and_navigation` | P1 | Functional |
| TS-CART-09 | TC-CART-009 | AE-037 | `cart_line_and_order_totals_are_arithmetically_correct` | P1 | Functional |
| TS-CART-10 | TC-CART-010 | AE-048 | `adding_same_product_repeatedly_has_consistent_cart_behavior` | P2 | Functional |
| TS-CART-11 | TC-CART-011 | AE-066 | `empty_cart_displays_clear_guidance_and_no_items` | P2 | Functional |
| TS-CART-12 | TC-CART-012 | AE-067 | `editing_cart_quantity_recalculates_line_total` | P1 | Functional |
| TS-CART-13 | TC-CART-013 | AE-068 | `cart_indicator_matches_cart_contents` | P2 | Functional |

## Checkout and Order (CHK)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-CHK-01 | TC-CHK-001 | AE-016 | `guest_checkout_registration_flow_completes_order` | P0 | Functional |
| TS-CHK-02 | TC-CHK-002 | AE-017 | `registered_user_can_checkout_after_registration` | P0 | Functional |
| TS-CHK-03 | TC-CHK-003 | AE-018 | `logged_in_user_can_complete_checkout` | P0 | Functional |
| TS-CHK-04 | TC-CHK-004 | AE-025 | `checkout_addresses_match_registered_account_details` | P1 | Functional |
| TS-CHK-05 | TC-CHK-005 | AE-026 | `completed_order_invoice_can_be_downloaded` | P0 | Functional |
| TS-CHK-06 | TC-CHK-006 | AE-038 | `empty_cart_cannot_create_checkout_order` | P1 | Functional |
| TS-CHK-07 | TC-CHK-007 | AE-039 | `guest_checkout_prompts_for_required_authentication` | P1 | Functional |
| TS-CHK-08 | TC-CHK-008 | AE-040 | `payment_form_rejects_missing_or_invalid_fields` | P0 | Functional |
| TS-CHK-09 | TC-CHK-009 | AE-069 | `checkout_login_redirect_preserves_cart_contents` | P1 | Functional |
| TS-CHK-10 | TC-CHK-010 | AE-070 | `checkout_order_review_matches_cart_before_order_submission` | P1 | Functional |

## Contact Us (CONTACT)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-CONTACT-01 | TC-CONTACT-001 | AE-008 | `contact_form_submits_valid_feedback` | P1 | Functional |
| TS-CONTACT-02 | TC-CONTACT-002 | AE-042 | `contact_form_validates_required_and_invalid_fields` | P1 | Functional |
| TS-CONTACT-03 | TC-CONTACT-003 | AE-071 | `contact_email_field_rejects_malformed_email` | P2 | Functional |
| TS-CONTACT-04 | TC-CONTACT-004 | AE-072 | `contact_form_displays_selected_attachment_before_submit` | P2 | Functional |

## Product Review (REVIEW)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-REVIEW-01 | TC-REVIEW-001 | AE-023 | `product_review_accepts_valid_synthetic_details` | P2 | Functional |
| TS-REVIEW-02 | TC-REVIEW-002 | AE-041 | `product_review_validates_required_fields` | P2 | Functional |
| TS-REVIEW-03 | TC-REVIEW-003 | AE-073 | `review_form_is_associated_with_selected_product` | P2 | Functional |

## Informational Pages (INFO)

| Test Scenario ID | Test Case ID | AE ID | Proposed test script / test name | Priority | Type |
|---|---|---|---|---|---|
| TS-INFO-01 | TC-INFO-001 | AE-009 | `test_cases_page_loads_and_lists_practice_scenarios` | P2 | Functional |
| TS-INFO-02 | TC-INFO-002 | AE-045 | `api_list_page_loads_without_calling_api_endpoints` | P2 | Functional |
| TS-INFO-03 | TC-INFO-003 | AE-074 | `informational_page_links_navigate_to_expected_destinations` | P2 | Functional |

## Approval and execution notes

- All 74 cases are proposed and unexecuted. This inventory is not execution approval.
- Case names are planned test titles. Cypress spec files and implementations will be created only after the user approves the case set.
- The detailed test steps, expected results, requirements, data needs, and destructive-action gates are in the AE catalog.
- Account creation, contact/review/subscription submission, order placement/payment, invoice download, and account deletion are gated as described in the catalog and test plan. Do not execute them without the required explicit authorization.
- The two Non-Functional cases are a limited responsive-layout check and keyboard-reachability smoke check; they are not full accessibility or cross-browser certifications.
