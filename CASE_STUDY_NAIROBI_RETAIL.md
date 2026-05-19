# Case Study: Nairobi Retail Shop Pilot

## Summary
A shop owner in Nairobi was tracking stock and sales in a spreadsheet maintained by a store keeper. To confirm that reported sales matched physical stock the owner would manually count every item — a slow, error-prone process that consumed hours and damaged trust.

We built and piloted a lightweight retail management application to replace the spreadsheet workflow while preserving the shop's historical data and daily processes.

## Problem
- Sales and stock were kept in an Excel/Google Sheets spreadsheet maintained by the store keeper.
- The owner had to physically count every item to verify reported sales, which was time-consuming and disruptive.
- Manual processes produced inconsistencies and reduced confidence between the owner and the keeper.

## Solution
- Implemented a POS where the store keeper records sales during the day.
- Added a weekly reconciliation workflow where the owner updates stock in the app. The system computes expected stock from recorded sales and highlights discrepancies for quick verification and spot checks.
- Preserved the shop's historical spreadsheet by linking/importing it into the Supabase/Postgres database (CSV or Google Sheets sync). This reduced onboarding friction and maintained continuity for the owner.

## Technical Implementation
- Frontend: React + Tailwind — lightweight POS UI and simple weekly stock reporting screens.
- Backend & Data: Supabase(Postgres) — stores products, orders, debt records, and reconciliation logs.
- Spreadsheet Integration: CSV import or periodic Google Sheets sync to import historical rows and keep a continuity layer during migration.
- Data Flow: POS → Next.js API → Supabase DB. Periodic spreadsheet sync imports reconcile historical entries with live data.

## Outcomes
- Reduced full-store manual counts to targeted spot-checks, saving hours each week.
- Improved reconciliation accuracy and transparency between the owner and store keeper.
- Product improvements from pilot feedback: simplified POS entry, clearer discrepancy reports, automated low-stock alerts.
- Adoption: Piloted with one Nairobi shop, pitched to 7 local shops — 5 adopted and are actively using the system.

## Metrics & Lessons
- Adoption: 5/7 shops adopted after pilot demos.
- Operational impact: Weekly reconciliation time reduced by ~70% for the pilot shop.
- Lesson: Preserve customers' existing artifacts (spreadsheets) during migration to reduce friction.

## How to add this to the portfolio site
1. Commit this Markdown to the repository root (e.g., `CASE_STUDY_NAIROBI_RETAIL.md`).
2. Link to this file from `PORTFOLIO.md` or the projects list (we added a `Documentation` link for the Retail Shop project already).

---

For privacy reasons, personal details have been generalized. If you want, we can include anonymized quotes or photos from the pilot to strengthen the case study before publishing on GitHub.
