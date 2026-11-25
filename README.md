# KiranaKottu

A responsive grocery storefront prototype for local kirana stores. Built with HTML, CSS, and JavaScript; no build dependencies.

## Open the website

Open `dist/index.html` in your browser. For the exported ZIP, extract it and open `KiranaKottu.html` to use the single-file version. Some product photos and Google Fonts need an internet connection.

## Run locally

From this folder, run `python -m http.server 5173 --directory dist` and open http://127.0.0.1:5173.

## Features

Search and category filtering, price sorting, sample store selection, persistent basket with quantity controls, itemised totals, demo checkout and order history, local shopping lists, recurring delivery schedules, and merchant onboarding preview. Responsive layouts, keyboard navigation, dialog focus management, and reduced-motion support.

## Mobile version

The storefront switches to a phone layout at widths up to 640px. It includes bottom navigation, a live basket shortcut above the navigation, larger touch controls, and bottom sheets for checkout, lists, schedules, and account details. The layout respects device safe areas and reduced-motion settings. Search uses the phone keyboard's Search action.

Open `dist/mobile-preview.html` to try the phone layout from a desktop browser. The preview offers 320px, 390px, and 430px screen widths. Both layouts share the same products, basket, and saved lists.

Browser checks covered 320px, 390px, and 430px phone widths and the 1280px desktop layout, including overflow, basket changes, checkout review, saving and deleting a list, and the recurring delivery form.

The storefront uses sample products, stores, prices and delivery estimates. All user activity is stored only in the current browser. It does not contact stores, process payments, perform OCR, synchronize inventory, authenticate users, or fulfil orders. Merchant features are a preview of the project brief.

## Assets

Product images are illustrative photographs from public product listings at Amul, BigBasket, Blinkit, SilkRoutes, ProMART, H2HealthyHabits, ZipGro, JioMart, Spencer’s, Starquik, RackNSell, Apollo and SM Supermall. Grocery basket image: Marchiato Fresco. Brand names belong to their respective owners. Fonts: DM Sans and Manrope, served by Google Fonts. Replace or license product imagery and integrate live prices, inventory and fulfilment before commercial use.

